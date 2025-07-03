import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from "node:path";
import { viteStaticCopy } from 'vite-plugin-static-copy';


export default defineConfig({
  plugins: [
    vue(),
    dts({
      copyDtsFiles: true,
    }),
    vueJsx(),
    viteStaticCopy({ // <--- 추가: SCSS 파일 및 관련 파일 복사
      targets: [
        {
          src: 'src/styles',
          dest: '.' // dist/styles 로 복사
        }
      ]
    }) // <--- 추가 끝
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')  // Add this alias
    }
  },
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // <--- path.resolve 사용 권장
      name: 'HDesignSystem',
      formats: ['es', 'cjs'], // ESM과 CommonJS 포맷으로 빌드
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`, // <--- 추가: 출력 파일 이름 지정
    },
    rollupOptions: {
      external: ['vue', 'pinia', '@vueuse/core'],
      treeshake: true,
      output: {
        globals: { vue: 'Vue' }
      }
    }
  }
})
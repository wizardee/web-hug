import { defineConfig, presetAttributify, presetWind3, transformerCompileClass } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(), presetWind3(),
  ],
  content: {
    pipeline: {
      include: [
        /\.\/src\/.*\.(vue|js|ts|jsx|tsx)$/,
        './src/**/*.mdx',
        './src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
      ]
    },
  },
  transformers: [transformerCompileClass()],
  // ...UnoCSS options
})

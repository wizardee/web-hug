import type { StorybookConfig } from '@storybook/vue3-vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        UnoCSS(),
      ],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': require('path').resolve(__dirname, '../src'),
        },
      },
    };
  },
};
export default config;
import { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  framework: '@storybook/vue3-vite',
  stories: ['../src/**/*.stories.@(js|ts)'],
  addons: ['@storybook/addon-controls', '@storybook/adon-actions'],
};

export default config;

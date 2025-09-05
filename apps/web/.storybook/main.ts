import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  "stories": [
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
        '@storybook/addon-themes',

  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
    staticDirs: ["../public"],

}
export default config
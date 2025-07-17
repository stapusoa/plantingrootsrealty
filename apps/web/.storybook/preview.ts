import type { Preview } from '@storybook/react-vite'
import "@/index.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
     themes: {
    default: 'Light',
    list: [
      { name: 'Light', class: 'light', color: '#ffffff', default: true },
      { name: 'Dark', class: 'dark', color: '#000000' },
    ],
  },
  },
};


export default preview;
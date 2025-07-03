import type { Preview } from '@storybook/vue3-vite'
import 'uno.css'
import '../src/styles/__colors.scss'
import '../src/styles/__globals.scss'
import '../src/styles/__typos.scss'
import '../src/styles/__variables.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
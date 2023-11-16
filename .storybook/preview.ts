import type { Preview } from '@storybook/svelte'
import './style.css'
import '../src/stories/assets/styles/index.scss'

declare const __VERSION__: string

const version = __VERSION__
console.log(`%cVersion: v${version}`, 'color: lightgreen;')

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview

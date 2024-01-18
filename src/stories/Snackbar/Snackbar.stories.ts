import type { Meta, StoryObj } from '@storybook/svelte'

import Snackbar from './Snackbar.svelte'

const meta = {
  title: 'Combined Component/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  argTypes: {
    delay: {
      description: 'ms 단위이며 노출되는 시간을 결정합니다.',
    },
  },
  parameters: {
    docs: {
      story: {
        height: '100px',
      },
    },
  },
} satisfies Meta<Snackbar>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

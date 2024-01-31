import type { Meta, StoryObj } from '@storybook/svelte'

import Snackbar from './Snackbar.svelte'

const meta = {
  title: 'Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  argTypes: {
    delay: {
      description: 'ms 단위이며 노출되는 시간을 결정합니다.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '+layout.svelte에 Snackbar 컴포넌트를 넣고 showToast(message, duration?) 함수를 호출하여 사용합니다.',
      },
      story: {
        height: '100px',
      },
    },
  },
} satisfies Meta<Snackbar>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

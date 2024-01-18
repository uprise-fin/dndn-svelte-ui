import type { Meta, StoryObj } from '@storybook/svelte'

import Snackbar from './Snackbar.svelte'

const meta = {
  title: 'Combined Component/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  argTypes: {
    message: {
      description: 'showToast(message, duration?) 함수를 호출하는 형태로 사용합니다.',
    },
    delay: {
      description: '최초에 지속적으로 노출되는 시간을 설정합니다.',
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

export const Basic: Story = {
  args: {
    message: '텍스트 입력',
  },
}

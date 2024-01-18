import type { Meta, StoryObj } from '@storybook/svelte'

import Snackbar from './Snackbar.svelte'

const meta = {
  title: 'Combined Component/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  argTypes: {
    delay: {
      description: '최초에 지속적으로 노출되는 시간을 설정합니다.',
    },
    duration: {
      description: '사라지기 시작하여 완전히 없어지기까지의 시간을 설정합니다.',
    },
    showToast: {
      description: '매개변수로 전달된 메시지를 노출합니다.',
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

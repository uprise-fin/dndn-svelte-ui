import type { Meta, StoryObj } from '@storybook/svelte'

import Modal from './Modal.svelte'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: {
      description: 'bind:{property} 형태로 전달하면 양방향 바인딩됩니다.',
    },
    toast: {
      description: 'toast 모드로 노출합니다.',
    },
    disableEscapeKeyDown: {
      table: {
        disable: true,
      },
    },
    keepDialog: {
      description: 'dialog 요소를 닫지 않습니다.',
    },
  },
  parameters: {
    docs: {
      story: {
        height: '300px',
      },
    },
  },
} satisfies Meta<Modal>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Basic: Story = {
  args: {
    open: true,
    title: '휴대폰 번호 변경 실패',
    content:
      '<span style="color: var(--color--danger);">본인 명의의 휴대폰 번호</span>로만\n변경할 수 있어요.',
  },
}

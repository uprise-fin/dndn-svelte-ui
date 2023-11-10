import type { Meta, StoryObj } from '@storybook/svelte'

import Input from './Input.svelte'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Example/TextField',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: 'bind:{property} 형태로 전달하면 양방향으로 바인딩됩니다.',
    },
    id: {
      table: {
        disable: true,
      },
    },
    clearable: {
      description: '요소 안 우측의 X버튼 노출 여부를 결정합니다.',
    },
  },
} satisfies Meta<Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Basic: Story = {
  args: {
    label: '라벨',
    disabled: false,
    placeholder: '플레이스 홀더',
    value: '입력한 정보',
    description: '설명글',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: '입력한 정보',
  },
}

export const Error: Story = {
  args: {
    errorMessage: '에러 힌트',
  },
}

import type { Meta, StoryObj } from '@storybook/svelte'

import Checkbox from './Checkbox.svelte'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Selection Controls/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      description: 'bind로 전달하면 양방향 바인딩됩니다.',
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Basic: Story = {
  args: {
    checked: false,
    rounded: false,
  },
}

export const Rounded: Story = {
  args: {
    rounded: true,
  },
}

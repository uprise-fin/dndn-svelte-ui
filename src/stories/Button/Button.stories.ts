import type { Meta, StoryObj } from '@storybook/svelte'

import Button from './Button.svelte'
import { buttonVariant } from './button'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: buttonVariant,
    },
  },
} satisfies Meta<Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Text',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Text',
  },
}

export const Link: Story = {
  args: {
    href: 'https://dndn.io/',
    target: '_blank',
    label: '든든 바로가기',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Text',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    label: 'Text',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Text',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Text',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Text',
  },
}

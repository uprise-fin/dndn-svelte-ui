import type { Meta, StoryObj } from '@storybook/svelte'

import { size as realSize } from '$lib'
import Badge from './Badge.svelte'

const size = realSize.filter((s) => s !== 'x-large')
const meta = {
  title: 'Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    size: {
      table: {
        type: { summary: size.join(' | ') },
      },
      options: size,
      control: { type: 'select' },
    },
  },
} satisfies Meta<Badge>

export default meta
type Story = StoryObj<typeof meta>

export const basic: Story = {
  args: {
    label: 'NEW',
  },
}

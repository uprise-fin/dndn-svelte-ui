import type { Meta, StoryObj } from '@storybook/svelte'

import Tabs from './Tabs.svelte'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<Tabs>

export default meta;
type Story = StoryObj<typeof meta>;

export const Tab: Story = {
  args: {
  },
};
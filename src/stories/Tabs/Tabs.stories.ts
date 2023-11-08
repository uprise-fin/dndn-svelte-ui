import type { Meta, StoryObj } from '@storybook/svelte'

import Tabs from './Tabs.svelte'
import { tabQuantity } from './type'


const meta = {
  title: 'Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabQuantity: {
      table: {
        type: { summary: '메뉴 갯수' },
      },
      control: 'select',
      options: [2, 3],
    },
  }
} satisfies Meta<Tabs>

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoTabs: Story = {
  args: {
    tabQuantity: 2,
  },
};

export const ThreeTabs: Story = {
  args: {
    tabQuantity: 3,
  },
};
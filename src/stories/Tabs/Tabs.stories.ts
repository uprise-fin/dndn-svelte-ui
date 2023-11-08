import type { Meta, StoryObj } from '@storybook/svelte'

import Tabs from './Tabs.svelte';
import { tabNumber } from './type';

export let tabNumber: tabNumber = 2;

const meta = {
  title: 'Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabNumber: {
      table: {
        type: { summary: 'number' },
      },
      control: 'select',
      options: [2, 3],
    },
  },
} satisfies Meta<Tabs>

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoTabs: Story = {
  args: {
    tabNumber: 2,
  },
};

export const ThreeTabs: Story = {
  args: {
    tabNumber: 3,
  },
};
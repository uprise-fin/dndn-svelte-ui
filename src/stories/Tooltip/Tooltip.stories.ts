import type { Meta, StoryObj } from '@storybook/svelte'

import Tooltip from './Tooltip.svelte'
import { tooltipVariant } from './type'

const meta = {
  title: 'Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'guide는 최초 노출되며 영구히 닫히는 특징이 있습니다',
      table: {
        type: {
          summary: tooltipVariant.join(' | '),
        },
      },
      control: 'select',
      options: tooltipVariant,
    },
    showCloseButton: {
      description: '닫기 버튼을 노출합니다. GUIDE 타입 전용입니다',
    },
  },
  parameters: {
    docs: {
      story: {
        height: '150px',
      },
    },
  },
} satisfies Meta<Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aspernatur, minima, at repellendus quia unde sit nihil praesentium animi beatae facilis quasi nam similique neque reiciendis laborum architecto. Nihil, enim?',
  },
}

export const Guide: Story = {
  args: {
    variant: 'guide',
    showCloseButton: true,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aspernatur, minima, at repellendus quia unde sit nihil praesentium animi beatae facilis quasi nam similique neque reiciendis laborum architecto. Nihil, enim?',
  },
}

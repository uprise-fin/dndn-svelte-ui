import type { Meta, StoryObj } from '@storybook/svelte'

import Tooltip from './Tooltip.svelte'
import { tooltipVariant } from './type'

const meta = {
  title: 'Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      table: {
        type: {
          summary: tooltipVariant.join(' | '),
        },
      },
      control: 'select',
      options: tooltipVariant,
    },
    showCloseButton: {
      description: '닫기 버튼을 노출합니다. guide 타입 전용 속성입니다',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '기본 툴팁(Info type)은 오직 css 기반으로 동작합니다. (visible 속성과 관련이 없습니다.)',
      },
      story: {
        height: '150px',
      },
    },
  },
} satisfies Meta<Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Guide: Story = {
  args: {
    variant: 'guide',
    showCloseButton: true,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aspernatur, minima, at repellendus quia unde sit nihil praesentium animi beatae facilis quasi nam similique neque reiciendis laborum architecto. Nihil, enim?',
  },
}

export const Info: Story = {
  args: {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aspernatur, minima, at repellendus quia unde sit nihil praesentium animi beatae facilis quasi nam similique neque reiciendis laborum architecto. Nihil, enim?',
  },
}

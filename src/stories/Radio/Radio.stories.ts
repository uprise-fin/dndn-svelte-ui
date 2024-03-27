import type { Meta, StoryObj } from '@storybook/svelte'

import Radio from './Radio.svelte'

const meta = {
  title: 'Selection Controls/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    options: {
      table: {
        type: { summary: 'array' },
      },
    },
    checked: {
      description: '기본 값을 임의로 변경할 수 있습니다. options 아이템의 value에 해당합니다.',
      table: {
        type: { summary: 'string | number' },
      },
      control: 'text',
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<Radio>

export default meta
type Story = StoryObj<typeof meta>

export const basic: Story = {
  args: {
    options: [
      {
        value: 6,
        label: '6등급',
      },
      {
        value: 5,
        label: '5등급',
      },
      {
        value: 4,
        label: '4등급',
      },
      {
        value: 3,
        label: '3등급',
      },
      {
        value: 2,
        label: '2등급',
      },
      {
        value: 1,
        label: '1등급',
      },
    ],
  },
}

export const verticalLayout = {
  args: {
    ...basic.args,
    isVerticalLayout: true,
  },
}

export const block = {
  args: {
    ...basic.args,
    isBlock: true,
  },
}

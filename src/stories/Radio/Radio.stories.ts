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
      description: 'options 아이템의 value에 해당합니다. 초기 체크된 값을 변경할 수 있습니다.',
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

export const Basic: Story = {
  args: {
    options: [
      {
        value: 'green',
        label: '6등급',
      },
      {
        value: 'red',
        label: '5등급',
      },
      {
        value: 'blue',
        label: '4등급',
      },
      {
        value: 'green2',
        label: '3등급',
      },
      {
        value: 'red2',
        label: '2등급',
      },
      {
        value: 'blue2',
        label: '1등급',
      },
    ],
  },
}

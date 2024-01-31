import type { Meta, StoryObj } from '@storybook/svelte'

import Indicator from './Indicator.svelte'

const meta = {
  title: 'Indicator',
  component: Indicator,
  tags: ['autodocs'],
  argTypes: {
    length: {
      description: '배열 형태로 전달하면 label과 함께 표시됩니다.',
      table: {
        type: { summary: 'number | unknown[]' },
      },
      control: 'object',
    },
    index: {
      description: '활성화된 아이템의 index입니다.',
    },
  },
} satisfies Meta<Indicator>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    index: 0,
  },
}

export const WithLabel: Story = {
  args: {
    length: ['문서확인', '계좌개설', '계약 및 서명'],
    index: 1,
  },
}

import type { Meta, StoryObj } from '@storybook/svelte'

import Floating from './Floating.svelte'

const meta = {
  title: 'Floating',
  component: Floating,
  tags: ['autodocs'],
  argTypes: {
    footers: {
      description:
        '하단 버튼 영역을 정의합니다. handler prop으로 이벤트를 전달합니다. 빈 배열로 전달하면 영역이 노출되지 않습니다.',
      table: {
        type: {
          summary: 'string[] | undefined',
        },
      },
    },
    isVerticalLayout: {
      description: '하단 버튼 영역의 레이아웃을 결정합니다. 기본은 가로 배열(수평)입니다.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: '화면 하단에 고정되는 버튼입니다.',
      },
      story: {
        height: '200px',
      },
    },
  },
} satisfies Meta<Floating>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    footers: [
      {
        label: '취소',
        variant: 'tertiary',
        handler: () => alert('취소 클릭'),
      },
      {
        label: '확인',
        handler: () => alert('확인 클릭'),
      },
    ],
  },
}

export const VerticalLayout: Story = {
  args: {
    footers: [
      {
        label: '확인',
        handler: () => alert('확인 클릭'),
      },
      {
        label: '취소',
        variant: 'text',
        handler: () => alert('취소 클릭'),
      },
    ],
    isVerticalLayout: true,
  },
}

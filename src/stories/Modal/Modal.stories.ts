import { layout } from '$lib'
import type { Meta, StoryObj } from '@storybook/svelte'
import FullscreenModal from './FullscreenModal.svelte'
import Modal from './Modal.svelte'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: {
      description: 'bind로 전달하면 양방향 바인딩됩니다.',
    },
    toast: {
      description: 'toast 모드로 노출합니다.',
    },
    keepDialog: {
      description: 'X(닫기) 버튼이나 외부 영역 클릭 시 dialog 요소를 닫지 않습니다.',
    },
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
    layout: {
      table: {
        type: {
          summary: layout.join(' | '),
        },
      },
      control: 'select',
      options: layout,
    },
    showCloseButton: {
      description: 'layout이 fullscreen인 경우에는 기본 값이 false입니다.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'true' },
      },
    },
  },
  parameters: {
    docs: {
      story: {
        height: '400px',
      },
    },
  },
} satisfies Meta<Modal>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Basic: Story = {
  args: {
    open: true,
    title: '휴대폰 번호 변경 실패',
    content:
      '<span style="color: var(--on-danger);">본인 명의의 휴대폰 번호</span>로만<br />변경할 수 있어요.',
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

export const fullscreen = {
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  render: () => ({
    Component: FullscreenModal,
    props: {
      title: '설렘가득 2월에는 골드바와 상품권을 드려요!',
    },
  }),
}

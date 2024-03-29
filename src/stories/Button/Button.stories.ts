import type { Meta, StoryObj } from '@storybook/svelte'

import { buttonVariant } from '$lib'
import Button from './Button.svelte'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      table: {
        type: { summary: buttonVariant.join(' | ') },
      },
      control: 'select',
      options: buttonVariant,
    },
    loading: {
      description: '중복 클릭 방지를 위한 상태입니다. 외적인 변화는 없습니다.',
    },
    href: {
      description: 'native 속성입니다. a 요소로 렌더링합니다.',
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    target: {
      table: {
        disable: true,
      },
    },
    rel: {
      table: {
        disable: true,
      },
    },
    isFit: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
    disabled: false,
    variant: 'primary',
    label: 'Text',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Text',
  },
}

export const Link: Story = {
  args: {
    label: '든든 바로가기',
    href: 'https://dndn.io/',
    target: '_blank',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Text',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    label: 'Text',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Text',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Text',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Text',
  },
}

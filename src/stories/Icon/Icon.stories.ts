import { size } from '$lib'
import type { Meta, StoryObj } from '@storybook/svelte'
import Icon from './Icon.svelte'
import SVG from './svg'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const iconSource = Object.keys(SVG)
const meta = {
  title: 'Single Component/Icons',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      table: {
        type: { summary: size.join(' | ') },
      },
      options: size,
      control: { type: 'select' },
    },
    color: {
      description: '디자인 토큰 사용을 권장합니다.',
      control: { type: 'color' },
    },
    src: {
      description: 'system/[아이콘] 형식으로 입력합니다.',
      table: {
        type: { summary: 'string' },
      },
      options: iconSource,
      control: { type: 'select' },
    },
  },
} satisfies Meta<Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    src: 'system/forward',
  },
}

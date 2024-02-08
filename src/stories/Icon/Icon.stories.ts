import { size } from '$lib'
import type { Meta, StoryObj } from '@storybook/svelte'
import Icon from './Icon.svelte'
import Icons from './Icons.svelte'
import SVG from './svg'
import type { IconName } from './type'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const iconSource = Object.keys(SVG)
const meta = {
  title: 'Icon',
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
    src: 'system/line/chevron-right',
  },
}

export const emphasis = {
  render: () => ({
    Component: Icons,
    props: {
      list: Object.keys(SVG).filter((src) => src.startsWith('system/emphasis')) as IconName[],
    },
  }),
}

export const fill = {
  render: () => ({
    Component: Icons,
    props: {
      list: Object.keys(SVG).filter((src) => src.startsWith('system/fill')) as IconName[],
    },
  }),
}

export const line = {
  render: () => ({
    Component: Icons,
    props: {
      list: Object.keys(SVG).filter((src) => src.startsWith('system/line')) as IconName[],
    },
  }),
}

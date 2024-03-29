export const layout = ['centered', 'fullscreen', 'padded'] as const
export type Layout = typeof layout[number]

export const size = ['small', 'medium', 'large', 'x-large'] as const
export type Size = typeof size[number]

export const variant = ['primary', 'secondary', 'tertiary'] as const
export type Variant = typeof variant[number]

export type RadioOption = { value: string | number; label: string; [key: string]: unknown }

export const htmlAttributeAnchorTarget = ['_self', '_blank', '_parent', '_top'] as const
export type HTMLAttributeAnchorTarget = typeof htmlAttributeAnchorTarget[number]

export const buttonVariant = [
  'primary',
  'secondary',
  'tertiary',
  'warning',
  'outline',
  'text',
] as const
export type ButtonVariant = typeof buttonVariant[number]

export type ButtonOptions = {
  variant: ButtonVariant
  label: string
  disabled: boolean
  loading: boolean
  href: string
  target: HTMLAttributeAnchorTarget
  rel: string
  isFit: boolean
}

export type Footer = {
  handler: () => void
} & ButtonOptions &
  Record<string, unknown>

export type ModalOptions = {
  open: boolean
  width: string
  toast: boolean
  title: string
  content: string
  keepDialog: boolean
  showCloseButton: boolean
  isVerticalLayout: boolean
  layout: Layout
  footers: Partial<Footer>[]
}

export const tooltipVariant = ['info', 'guide'] as const
export type TooltipVariant = typeof tooltipVariant[number]

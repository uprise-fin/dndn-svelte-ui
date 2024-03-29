import type { ButtonVariant, HTMLAttributeAnchorTarget, Layout } from './enum'

export * from './enum'

export type RadioOption = { value: string | number; label: string; [key: string]: unknown }

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

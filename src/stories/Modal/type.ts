import type { ButtonOptions } from '../Button/type'

export type Footer = {
  handler: () => void
} & Partial<ButtonOptions> &
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
  footers: Footer[]
}

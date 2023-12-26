export type Footer = {
  handler: () => void
} & Record<string, unknown>

export type Modal = {
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

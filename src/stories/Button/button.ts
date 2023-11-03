export type HTMLAttributeAnchorTarget = '_self' | '_blank' | '_parent' | '_top'

export const buttonVariant = [
  'primary',
  'secondary',
  'tertiary',
  'warning',
  'outline',
  'text',
] as const
export type ButtonVariant = (typeof buttonVariant)[number]

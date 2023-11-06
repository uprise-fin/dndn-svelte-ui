export const htmlAttributeAnchorTarget = ['_self', '_blank', '_parent', '_top'] as const
export type HTMLAttributeAnchorTarget = (typeof htmlAttributeAnchorTarget)[number]

export const buttonVariant = [
  'primary',
  'secondary',
  'tertiary',
  'warning',
  'outline',
  'text',
] as const
export type ButtonVariant = (typeof buttonVariant)[number]

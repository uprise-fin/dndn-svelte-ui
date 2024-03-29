export const htmlAttributeAnchorTarget = ['_self', '_blank', '_parent', '_top'] as const
export type HTMLAttributeAnchorTarget = typeof htmlAttributeAnchorTarget[number]

export const layout = ['centered', 'fullscreen', 'padded'] as const
export type Layout = typeof layout[number]

export const buttonVariant = [
  'primary',
  'secondary',
  'tertiary',
  'warning',
  'outline',
  'text',
] as const
export type ButtonVariant = typeof buttonVariant[number]

export const size = ['small', 'medium', 'large', 'x-large'] as const
export type Size = typeof size[number]

export const variant = ['primary', 'secondary', 'tertiary'] as const
export type Variant = typeof variant[number]

export const tooltipVariant = ['info', 'guide'] as const
export type TooltipVariant = typeof tooltipVariant[number]

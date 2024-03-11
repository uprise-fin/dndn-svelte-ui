export const layout = ['centered', 'fullscreen', 'padded'] as const
export type Layout = typeof layout[number]

export const size = ['small', 'medium', 'large', 'x-large'] as const
export type Size = typeof size[number]

export const variant = ['primary', 'secondary', 'tertiary'] as const
export type Variant = typeof variant[number]

export const htmlAttributeAnchorTarget = ['_self', '_blank', '_parent', '_top'] as const
export type HTMLAttributeAnchorTarget = (typeof htmlAttributeAnchorTarget)[number]

export const tabNumber = [
  2,
  3,
] as const
export type tabNumber = (typeof tabNumber)[number]

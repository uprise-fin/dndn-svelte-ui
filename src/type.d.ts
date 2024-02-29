import { layout, size } from './lib'

export type Size = typeof size[number]

declare global {
  namespace DNDNUI {
    type Layout = typeof layout[number]
  }
}

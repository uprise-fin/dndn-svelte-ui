// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { size } from '$lib'

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  type Size = typeof size[number]
}

export {}

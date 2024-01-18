import { tick } from 'svelte'
import { writable } from 'svelte/store'

const defaultDuration = 500

export const toast = writable('')
export const _duration = writable(defaultDuration)

export const showToast = async (message = '', duration = defaultDuration) => {
  toast.set(message)
  _duration.set(duration)
  await tick()
  toast.set('')
}

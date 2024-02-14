import { tick } from 'svelte'
import { writable } from 'svelte/store'

const defaultDuration = 500

export const toast = writable('')
export const durationObserver = writable(defaultDuration)

export const showToast = async (message: string, duration = defaultDuration) => {
  toast.set(message)
  durationObserver.set(duration)
  await tick()
  toast.set('')
}

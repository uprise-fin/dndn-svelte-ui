<script lang="ts">
  import type { ButtonVariant, HTMLAttributeAnchorTarget } from './button'

  export let variant: ButtonVariant = 'primary'
  export let label = ''
  export let href: string | undefined = undefined
  export let target: HTMLAttributeAnchorTarget | undefined = undefined
  export let rel: string | undefined = target === '_blank' ? 'noreferrer noopener' : undefined

  const el = href ? 'a' : 'button'
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
  this={el}
  {...$$restProps}
  {href}
  {rel}
  class={['button', `button--${variant}`].join(' ')}
  on:click
>
  <slot>{label}</slot>
</svelte:element>

<style lang="scss">
  @import './button.scss';
</style>

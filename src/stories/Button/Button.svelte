<script lang="ts">
  import type { ButtonVariant, HTMLAttributeAnchorTarget } from './type'

  export let variant: ButtonVariant = 'primary'
  export let label = ''
  export let disabled = false
  export let loading = false
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
  {target}
  {rel}
  disabled={disabled || loading}
  class={['button', `button--${variant}`].join(' ')}
  class:is-loading={loading}
  on:click
>
  <slot>{label}</slot>
</svelte:element>

<style lang="scss">
  .button {
    all: unset;
    height: 54px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 13px 16px;
    border-radius: 6px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    transition: background-color 0.3s, color 0.3s;
    text-decoration: none;

    &:not(:disabled) {
      cursor: pointer;
    }

    &:disabled:not(.is-loading) {
      background: var(--button--higher);
      color: #fff;
      cursor: not-allowed;
    }

    &:focus-visible {
      outline: 1px auto -webkit-focus-ring-color;
    }

    &--primary {
      background: var(--color-main);
      color: #fff;
    }

    &--secondary {
      background: var(--background-blurple);
      color: var(--color-main);
    }

    &--tertiary {
      background: var(--container-neutral--high);
      color: var(--text-quaternary);
    }

    &--warning {
      background: var(--color-danger);
      color: #fff;
    }

    &--outline {
      border: 1px solid var(--outline--high);
      color: var(--text-primary);

      &:disabled {
        background: transparent;
        color: var(--button--higher);
      }
    }

    &--text {
      color: var(--text-tertiary);

      &:disabled {
        background: transparent;
        color: var(--button--higher);
      }
    }
  }
</style>

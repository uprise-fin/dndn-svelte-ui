<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { ButtonVariant, HTMLAttributeAnchorTarget } from '../../lib'

  export let variant: ButtonVariant = 'primary'
  export let label = ''
  export let disabled = false
  export let loading = false
  export let isFit = false
  export let href: string | undefined = undefined
  export let target: HTMLAttributeAnchorTarget | undefined = undefined
  export let rel: string | undefined = target === '_blank' ? 'noreferrer noopener' : undefined

  const el = href ? 'a' : 'button'

  const dispatcher = createEventDispatcher<{ click: Event }>()

  const handleClick = (e: Event) => {
    !loading && dispatcher('click', e)
  }
</script>

<svelte:element
  this={el}
  {...$$restProps}
  {href}
  {target}
  {rel}
  {disabled}
  class={['button', `button--${variant}`].join(' ')}
  class:is-loading={loading}
  class:is-fit={isFit}
  on:click={handleClick}
  role="presentation"
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

    &:disabled {
      background: var(--neutral-container--higher);
      color: var(--inverse-on-neutral);
      cursor: not-allowed;
    }

    &:focus-visible {
      outline: 1px auto -webkit-focus-ring-color;
    }

    &--primary {
      background: var(--inverse-main-container);
      color: var(--inverse-on-neutral);
    }

    &--secondary {
      background: var(--main-container);
      color: var(--on-main);
    }

    &--tertiary {
      background: var(--neutral-container);
      color: var(--on-neutral-quaternary);
    }

    &--warning {
      background: var(--inverse-danger-container);
      color: var(--inverse-on-neutral);
    }

    &--outline {
      border: 1px solid var(--neutral-container--high);
      color: var(--on-neutral-quaternary);

      &:disabled {
        background: transparent;
        color: var(--on-neutral-micro);
      }
    }

    &--text {
      color: var(--on-neutral-quaternary);

      &:disabled {
        background: transparent;
        color: var(--on-neutral-micro);
      }
    }
  }
</style>

<script lang="ts">
  import type { ButtonVariant, HTMLAttributeAnchorTarget } from './type'

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
  {target}
  {rel}
  class={['button', `button--${variant}`].join(' ')}
  on:click
>
  <slot>{label}</slot>
</svelte:element>

<style lang="scss">
  .button {
    all: unset;
    height: 50px;
    display: inline-grid;
    place-items: center;
    grid-auto-flow: column;
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
      background: rgba(#b0b0ba, 0.5);
      color: #fff;
      cursor: not-allowed;
    }

    &:focus-visible {
      outline: 1px auto -webkit-focus-ring-color;
    }

    &--primary {
      background: var(--color--primary);
      color: #fff;
    }

    &--secondary {
      background: rgba(#e2e2ff, 0.4);
      // background: rgb(from var(--dd__blurple--100) r g b / 0.4); https://github.com/w3c/csswg-drafts/issues/6880
      color: var(--dd__blurple--400);
    }

    &--tertiary {
      background: rgba(#e1e1e4, 0.65);
      color: var(--dd__gray--500);
    }

    &--warning {
      background: var(--color--danger);
      color: #fff;
    }

    &--outline {
      border: 1px solid rgba(#e1e1e4, 0.65);
      color: var(--dd__gray--800);

      &:disabled {
        background: transparent;
        color: rgba(#b0b0ba, 0.5);
      }
    }

    &--text {
      color: var(--dd__gray--500);

      &:disabled {
        background: transparent;
        color: rgba(#b0b0ba, 0.5);
      }
    }
  }
</style>

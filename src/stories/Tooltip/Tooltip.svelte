<script lang="ts">
  import { Icon } from '..'
  import type { TooltipVariant } from './type'

  export let variant: TooltipVariant = 'info'
  export let content = ''
  export let showCloseButton = false

  let innerWidth: number
  let el: HTMLElement | undefined
  let offset = 0
  let visible = true

  $: axisX = variant === 'info' ? -12 : -8
  $: {
    el && (offset = innerWidth - el.getBoundingClientRect().right)
  }
</script>

<div
  class={['container', `container--${variant}`].join(' ')}
  class:container--guide={variant === 'guide'}
  class:is-visible={variant === 'guide' && visible}
  role="tooltip"
  style={`--translateX: ${Math.min(0, offset)}px; --axisX: ${axisX}px`}
>
  <slot>
    <Icon src="system/line/help-circle" />
  </slot>
  <div class="tooltip" bind:this={el}>
    <div class="tooltip__content">
      <slot name="content">
        {content}
      </slot>
      {#if variant === 'guide' && showCloseButton}
        <button class="tooltip__close" type="button" on:click={() => (visible = false)}>
          <Icon src="system/emphasis/close" size="small" color="var(--background);" />
        </button>
      {/if}
    </div>
  </div>
</div>

<svelte:window bind:innerWidth />

<style lang="scss">
  .container {
    position: relative;
    display: inline-flex;
    gap: 0 2px;
    align-items: center;
    color: inherit;
  }

  .tooltip {
    visibility: hidden;
    position: absolute;
    left: var(--axisX);
    top: 100%;
    z-index: 200;
    margin: 10px 0 0;
    padding: 12px 16px;
    background: var(--outline-primary);
    max-width: 300px;
    width: max-content;
    border-radius: 6px;
    transform: translateX(var(--translateX));

    &__content {
      display: flex;
      gap: 0 6px;
      text-align: left;
      color: #fff;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.4;
    }

    &::after {
      --size: 10px;
      content: '';
      position: absolute;
      bottom: 100%;
      width: var(--size);
      height: var(--size);
      margin: 0 0 calc(-0.5 * var(--size));
      background: var(--outline-primary);
      border-radius: 4px 0 0;
      transform: rotate(45deg) skew(15deg, 15deg) translateX(calc(var(--translateX) * -1));
    }

    &__close {
      all: unset;
      opacity: 0.7;
      align-self: flex-start;
      padding: 3px 0;
      cursor: pointer;
    }
  }

  .container--info:hover .tooltip,
  .container--guide.is-visible .tooltip {
    visibility: visible;
    animation: fadeIn 0.5s ease-out;
  }

  .container--guide {
    .tooltip {
      padding: 8px 12px;
      background: var(--outline-main);

      &::after {
        background: var(--outline-main);
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
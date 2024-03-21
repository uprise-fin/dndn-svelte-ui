<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { Button } from '..'
  import { GroupButton, type Layout } from '../../lib'
  import type { Footer } from './type'

  export let open = false
  export let width = '320px'
  export let toast = false
  export let title = ''
  export let content = ''
  export let keepDialog = false
  export let isVerticalLayout = false
  export let layout: Layout = 'padded'
  export let showCloseButton = true
  export let footers: Partial<Footer>[] | undefined = layout === 'fullscreen' ? [] : undefined

  const dispatch = createEventDispatcher<{ close: undefined }>()

  $: _showCloseButton = layout !== 'fullscreen' && showCloseButton
  $: availableCloseButton = !keepDialog && _showCloseButton

  const closeModal = () => {
    open = false
    dispatch('close')
  }

  const handleClick = () => {
    !keepDialog && closeModal()
  }
</script>

<div
  class="dialog"
  class:is-centered={layout === 'centered'}
  class:is-fullscreen={layout === 'fullscreen'}
  class:is-open={open}
  class:dialog--toast={toast}
  style={`--width: ${width};`}
>
  <span class="dialog__backdrop" aria-hidden="true" on:click={handleClick} />

  <article class="dialog__container">
    {#if title || availableCloseButton}
      <header class="dialog__header">
        <h1 class="dialog__title">{@html title}</h1>
        {#if availableCloseButton}
          <button class="dialog__close" on:click={handleClick}>닫기</button>
        {/if}
      </header>
    {/if}

    <div class="dialog__body">
      <slot>
        {@html content}
      </slot>
    </div>

    <GroupButton {footers} {isVerticalLayout}>
      {#if !footers}
        <slot name="footer">
          <Button on:click={closeModal} variant="outline">확인</Button>
        </slot>
      {/if}
    </GroupButton>
  </article>
</div>

<style lang="scss">
  .dialog {
    --padding-block: var(--padding-block);

    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;

    &--toast {
      margin-top: env(safe-area-inset-top);
    }

    &.is-open {
      visibility: visible;
      animation: fadeIn 0.5s ease-out forwards;
    }

    &__backdrop {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
    }

    &__container {
      overflow: auto;
      box-sizing: border-box;
      position: relative;
      width: min(calc((100% - 6px) - 2em), var(--width));
      max-height: calc((100% - 6px) - 2em);
      margin: auto;
      border-radius: 16px;
      background: #fff;

      :not(.is-fullscreen) & {
        padding: var(--padding-block) 20px;
      }

      .is-centered & {
        text-align: center;
      }

      .is-open & {
        animation: blowUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }

      .dialog--toast & {
        align-self: flex-end;
        width: min(100%, var(--width));
        margin-bottom: 0;
        padding-bottom: env(safe-area-inset-bottom);
        border-end-end-radius: 0;
        border-end-start-radius: 0;
      }

      .dialog--toast:not(.is-fullscreen) & {
        padding-bottom: calc(var(--padding-block) + env(safe-area-inset-bottom));
      }

      .is-open.dialog--toast & {
        animation-name: toast;
      }
    }

    &__header {
      display: flex;
      margin: 0 0 16px;
    }

    &__title {
      margin: 0;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.3;
      color: var(--on-neutral-primary);
    }

    &__close {
      --size: 24px;
      all: unset;
      cursor: pointer;
      flex: 0 0 auto;
      position: relative;
      width: var(--size);
      height: var(--size);
      margin: 0 0 0 auto;
      text-indent: -9999px;

      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 2px;
        height: 16px;
        margin: auto;
        background: var(--on-neutral-primary);
        border-radius: 4px;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }

    &__body {
      font-weight: 400;
      font-size: 15px;
      line-height: 1.55;
      color: var(--on-neutral-tertiary);
    }

    :global(.group-button:not(:empty)) {
      margin-top: 24px;
    }
  }

  @keyframes blowUp {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes toast {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
</style>

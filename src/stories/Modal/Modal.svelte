<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { Button } from '..'
  import type { Footer } from './type'

  export let open = false
  export let width = '320px'
  export let toast = false
  export let title = ''
  export let content = ''
  export let keepDialog = false
  export let showCloseButton = true
  export let footers: Footer[] | undefined = undefined

  const dispatch = createEventDispatcher<{ close: undefined }>()

  const closeModal = () => {
    open = false
    dispatch('close')
  }

  const handleClick = () => {
    !keepDialog && closeModal()
  }
</script>

<div class="dialog" class:is-open={open} class:dialog--toast={toast} style={`--width: ${width};`}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <span class="dialog__backdrop" on:click={handleClick} />

  <article class="dialog__container">
    <header class="dialog__header">
      <h1 class="dialog__title">{title}</h1>
      {#if !keepDialog && showCloseButton}
        <button class="dialog__close" on:click={handleClick}>닫기</button>
      {/if}
    </header>

    <div class="dialog__body">
      <slot>
        {@html content}
      </slot>
    </div>

    <menu class="dialog__footer">
      {#if !footers}
        <slot name="footer">
          <Button on:click={closeModal} variant="outline">확인</Button>
        </slot>
      {:else}
        {#each footers as footer}
          <Button {...footer} on:click={footer.handler} />
        {/each}
      {/if}
    </menu>
  </article>
</div>

<style lang="scss">
  .dialog {
    display: none;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    &.is-open {
      display: flex;
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
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: var(--width);
      max-width: calc((100% - 6px) - 2em);
      max-height: calc((100% - 6px) - 2em);
      padding: 28px 20px;
      border-radius: 16px;
      background: #fff;
      animation: blowUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

      .dialog--toast & {
        align-self: flex-end;
        min-width: auto;
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        margin: 0;
        border-end-end-radius: 0;
        border-end-start-radius: 0;
        animation: toast 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
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
      color: var(--text-primary);
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
        background: var(--text-primary);
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
      white-space: pre-wrap;
      font-weight: 400;
      font-size: 15px;
      line-height: 1.55;
      color: var(--text-tertiary);
    }

    &__footer {
      display: flex;
      gap: 8px;
      margin: 0;
      padding: 0;

      &:not(:empty) {
        margin-top: 24px;
      }

      :global(.button) {
        flex: 1 1 0;
      }

      :global([slot='footer']) {
        display: contents;
      }
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

  @keyframes toast {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
</style>

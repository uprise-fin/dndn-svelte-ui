<script lang="ts">
  import { Button } from '..'

  export let open = false
  export let title = ''
  export let body = ''
  export let disableEscapeKeyDown = false

  const closeModal = () => {
    open = false
  }

  const handleClick = () => {
    !disableEscapeKeyDown && closeModal()
  }

  const handleCancel = (
    event: KeyboardEvent & {
      currentTarget: EventTarget & Window
    },
  ) => {
    const closeableByKeyboard = !disableEscapeKeyDown && event.key === 'Escape'
    closeableByKeyboard && closeModal()
  }
</script>

<div class="dialog" class:is-open={open}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <span class="dialog__backdrop" on:click={handleClick} />

  <article class="dialog__container">
    <header class="dialog__header">
      <h1 class="dialog__title">{title}</h1>
    </header>

    <div class="dialog__body">
      <slot>
        {@html body}
      </slot>
    </div>

    <menu class="dialog__footer">
      <slot name="footer">
        <Button on:click={closeModal}>확인</Button>
      </slot>
    </menu>
  </article>
</div>

<svelte:window on:keydown={handleCancel} />

<style lang="scss">
  .dialog {
    display: none;
    position: fixed;
    z-index: 9999;
    inset: 0;

    &.is-open {
      display: flex;
    }

    &__backdrop {
      position: fixed;
      inset: inherit;
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
      min-width: 320px;
      max-width: calc((100% - 6px) - 2em);
      max-height: calc((100% - 6px) - 2em);
      padding: 28px 20px;
      border-radius: 16px;
      background: #fff;

      .is-open & {
        animation: blowUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }
    }

    &__title {
      margin: 0 0 16px;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.3;
      color: var(--dd__gray--800);
    }

    &__body {
      white-space: pre-wrap;
      font-weight: 400;
      font-size: 15px;
      line-height: 1.55;
      color: var(--dd__gray--600);
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
</style>

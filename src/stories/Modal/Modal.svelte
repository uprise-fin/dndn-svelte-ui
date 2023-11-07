<script lang="ts">
  export let open = false
  export let title = ''
  export let body = ''
  export let disableEscapeKeyDown = false

  let dialog: HTMLDialogElement | undefined

  $: open ? dialog?.showModal() : dialog?.close()

  const handleClick = (
    event: MouseEvent & {
      currentTarget: EventTarget & HTMLDialogElement
    },
  ) => {
    const clickableOutside =
      !disableEscapeKeyDown &&
      event.target instanceof HTMLElement &&
      event.target?.nodeName === 'DIALOG'

    clickableOutside && dialog?.close()
  }

  const handleCancel = (
    event: Event & {
      currentTarget: EventTarget & HTMLDialogElement
    },
  ) => {
    disableEscapeKeyDown && event.preventDefault()
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog class="dialog" bind:this={dialog} on:click={handleClick} on:cancel={handleCancel}>
  <article class="dialog__container">
    <header class="dialog__header">
      <h1 class="dialog__title">{title}</h1>
    </header>

    <div class="dialog__body">
      <slot>
        {@html body}
      </slot>
    </div>
  </article>
</dialog>

<style lang="scss">
  .dialog {
    box-sizing: border-box;
    min-width: 320px;
    padding: 28px 20px;
    border: 0;
    border-radius: 16px;
    background: #fff;
    outline: none;

    &[open] {
      animation: blowUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }

    &::backdrop {
      background: rgba(0, 0, 0, 0.4);
    }

    &__container {
      display: contents;
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

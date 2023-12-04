<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let id = ''
  export let disabled = false
  export let readonly = false
  export let value = ''
  export let errorMessages: string[] | undefined = []
  export let label = ''
  export let clearable = true
  export let descriptions: string[] | undefined = []

  const dispatcher = createEventDispatcher<{
    input: Event & {
      currentTarget: EventTarget & HTMLInputElement
    }
  }>()

  $: hasError = errorMessages?.length

  let inputEl: HTMLInputElement

  const randomId = Math.random().toString(36).slice(2)
  const _id = id || randomId

  const clear = () => {
    value = ''
    inputEl.focus()
  }

  $: messages = errorMessages?.length ? errorMessages : descriptions
</script>

<div class="input-wrap">
  {#if label}
    <label class="input-wrap__label" for={_id}>{label}</label>
  {/if}
  <div class="input" class:input--error={hasError} class:input--disabled={disabled || readonly}>
    <span class="input__prefix">
      <input
        bind:this={inputEl}
        bind:value
        {...$$restProps}
        class="input__el"
        id={_id}
        {disabled}
        {readonly}
        on:input={(event) => dispatcher('input', event)}
        on:focus
        on:blur
      />
      {#if clearable && value && !disabled && !readonly}
        <button type="button" class="input__clear" on:click={clear}>
          <span class="input__clear-inner">clear</span>
        </button>
      {/if}
    </span>
    <span class="input__suffix"><slot /></span>
  </div>

  {#if !!messages?.length}
    <div class="messages" class:messages--error={hasError}>
      {#each messages as message}
        <p class="messages__item">{message}</p>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .input-wrap {
    &__label {
      display: block;
      margin: 0 0 12px;
      font-size: 13px;
      line-height: 1.3;
      color: var(--text-tertiary);
    }
  }

  .input {
    --padding: 16px;
    display: flex;
    align-items: center;
    padding-inline: var(--padding);
    outline: 1px solid var(--button--higher);
    border-radius: 8px;
    background: #fff;
    transition: outline 0.1s;

    &:focus-within {
      outline: 1px solid var(--text-primary);
      color: var(--text-primary);
    }

    &--disabled {
      background: var(--container-neutral);
      outline-color: var(--button--higher) !important;
    }

    &--error {
      outline: 1px solid var(--color-danger) !important;
    }

    &__prefix {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
    }

    &__el {
      box-sizing: border-box;
      width: 100%;
      height: 54px;
      padding-block: var(--padding);
      background: none;
      border: 0;
      outline: 0;
      font-weight: 500;
      font-size: 15px;
      line-height: 1.2;
      color: var(--text-primary);
      caret-color: var(--color-main);

      &::placeholder,
      &:disabled,
      &:read-only {
        -webkit-text-fill-color: var(--text-micro);
      }
    }

    &__clear {
      --size: 16px;
      all: unset;
      opacity: 0;
      flex: 0 0 auto;
      margin: 0 0 0 10px;
      padding: 4px;
      font-size: 0.1em;
      color: #fff;
      cursor: pointer;

      .input:focus-within & {
        opacity: 1;
      }
    }

    &__clear-inner {
      display: inline-grid;
      place-items: center;
      position: relative;
      width: var(--size);
      height: var(--size);
      border-radius: 100%;
      background: var(--button--higher);
      text-indent: -9999px;
      font-size: 0.1em;

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 2px;
        height: 8px;
        border-radius: 4px;
        background: #fff;
      }

      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }

    &__suffix {
      display: grid;
      place-items: center;

      &:not(:empty) {
        margin: 0 0 0 10px;
      }

      :global(.button) {
        height: 32px;
        padding: 6px 12px;
        font-size: 13px;
        border-radius: 23px;
      }
    }
  }

  .messages {
    --color: var(--text-micro);
    margin: 12px 0 0;
    color: var(--color);
    font-size: 13px;
    line-height: 1.6;

    &--error {
      --color: var(--color-danger);
    }

    &__item {
      position: relative;
      margin: 0;
      padding: 0 0 0 14px;

      &::before {
        --size: 3px;
        content: '';
        position: absolute;
        left: 2.5px;
        top: 8.5px;
        width: var(--size);
        height: var(--size);
        border-radius: 100%;
        background: var(--color);
      }
    }
  }
</style>

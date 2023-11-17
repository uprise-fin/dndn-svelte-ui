<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let id = ''
  export let disabled = false
  export let value = ''
  export let errorMessage: string[] = []
  export let label = ''
  export let clearable = true
  export let description: string[] = []

  const dispatcher = createEventDispatcher<{
    input: Event & {
      currentTarget: EventTarget & HTMLInputElement
    }
  }>()

  $: hasError = errorMessage.length

  let inputEl: HTMLInputElement

  const randomId = Math.random().toString(36).slice(2)
  const _id = id || randomId

  const clear = () => {
    value = ''
    inputEl.focus()
  }

  $: message = errorMessage[0] || description[0]
</script>

<div class="input-wrap">
  {#if label}
    <label class="input-wrap__label" for={_id}>{label}</label>
  {/if}
  <div class="input" class:input--error={hasError} class:input--disabled={disabled}>
    <span class="input__prefix">
      <input
        bind:this={inputEl}
        bind:value
        {...$$restProps}
        class="input__el"
        id={_id}
        {disabled}
        on:input={(event) => dispatcher('input', event)}
        on:focus
        on:blur
      />
      {#if clearable && value && !disabled}
        <button type="button" class="input__clear" on:click={clear}>
          <span class="input__clear-inner">clear</span>
        </button>
      {/if}
    </span>
    <span class="input__suffix"><slot /></span>
  </div>

  {#if !!message}
    <p class="message" class:message--error={hasError}>{message}</p>
  {/if}
</div>

<style lang="scss">
  .input-wrap {
    &__label {
      display: block;
      margin: 0 0 12px;
      font-size: 13px;
      line-height: 1.3;
      color: var(--dd__gray--500);
    }
  }

  .input {
    --padding: 16px;
    display: flex;
    align-items: center;
    padding-inline: var(--padding);
    outline: 1px solid rgba(#b0b0ba, 0.5);
    border-radius: 8px;
    background: #fff;
    transition: outline 0.1s;

    &:focus-within:not(.input--error) {
      outline: 1px solid var(--dd__gray--800);
      color: var(--dd__gray--800);
    }

    &--disabled {
      background: rgba(#e1e1e4, 0.25);
    }

    &--error {
      outline: 1px solid var(--color--danger);
    }

    &__prefix {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
    }

    &__el {
      box-sizing: border-box;
      width: 100%;
      height: 50px;
      padding-block: var(--padding);
      background: none;
      border: 0;
      outline: 0;
      font-weight: 500;
      font-size: 15px;
      line-height: 1.2;
      color: var(--dd__gray--800);
      caret-color: var(--dd__blurple--400);

      &::placeholder,
      &:disabled {
        color: var(--dd__gray--300);
      }
    }

    &__clear {
      --size: 16px;
      all: unset;
      display: none;
      flex: 0 0 auto;
      margin: 0 0 0 10px;
      padding: 4px;
      color: #fff;
      cursor: pointer;

      .input:focus-within & {
        display: block;
      }
    }

    &__clear-inner {
      display: inline-grid;
      place-items: center;
      position: relative;
      width: var(--size);
      height: var(--size);
      border-radius: 100%;
      background: rgba(#b0b0ba, 0.5);
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

    &__suffix:not(:empty) {
      margin: 0 0 0 10px;
    }
  }

  .message {
    --color: var(--dd__gray--300);
    position: relative;
    margin: 12px 0 0;
    padding: 0 0 0 14px;
    color: var(--color);
    font-size: 13px;
    line-height: 1.6;

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

    &--error {
      --color: var(--color--danger);
    }
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { RadioOption } from '../../lib'

  export let isVerticalLayout = false
  export let isBlock = false
  export let options: RadioOption[]
  export let checked: string | number | undefined = undefined
  export let size: 'medium' = 'medium'

  const dispatcher = createEventDispatcher<{ change: { event: Event; context: RadioOption } }>()

  const handleChange = (value: string | number) => (event: Event) => {
    const context = options.find((o) => o.value === value)
    if (!context) return
    dispatcher('change', { event, context })
    checked = value
  }
</script>

<div class="radio-group" class:is-vertical={isVerticalLayout} class:is-block={isBlock}>
  {#each options as option}
    <label class={`radio radio--${size}`}>
      <input
        class="radio__el"
        type="radio"
        {...option}
        bind:group={checked}
        value={option.value}
        on:change={handleChange(option.value)}
      />
      <i class="radio__img" />
      {option.label}
    </label>
  {/each}
</div>

<style lang="scss">
  .radio-group {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, auto));
    gap: 10px;

    &.is-vertical {
      grid-template-columns: repeat(auto-fit, minmax(0, auto));
    }

    &.is-block {
      grid-template-columns: 1fr;
      gap: 28px;
    }
  }

  .radio {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    position: relative;
    font-size: 15px;
    cursor: pointer;

    .is-vertical & {
      flex-flow: column wrap;
    }

    &--medium {
      --size: 24px;
    }

    &__el {
      position: absolute;
      opacity: 0;
      width: var(--size);
      height: var(--size);
      margin: 0;

      &:checked {
        + .radio__img::before {
          background: var(--on-main);
          transition: 0.1s background-color;
        }
      }
    }

    &__img {
      flex: 0 0 auto;
      display: grid;
      place-items: center;
      box-sizing: border-box;
      width: var(--size);
      height: var(--size);
      border: 1px solid var(--neutral-container--higher);
      border-radius: 100%;

      &::before {
        --size: 14px;
        content: '';
        width: var(--size);
        height: var(--size);
        border-radius: 100%;
      }
    }
  }
</style>

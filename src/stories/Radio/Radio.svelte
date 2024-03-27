<script lang="ts">
  import type { RadioOption } from '../../lib'

  export let options: RadioOption[]
  export let checked = options[0].value
  export let size: 'medium' = 'medium'
</script>

<div class="radio-group">
  {#each options as option}
    <label class={`radio radio--${size}`}>
      <input class="radio__el" type="radio" {...option} bind:group={checked} value={option.value} />
      <i class="radio__img" />
      {option.label}
    </label>
  {/each}
</div>

<style lang="scss">
  .radio-group {
    display: flex;
    gap: 10px 20px;
  }

  .radio {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    position: relative;
    font-size: 15px;
    cursor: pointer;

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
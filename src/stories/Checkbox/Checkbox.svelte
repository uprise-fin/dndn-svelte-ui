<script lang="ts">
  import { Icon } from '..'

  export let checked = false
  export let rounded = false
  export let size: 'medium' = 'medium'
</script>

<span class={`checkbox checkbox--${size}`} class:is-rounded={rounded}>
  <input class="checkbox__el" type="checkbox" {...$$restProps} bind:checked on:change />
  <i class="checkbox__img" style={`--color: var(--active--color)`}>
    <Icon src="system/line/check" color="var(--active--color)" />
  </i>
</span>

<style lang="scss">
  .checkbox {
    display: inline-grid;

    &.is-rounded {
      .checkbox {
        &__img {
          border: 1px solid var(--color);
          border-radius: 6px;
        }

        &__el:checked {
          + .checkbox__img {
            background: var(--active--color);

            :global(path) {
              fill: #fff;
            }
          }
        }
      }
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
        + .checkbox__img {
          --active--color: var(--on-main);
        }
      }
    }

    &__img {
      --active--color: var(--neutral-container--higher);
      box-sizing: border-box;
      display: inline-grid;
      place-items: center;
      width: var(--size);
      height: var(--size);
      transition: 0.1s background-color, 0.1s border-color;
    }

    &__path {
      fill: var(--color);
      transition: 0.1s fill;
    }
  }
</style>

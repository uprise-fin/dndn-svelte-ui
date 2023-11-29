<script lang="ts">
  export let checked = false
  export let rounded = false
  export let size: 'medium' = 'medium'
</script>

<span class={`checkbox checkbox--${size}`} class:is-rounded={rounded}>
  <input class="checkbox__el" type="checkbox" {...$$restProps} bind:checked on:change />
  <i class="checkbox__img" style={`--color: var(--active--color)`}>
    <svg
      class="checkbox__svg"
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="checkbox__path"
        d="M1 5L5 9L13 1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </i>
</span>

<style lang="scss">
  .checkbox {
    display: inline-block;

    &.is-rounded {
      .checkbox {
        &__img {
          border: 1px solid var(--color);
          border-radius: 6px;
        }

        &__el:checked {
          + .checkbox__img {
            background: var(--active--color);

            .checkbox__path {
              stroke: #fff;
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
          --active--color: var(--color-main);
        }
      }
    }

    &__img {
      --active--color: var(--button--higher);
      box-sizing: border-box;
      display: inline-grid;
      place-items: center;
      width: var(--size);
      height: var(--size);
      transition: 0.1s background-color, 0.1s border-color;
    }

    &__path {
      stroke: var(--color);
      transition: 0.1s stroke;
    }
  }
</style>

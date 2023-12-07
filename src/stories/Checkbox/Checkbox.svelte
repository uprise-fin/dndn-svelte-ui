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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="checkbox__path"
        d="M17.4697 7.46967C17.7626 7.17678 18.2374 7.17678 18.5303 7.46967C18.7966 7.73594 18.8208 8.1526 18.6029 8.44621L18.5303 8.53033L10.5303 16.5303C10.2641 16.7966 9.8474 16.8208 9.55379 16.6029L9.46967 16.5303L5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697C5.73594 11.2034 6.1526 11.1792 6.44621 11.3971L6.53033 11.4697L10 14.939L17.4697 7.46967Z"
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
      fill: var(--color);
      transition: 0.1s stroke;
    }
  }
</style>

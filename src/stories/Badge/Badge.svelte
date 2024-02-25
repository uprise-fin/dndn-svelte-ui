<script lang="ts">
  import type { Size } from '../../type'

  export let size: Omit<Size, 'x-large'> = 'large'
  export let label = ''
</script>

<div class={`badge badge--${size}`}>
  <span class="badge__inner">
    <slot>{label}</slot>
  </span>
</div>

<style lang="scss">
  .badge {
    display: inline-grid;
    place-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 30px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: var(--color-danger);
      opacity: 0.1;
    }
    &__inner {
      position: relative;
      padding: 0 6px;
      font-weight: 600;
      color: var(--color-danger);
    }

    &--small {
      height: 16px;
      .badge__inner {
        padding: 0 4.5px;
        font-size: 10px;
        scale: 0.9;
      }
    }

    &--medium {
      height: 18px;
      .badge__inner {
        font-size: 10px;
        scale: 0.9;
      }
    }

    &--large {
      height: 20px;
      .badge__inner {
        font-size: 11px;
      }
    }
  }
</style>

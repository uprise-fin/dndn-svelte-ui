<script lang="ts">
  import type { Size, Variant } from '../../lib'

  export let size: Omit<Size, 'x-large'> = 'medium'
  export let variant: Variant = 'primary'
  export let label = ''
</script>

<div class={`badge badge--${size} badge--${variant}`}>
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

    &__inner {
      position: relative;
      padding: 0 6px;
      font-weight: 600;
    }

    &--primary {
      background: var(--danger-container);
      color: var(--on-danger);
    }

    &--secondary {
      background: var(--main-container);
      color: var(--on-main);
    }

    &--tertiary {
      background: var(--neutral-container);
      color: var(--on-neutral-tertiary);
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

<script lang="ts">
  import type { Size } from '../../type'
  import SVG from './svg'
  import type { IconName } from './type'

  export let src: IconName
  export let color = 'var(--text-primary)'
  export let size: Size = 'medium'
</script>

<i class={`icon icon--${size}`} style={`--color: ${color}`}>
  {@html SVG[src]}
</i>

<style lang="scss">
  .icon {
    display: inline-grid;
    place-items: center;
    width: var(--size);
    height: var(--size);

    &--small {
      --size: 12px;
    }

    &--medium {
      --size: 18px;
    }
    &--large {
      --size: 24px;
    }
    &--x-large {
      --size: 40px;
    }

    :global(svg) {
      width: 100%;
      height: 100%;
    }

    :global(path) {
      fill: var(--color);
    }
  }
</style>

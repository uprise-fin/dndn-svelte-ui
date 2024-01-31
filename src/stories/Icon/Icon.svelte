<script lang="ts">
  import type { Size } from '../../type'
  import SVG from './svg'
  import type { IconName } from './type'

  export let src: IconName
  export let color = 'var(--text-primary)'
  export let size: Size = 'small'
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

    &--x-small {
      --size: 12px;
    }

    &--small {
      --size: 18px;
    }
    &--medium {
      --size: 24px;
    }
    &--large {
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

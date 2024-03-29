<script lang="ts">
  import { onMount } from 'svelte'
  import { GroupButton, type Footer } from '../../lib'

  export let isVerticalLayout = false
  export let footers: Partial<Footer>[] | undefined = undefined

  let container: HTMLDivElement | undefined
  let height = 'auto'

  onMount(() => {
    height = `${container?.clientHeight}px`
  })
</script>

<div class="floating" style={`--height: ${height};`}>
  <div bind:this={container} class="floating__container">
    <div class="floating__body">
      <slot />
    </div>

    <GroupButton {footers} {isVerticalLayout}>
      <slot name="footer" />
    </GroupButton>
  </div>
</div>

<style lang="scss">
  .floating {
    --side-width: 20px;
    --gradient-height: 40px;
    height: var(--height);

    &__container {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 8;
      background: var(--main-surface);
      &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 100%;
        height: var(--gradient-height);
        background: linear-gradient(0deg, #ffffff 3.13%, rgba(255, 255, 255, 0) 100%);
      }
    }

    &__body:not(:empty) {
      margin: 8px 0 24px;
      padding: 0 var(--side-width);
    }

    :global(.group-button) {
      padding: 0 var(--side-width) 30px;
    }
  }
</style>

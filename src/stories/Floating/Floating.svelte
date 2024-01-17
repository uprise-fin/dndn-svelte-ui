<script lang="ts">
  import { onMount } from 'svelte'
  import Button from '../Button/Button.svelte'
  import type { Footer } from '../Modal/type'

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
    <div class="floating__footer" class:floating__footer--vertical={isVerticalLayout}>
      {#if !footers}
        <slot name="footer" />
      {:else}
        {#each footers as footer}
          <Button {...footer} on:click={footer.handler} />
        {/each}
      {/if}
    </div>
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
      margin: 0 0 24px;
      padding: 0 var(--side-width);
    }

    &__footer {
      --gap: 8px;
      display: flex;
      gap: var(--gap);
      margin: 0;
      padding: 0 var(--side-width) 30px;
      background: var(--background);

      :global(.button:not(.is-fit)) {
        flex: 1 1 0;
      }

      :global(.button--text:not(:first-child)) {
        margin-top: calc(-1 * var(--gap));
      }

      &--vertical {
        flex-flow: column;
      }
    }
  }
</style>

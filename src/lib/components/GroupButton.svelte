<script lang="ts">
  import type { Footer } from '../../lib'
  import { Button } from '../../stories'

  export let isVerticalLayout = false
  export let footers: Partial<Footer>[] | undefined = undefined
</script>

<div class="group-button" class:group-button--vertical={isVerticalLayout}>
  {#if !footers}
    <slot />
  {:else}
    {#each footers as footer}
      <Button {...footer} on:click={footer.handler} />
    {/each}
  {/if}
</div>

<style lang="scss">
  .group-button {
    --gap: 8px;
    display: flex;
    gap: var(--gap);

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
</style>

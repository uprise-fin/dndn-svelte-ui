<script lang="ts">
  import { onMount } from 'svelte'

  export let length: number | unknown[] = 3
  export let index = 0

  const list = Array.isArray(length) ? length : Array.from({ length })

  onMount(() => {
    if (list.length - 1 < index) throw new Error('index is out of range')
  })
</script>

<div class="indicator">
  <ol class="indicator__list">
    {#each list as _, i}
      <li class="indicator__item" class:indicator__item--active={index === i} />
    {/each}
  </ol>
  {#if Array.isArray(length)}
    <span class="indicator__label">
      {length[index]}
    </span>
  {/if}
</div>

<style lang="scss">
  .indicator {
    --size: 8px;
    display: flex;
    align-items: center;
    gap: 0 6px;

    &__list {
      display: contents;
      list-style: none;
      padding: 0;
    }

    &__item {
      width: var(--size);
      height: var(--size);
      background: var(--container-neutral--high);
      border-radius: 100%;

      &--active {
        background: var(--color-main);
      }
    }

    &__label {
      color: var(--color-main);
      font-weight: 700;
      font-size: 14px;
      line-height: 1.5;
    }
  }
</style>

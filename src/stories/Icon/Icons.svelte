<script lang="ts">
  import { Icon, Snackbar, showToast } from '..'
  import type { IconName } from './type'

  export let list: IconName[] = []

  const copyContent = async (src: string) => {
    try {
      await navigator.clipboard.writeText(src)
      showToast('This is the src to be copied')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }
</script>

<ul class="list">
  {#each list as src}
    <li class="list__item">
      <button class="list__button" on:click={() => copyContent(src)}>
        <Icon {src} />
        <span class="list__name">
          {src.split('/').pop()}
        </span>
      </button>
    </li>
  {/each}
</ul>

<Snackbar />

<style lang="scss">
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-auto-rows: minmax(80px, auto);
    grid-gap: 5px;
    list-style: none;
    margin: 0;
    padding: 0;

    &__item {
      display: contents;
    }

    &__button {
      display: flex;
      gap: 10px;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      padding: 5px;
      border: 1px solid var(--outline);
      cursor: pointer;
      background: var(--background);

      &:hover :global(.icon) {
        transition: transform 0.3s;
        transform: scale(2);
      }
    }

    &__name {
      display: block;
    }
  }
</style>

<script lang="ts">
  import { Icon } from '..'
  import type { IconName } from './type'

  export let list: IconName[] = []
</script>

<ul class="list">
  {#each list as src}
    <li class="list__item">
      <Icon {src} />
      <span class="list__name">
        {src.split('/').pop()}
      </span>
    </li>
  {/each}
</ul>

<style lang="scss">
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 5px;
    list-style: none;
    margin: 0;
    padding: 0;

    &__item {
      display: flex;
      gap: 10px;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--text-primary);
    }

    &__name {
      display: block;
    }
  }
</style>

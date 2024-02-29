<script lang="ts">
  import { Modal } from '..'
  import Button from '../Button/Button.svelte'

  export let title = ''

  let open = true
</script>

<Modal bind:open toast layout="fullscreen">
  <a class="link" href="https://www.dndn.io/notice/700" target="_blank" rel="noreferrer noopener">
    <img class="link__img" src={new URL('./sample.png', import.meta.url).href} alt={title} />
  </a>
  <menu class="buttons">
    <li class="buttons__item buttons__item--clear">
      <Button variant="text" on:click={() => alert('별도로 구현 필요')}>다시보지 않기</Button>
    </li>
    <li class="buttons__item buttons__item--close">
      <Button variant="text" on:click={() => (open = false)}>닫기</Button>
    </li>
  </menu>
</Modal>

<style lang="scss">
  .link {
    display: block;

    &__img {
      max-width: 100%;
      vertical-align: middle;
    }
  }

  .buttons {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;

    &__item--clear {
      :global(.button) {
        color: var(--text-micro);
      }
    }

    &__item--close {
      margin-left: auto;
    }
  }
</style>

<script lang="ts">
  import { fade } from 'svelte/transition'
  import { durationObserver, toast as message } from './store'

  export let delay = 2000
</script>

{#if $message}
  <aside class="toast" out:fade={{ duration: $durationObserver, delay }}>
    <p class="toast__content">
      {$message}
    </p>
  </aside>
{/if}

<style lang="scss">
  .toast {
    --side-width: 20px;
    position: fixed;
    z-index: 1002;
    left: var(--side-width);
    right: var(--side-width);
    bottom: 30px;
    text-align: center;

    &__content {
      display: inline-flex;
      padding: 5px 15px;
      background: var(--on-neutral-primary);
      color: var(--main-surface);
      border-radius: 60px;
      font-size: 15px;
    }
  }
</style>

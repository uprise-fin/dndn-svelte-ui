<script lang="ts">
  import { Button, Snackbar, showToast } from '..'
</script>

<Button label="Click" on:click={() => showToast('Show toast')} />

<Snackbar />

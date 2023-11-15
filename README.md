# dndn svelte ui

## Getting Started

### Install

```bash
pnpm add @uprise-fin/dndn-svelte-ui
pnpm add -D sass
```

### Import CSS

```javascript
// +layout.svelte

<script>import '@uprise-fin/dndn-svelte-ui/src/stories/assets/styles/index.scss'</script>
```

### Basic usage

```javascript
// YourComponent.svelte

<script>
  import { Button } from '@uprise-fin/dndn-svelte-ui/src/stories'
</script>

<Button on:click={() => alert('Hello World!')}>Button</Button>
```

# dndn svelte ui

✨ https://storybook.dndn.io ✨

## Getting Started

### Install

```bash
pnpm add -D @uprise-fin/dndn-svelte-ui sass
```

### Import CSS

**src/routes/+layout.svelte**

```javascript
import '@uprise-fin/dndn-svelte-ui/src/stories/assets/styles/index.scss'
```

### Basic usage

**src/routes/+page.svelte**

```javascript
import { Button } from '@uprise-fin/dndn-svelte-ui/src/stories'
```

```html
<Button on:click={() => alert('Hello World!')}>Button.</Button>
```

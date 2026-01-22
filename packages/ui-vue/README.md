# @quility/ui-vue

The official Vue 3 UI component library for the Quility Design System.

## Installation

### Local Development (Recommended)
Since this package is currently private/local, the best way to install it into consumer apps is via a packed tarball.

1.  **Build & Pack:**
    ```bash
    cd packages/ui-vue
    npm run build
    npm pack
    # Generates: org-ui-vue-0.0.0.tgz
    ```

2.  **Install in App:**
    ```bash
    cd path/to/your/app
    npm install /path/to/design-system/packages/ui-vue/org-ui-vue-0.0.0.tgz
    ```

## Setup

You **must** import the global stylesheet in your application's entry point (e.g., `main.ts`, `main.js`).

```javascript
import '@org/ui-vue/dist/index.css'; // OR import '@org/ui-vue/style.css' if configured
```

## Usage

Import components directly from the package root:

```vue
<script setup>
import { Button, TextField } from '@org/ui-vue';
</script>

<template>
  <div>
    <TextField label="Email" placeholder="user@example.com" />
    <Button variant="primary">Submit</Button>
  </div>
</template>
```

## Available Scripts

-   `npm run storybook`: Starts the interactive component explorer.
-   `npm run build`: Compiles the library to `dist/` (ESM and CJS).
-   `npm run dev`: Runs the build in watch mode (great for linking).

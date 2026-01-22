# @quility/ui-react

The official React UI component library for the Quility Design System.

## Installation

### Local Development (Recommended)
Since this package is currently private/local, the best way to install it into consumer apps is via a packed tarball. This ensures dependency stability and avoids issues with duplicate React instances.

1.  **Build & Pack:**
    ```bash
    cd packages/ui-react
    npm run build
    npm pack
    # Generates: quility-ui-react-0.0.0.tgz
    ```

2.  **Install in App:**
    ```bash
    cd path/to/your/app
    npm install /path/to/design-system/packages/ui-react/quility-ui-react-0.0.0.tgz
    ```

## Setup

You **must** import the global stylesheet in your application's entry point (e.g., `App.js`, `main.tsx`) to ensure components are styled correctly.

```javascript
import '@quility/ui-react/style.css';
```

## Usage

Import components directly from the package root:

```jsx
import { Button, TextField } from '@quility/ui-react';

function App() {
  return (
    <div>
      <TextField label="Email" placeholder="user@example.com" />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

## Available Scripts

-   `npm run storybook`: Starts the interactive component explorer.
-   `npm run build`: Compiles the library to `dist/` (ESM and CJS).
-   `npm run dev`: Runs the build in watch mode (great for linking).

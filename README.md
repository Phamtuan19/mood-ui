# MoodUI

> A mobile-first UI library with a **3-layer design token system** for effortless customization.

[![npm version](https://img.shields.io/npm/v/mood-ui.svg)](https://www.npmjs.com/package/mood-ui)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)

## Features

- **3-Layer Token System** — Raw → Semantic → Component tokens. Clean separation, easy to maintain and extend.
- **Dual-Mode Components** — Every component has two modes: **Styled** (beautiful out-of-the-box) and **Unstyled** (headless, fully customizable).
- **Zero-Runtime CSS** — Powered by [Vanilla Extract](https://vanilla-extract.style/). Type-safe, compile-time CSS generation. No runtime overhead.
- **Dark Mode Built-in** — Light, dark, and system modes with smooth transitions. Persists user preference.
- **CSS Override API** — Change the entire look with a few CSS variables. No JavaScript config needed.
- **TypeScript First** — Full type safety throughout the entire library.
- **Accessible** — Semantic HTML, ARIA patterns, keyboard navigation, focus management.
- **Mobile-First** — Responsive design from the ground up.

## Installation

```bash
npm install mood-ui
# or
pnpm add mood-ui
# or
yarn add mood-ui
```

MoodUI requires React 18+ as a peer dependency:

```bash
npm install react react-dom
```

## Quick Start

```tsx
import { MoodUIProvider, Button, Badge } from 'mood-ui';
import 'mood-ui/styles/globals.css';

function App() {
  return (
    <MoodUIProvider defaultMode="system">
      <Button variant="solid" colorScheme="primary">
        Get Started
      </Button>
      <Badge colorScheme="success" variant="subtle">Active</Badge>
    </MoodUIProvider>
  );
}

export default App;
```

## Theming

### CSS Override (Simplest)

Override the theme by setting CSS variables on `:root`:

```css
/* my-app.css */
:root {
  /* Change brand color */
  --color-primary: #8b5cf6;
  --color-action-primary: #8b5cf6;

  /* Change border radius */
  --button-radius-md: 16px;

  /* Change font size */
  --font-size-sm: 13px;
}
```

### Dark Mode

```tsx
import { MoodUIProvider, useTheme } from 'mood-ui';

<MoodUIProvider defaultMode="system">
  <App />
</MoodUIProvider>

// Or programmatically
function ThemeToggle() {
  const { resolved, toggle } = useTheme();
  return <button onClick={toggle}>Switch to {resolved === 'dark' ? 'light' : 'dark'}</button>;
}
```

## 3-Layer Token Architecture

```
Raw Tokens          (src/theme/tokens/)
  color.blue[500] = #3b82f6
  space[4] = 16px
  ↓
Semantic Tokens     (src/theme/semantics/)
  color.primary = blue[500]
  color.action.primary = blue[500]
  ↓
Component Tokens    (src/theme/components/)
  button.padding = space[3]
  button.height.md = 40px
  ↓
CSS Variables       (src/theme/themes.ts)
  --color-primary: #3b82f6
  --button-height-md: 40px
```

The theme contract (`src/theme/contracts.ts`) is a **plain TypeScript interface** with no Vanilla Extract imports. It serves as the public API for theming.

## Components

### Button

```tsx
// Variants
<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="subtle">Subtle</Button>

// Sizes
<Button size="xs">XS</Button>
<Button size="sm">SM</Button>
<Button size="md">MD</Button>
<Button size="lg">LG</Button>

// Color schemes
<Button colorScheme="primary">Primary</Button>
<Button colorScheme="danger">Danger</Button>
<Button colorScheme="success">Success</Button>
<Button colorScheme="warning">Warning</Button>
<Button colorScheme="info">Info</Button>
<Button colorScheme="purple">Purple</Button>
<Button colorScheme="pink">Pink</Button>

// States
<Button loading loadingText="Loading...">Save</Button>
<Button disabled>Disabled</Button>
<Button rounded>Rounded</Button>
<Button fullWidth>Full Width</Button>

// Dual mode
<Button unstyled className="my-custom-button">Unstyled</Button>
```

### Badge

```tsx
<Badge variant="solid">Solid</Badge>
<Badge variant="subtle">Subtle</Badge>
<Badge variant="outline">Outline</Badge>

<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>

// Status badges
<Badge colorScheme="success" variant="subtle">Active</Badge>
<Badge colorScheme="warning" variant="subtle">Pending</Badge>
<Badge colorScheme="danger" variant="solid">Error</Badge>
```

## Project Structure

```
mood-ui/
├── src/
│   ├── theme/
│   │   ├── tokens/          # Layer 1: Raw primitives
│   │   │   ├── color.ts
│   │   │   ├── spacing.ts
│   │   │   ├── typography.ts
│   │   │   ├── radius.ts
│   │   │   ├── shadow.ts
│   │   │   ├── motion.ts
│   │   │   └── zIndex.ts
│   │   ├── semantics/      # Layer 2: Semantic mappings
│   │   │   ├── color.ts
│   │   │   ├── typography.ts
│   │   │   ├── spacing.ts
│   │   │   └── motion.ts
│   │   ├── components/     # Layer 3: Component-specific
│   │   │   ├── button.ts
│   │   │   ├── input.ts
│   │   │   ├── badge.ts
│   │   │   └── overlay.ts
│   │   ├── contracts.ts    # Public TypeScript interface (NO vanilla-extract)
│   │   ├── themes.ts       # Vanilla Extract internals
│   │   └── index.ts        # Public barrel export
│   ├── css/                # Vanilla Extract CSS recipes
│   │   ├── button.css.ts
│   │   ├── badge.css.ts
│   │   └── index.ts
│   ├── components/         # React components
│   │   ├── core/
│   │   │   ├── Button/
│   │   │   └── Badge/
│   │   └── layout/
│   ├── context/
│   │   └── ThemeProvider.tsx
│   ├── hooks/
│   │   └── useTheme.ts
│   └── styles/
│       ├── reset.css.ts
│       └── global.css.ts
├── demo/                   # Local demo app
├── docs/                   # Starlight documentation
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Development

```bash
# Install dependencies
npm install

# Start demo app
npm run dev

# Build library
npm run build

# Type check
npm run typecheck

# Lint
npm run lint

# Run tests
npm run test

# Start docs
npm run dev:docs

# Build docs
npm run docs:build
```

## Tech Stack

| Concern | Choice |
|---------|--------|
| Language | TypeScript 5.7 (strict mode) |
| CSS | Vanilla Extract |
| Build | Vite 6 |
| Testing | Vitest + Testing Library |
| Docs | Starlight (Astro) |
| Linting | ESLint + TypeScript ESLint |

## Browser Support

- Chrome / Edge 90+
- Firefox 90+
- Safari 14+

## License

[MIT](LICENSE) — Free for personal and commercial use.

---

Built with care for developers who want beautiful UIs without sacrificing customization flexibility.

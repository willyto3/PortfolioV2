# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run preview   # Preview production build
```

No test or lint scripts are configured.

## Architecture

**Stack:** React 18, MUI v7, React Router v6 (hash), Zustand, Vite.

**Entry flow:** `main.jsx` → `RouterProvider` → `LayoutPublic` (wraps every page with NavBar + Footer + MUI ThemeProvider) → page-level scene component via `<Outlet>`.

### Key directories

- `src/scenes/` — One folder per page (`home`, `experiencia`, `estudios`, `herramientas`, `proyectos`, `contacto`, `error404`). Each has an `index.jsx` plus sub-components and data files.
- `src/components/` — Shared components: `NavBar.jsx`, `Footer.jsx`, `FlexBetween.jsx`.
- `src/layout/LayoutPublic.jsx` — Theme provider setup, global layout.
- `src/router/index.jsx` — `createHashRouter` with `LayoutPublic` as parent and scenes as children.
- `src/store/store.js` — Zustand store with `persist`; manages `mode` (dark/light) and `language` (`es`/`en`), saved to localStorage under key `'cv'`.
- `src/theme.js` — MUI theme factory. Primary color is orange (`#FF9800`). Exports `themeSettings(mode)` used in `LayoutPublic` with `useMemo`.
- `src/locales/` — i18n source of truth. `es.js` and `en.js` hold all UI text (name, nav items, job history, education, contact info, footer). `index.js` exports `locales`, `defaultLocale` and a static `t` (compat). `useT.js` exports the `useT()` hook that reads `language` from the store and returns the active locale.
- `public/` — Static assets: logos, profile photo (`WillyNegro.png`), PDF CVs.

### Theme system

`LayoutPublic` reads `mode` from Zustand, calls `themeSettings(mode)`, and wraps the app in MUI `ThemeProvider`. Access palette tokens in components via `useTheme()`:

```js
const theme = useTheme()
theme.palette.neutral.light   // background color
theme.palette.neutral.dark    // text color
theme.palette.primary.main    // orange accent
```

### Content updates

All display content lives in `src/locales/{es,en}.js`. In components use the `useT()` hook:

```js
import { useT } from '../../locales/useT'
const t = useT()
// t.home.roles, t.nav.items, etc.
```

To add another language: create `locales/xx.js` with the same structure, import it in `locales/index.js`, and add it to the `locales` object. The active language is stored in Zustand (`language`) and toggled via `setLanguage(code)`.

### Routing

Hash router — no server configuration needed (deploys to Render as a static site at domain root, no `base` path needed in Vite). Routes: `/`, `/experiencia`, `/estudios`, `/herramientas`, `/proyectos`, and a wildcard `*` for 404. Router v7 future flags are enabled in `src/router/index.jsx`.

Vite config lives in `vite.config.mjs` (ESM).

### Styling conventions

- Use MUI `sx` prop for all styles (responsive via breakpoint objects: `{ xs: ..., md: ... }`).
- Use `clamp()` for fluid font sizes.
- No CSS modules or external CSS files (only `index.css` for font import and root sizing).

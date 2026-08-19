# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint over src/
```

No test script is configured.

> Vite's dev server has been seen serving a stale module after several edits
> to the same file in quick succession. If the browser disagrees with what is
> on disk, restart the dev server (deleting `node_modules/.vite`) before
> suspecting the code.

## Architecture

**Stack:** React 19, MUI v7, React Router v7 (hash), Zustand v5, Vite 8.

**Entry flow:** `main.jsx` → `RouterProvider` → `LayoutPublic` (wraps every page with NavBar + Footer + MUI ThemeProvider) → page-level scene component via `<Outlet>`.

### Key directories

- `src/scenes/` — One folder per page (`home`, `experiencia`, `estudios`, `herramientas`, `proyectos`, `error404`). Each has an `index.jsx` plus its card sub-components.
- `src/components/` — Shared components:
  - `NavBar.jsx`, `Footer.jsx`
  - `Secciones.jsx` — the layout behind Estudios, Herramientas and Proyectos (see below).
  - `BanderaIcono.jsx` — the two inline SVG flags used by the language toggle.
- `src/layout/LayoutPublic.jsx` — Theme provider setup, global layout.
- `src/router/index.jsx` — `createHashRouter` with `LayoutPublic` as parent and scenes as children.
- `src/store/store.js` — Zustand store with `persist`; manages `mode` (dark/light) and `language` (`es`/`en`), saved to localStorage under key `'cv'`. Note `setMode` is a toggle and ignores any argument.
- `src/theme.js` — MUI theme factory. Primary color is orange (`#FF9800`). Exports `themeSettings(mode)` used in `LayoutPublic` with `useMemo`.
- `src/locales/` — i18n source of truth (see below).
- `public/` — Static assets, referenced by bare filename from the locales (e.g. `imagen: 'excel.png'`). Profile photo is `WillyNegro.webp`.

### Theme system

`LayoutPublic` reads `mode` from Zustand, calls `themeSettings(mode)`, and wraps the app in MUI `ThemeProvider`. Access palette tokens in components via `useTheme()`:

```js
const theme = useTheme()
theme.palette.neutral.light   // background color
theme.palette.neutral.dark    // text color
theme.palette.primary.main    // orange accent
```

Cards sit on MUI's default `background.paper`, which is near-black in dark mode. Any asset that is essentially black or essentially white will disappear in one of the two themes. Two patterns exist for this:

- Supply `imageLight`/`imageDark` variants and pick between them, as `CardExperiencia.jsx` does with its `pickByTheme` helper.
- Or pick a mid-tone that survives both, as `public/github.svg` does.

### Content and i18n

**All display text lives in `src/locales/{es,en}.js`.** No component should contain a literal string that reaches the screen — that includes `aria-label`, `title` and `alt`. In components:

```js
import { useT } from '../../locales/useT'
const t = useT()
// t.home.roles, t.nav.items, etc.
```

Top-level keys: `nav`, `home`, `experienciaUI`, `experiencia`, `estudiosUI`, `herramientasUI`, `estudios`, `proyectos`, `error404`, `contacto`, `footer`.

The `*UI` keys hold labels and headings; the matching plain key holds the data rows. Note that the tools data currently lives under `estudios.herramientas.items` rather than at the top level — a leftover, not a convention to copy.

One deliberate oddity: `nav.cambiarIdiomaTitulo` is the tooltip on the language button, which reads in the language you are switching *to*. So `es.js` holds the English string and `en.js` the Spanish one.

**The two locale files must stay structurally identical.** A key present in one and missing in the other crashes the page that reads it as soon as the user switches language. Both files currently expose 316 key paths.

To add another language: create `locales/xx.js` with the same structure, import it in `locales/index.js`, and add it to the `locales` object. The active language is stored in Zustand (`language`) and toggled via `setLanguage(code)`.

### The `Secciones` component

Estudios, Herramientas and Proyectos are all the same layout: a list of sections, each with a rotated title, an accent rule and a grid of cards. That layout lives once in `components/Secciones.jsx`; the pages supply only data.

```jsx
<Secciones
  grupos={agruparPorCategoria(t.proyectos.items)}  // [{ titulo, items }]
  Tarjeta={CardProyecto}                           // receives {...item}
  getKey={proyecto => proyecto.nombre}
  anchoTarjeta={{ xs: 12, md: 5.8 }}               // optional; defaults to lg: 5.8
/>
```

`agruparPorCategoria` (exported from the same module) groups by an item's `categoria` field, preserving order. Estudios does not use it — it splits by `tipo` and builds its two groups by hand.

Proyectos deliberately wraps at `md` while the other two wrap at `lg`, which is why the card width is a prop rather than a constant.

### Routing

Hash router — no server configuration needed (deploys to Render as a static site at domain root, no `base` path needed in Vite). Routes: `/`, `/experiencia`, `/estudios`, `/herramientas`, `/proyectos`, and a wildcard `*` for 404.

`Error404` is used both as the wildcard route and as the root `errorElement`, so a render error anywhere in the tree falls through to it.

Vite config lives in `vite.config.mjs` (ESM).

### Styling conventions

- Use MUI `sx` prop for all styles (responsive via breakpoint objects: `{ xs: ..., md: ... }`).
- Use `clamp()` for fluid font sizes.
- No CSS modules or external CSS files (only `index.css` for font import and root sizing).

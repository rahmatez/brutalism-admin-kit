# Brutalism Admin Kit

Neo-brutalist admin dashboard template for React — 10 dashboards, 40+ pages, 6 sidebar layouts, and a full documentation site.

Built with [neobrutalism-ui-react](https://www.npmjs.com/package/neobrutalism-ui-react). Inspired by [TailAdmin](https://tailadmin.com/).

**Repository:** [github.com/rahmatez/brutalism-admin-kit](https://github.com/rahmatez/brutalism-admin-kit)  
**Created by [rahmatez](https://github.com/rahmatez)** · [rahmatez.dev](https://www.rahmatez.dev/)

---

## Features

| Area | What's included |
|------|-----------------|
| **Dashboards** | Analytics, E-Commerce, Marketing, CRM, Stocks, SaaS, Logistics, AI, Sales, Finance |
| **Pages** | Auth, profile, mail, chat, invoice, tasks, calendar, files, tables, charts, UI showcase, errors |
| **Layouts** | Classic, sectioned, collapsible, nested, floating, documentation sidebar |
| **UX** | Dark mode, command palette (⌘K), toasts, skeleton loading, responsive shell |
| **Monorepo** | Shared `@neo-admin/core`, live demo app, and docs site |

### `@neo-admin/core` exports

- **Shell** — `AdminShell`, `AuthLayout`, `BlankLayout`, `AppProviders`
- **Navigation** — sidebar config, breadcrumbs, command palette items
- **Widgets** — KPI rows, chart cards, data tables, dashboard toolbar
- **Data** — typed mock data for dashboards and app pages

---

## Tech stack

React 19 · Vite 7 · Tailwind CSS v4 · React Router 7 · Recharts · TypeScript · Turborepo · pnpm

---

## Requirements

- **Node.js** 20.19+
- **pnpm** 9+

---

## Quick start

```bash
git clone https://github.com/rahmatez/brutalism-admin-kit.git
cd brutalism-admin-kit
pnpm install
pnpm dev
```

| App | Command | URL |
|-----|---------|-----|
| Demo (all pages) | `pnpm dev:demo` | http://localhost:5174 |
| Docs | `pnpm dev:docs` | http://localhost:5175 |
| Both | `pnpm dev` | — |

---

## Project structure

```
brutalism-admin-kit/
├── apps/
│   ├── demo/              # Live admin preview (SPA)
│   └── docs/              # Documentation site
├── packages/
│   ├── core/              # AdminShell, widgets, navigation, mock data
│   └── config/            # Shared TypeScript config
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

---

## Use in your project

Clone the monorepo and copy `packages/core`, or install dependencies and wire up the shell:

```bash
pnpm add neobrutalism-ui-react lucide-react react-router-dom react-hook-form recharts cmdk
```

```css
/* styles.css */
@import "tailwindcss";
@import "neobrutalism-ui-react/styles.css";

@source "../node_modules/neobrutalism-ui-react/dist";
@source "../node_modules/@neo-admin/core/dist";
```

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProviders, AdminShell, initPopoverAnchoring } from '@neo-admin/core';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';

initPopoverAnchoring();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <BrowserRouter>
        <AdminShell>{/* Your routes */}</AdminShell>
      </BrowserRouter>
    </AppProviders>
  </StrictMode>,
);
```

See the docs app for a full walkthrough — run `pnpm dev:docs` and open `/docs/installation`.

---

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start demo + docs in parallel |
| `pnpm dev:demo` | Demo app only |
| `pnpm dev:docs` | Docs site only |
| `pnpm build` | Build all packages and apps |
| `pnpm lint` | Type-check all packages |
| `pnpm test` | Run unit/integration tests (local) |
| `pnpm test:e2e` | Run Playwright e2e tests (local) |

> Test source files are excluded from this repository (see `.gitignore`). Tests are intended for local development only.

---

## Deployment (Vercel)

Deploy **demo** and **docs** as separate Vercel projects. Each app includes a `vercel.json` with recommended settings.

### Demo app (`apps/demo`)

| Setting | Value |
|---------|-------|
| Root Directory | `apps/demo` |
| Install Command | `cd ../.. && pnpm install` |
| Build Command | `cd ../.. && pnpm build --filter=@neo-admin/demo` |
| Output Directory | `dist` |

### Docs site (`apps/docs`)

| Setting | Value |
|---------|-------|
| Root Directory | `apps/docs` |
| Install Command | `cd ../.. && pnpm install` |
| Build Command | `cd ../.. && pnpm build --filter=@neo-admin/docs` |
| Output Directory | `dist` |

---

## Component library

UI primitives come from [neobrutalism-ui-react](https://neo-brutalism-react-docs.vercel.app/). Brutalism Admin Kit adds the admin shell, page patterns, widgets, and navigation on top.

- [NeoBrutalism UI docs](https://neo-brutalism-react-docs.vercel.app/)
- [npm package](https://www.npmjs.com/package/neobrutalism-ui-react)

---

## Contributing

Issues and pull requests are welcome on [GitHub](https://github.com/rahmatez/brutalism-admin-kit/issues).

---

## License

MIT © [Rahmat Ashari](https://github.com/rahmatez)

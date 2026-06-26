# Brutalism Admin Kit

Neo-brutalist admin dashboard template built with [neobrutalism-ui-react](https://www.npmjs.com/package/neobrutalism-ui-react). Inspired by [TailAdmin](https://tailadmin.com/) — 10 dashboards, 40+ pages, 6 sidebar layouts, and full documentation.

**Created by [rahmatez](https://github.com/rahmatez)**

## Features

- **10 Dashboard Variants** — Analytics, E-Commerce, Marketing, CRM, Stocks, SaaS, Logistics, AI, Sales, Finance
- **40+ Pages** — Auth, profile, mail, chat, invoice, task, calendar, files, tables, charts, UI showcase, errors
- **6 Sidebar Layouts** — Classic, sectioned, collapsible, nested, floating, documentation
- **UX** — Dark mode, command palette (⌘K), toast feedback, skeleton loading, responsive design
- **Monorepo** — Shared `@neo-admin/core` package, demo app, and docs site

## Requirements

- Node.js 20.19+
- pnpm 9+

## Quick Start

```bash
git clone https://github.com/rahmatez/neo-admin.git
cd neo-admin
pnpm install
pnpm dev
```

| App | Command | URL |
|-----|---------|-----|
| Demo (all pages) | `pnpm dev:demo` | http://localhost:5174 |
| Docs | `pnpm dev:docs` | http://localhost:5175 |
| Both | `pnpm dev` | — |

## Testing (local only)

Test files are **not included** in this repository (see `.gitignore`). Run tests locally after developing:

```bash
pnpm test
pnpm exec playwright install chromium
pnpm test:e2e
```

## Project Structure

```
neo-admin/
├── apps/
│   ├── demo/          # Live admin preview (SPA)
│   └── docs/          # Documentation site
├── packages/
│   ├── core/          # AdminShell, widgets, nav, mock data
│   └── config/        # Shared TypeScript config
```

## Using in Your Project

```bash
pnpm add neobrutalism-ui-react @neo-admin/core
```

```css
/* styles.css */
@import "tailwindcss";
@import "neobrutalism-ui-react/styles.css";
@source "../node_modules/neobrutalism-ui-react/dist";
```

```tsx
import { AppProviders, AdminShell } from '@neo-admin/core';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <AdminShell>
          {/* Your pages */}
        </AdminShell>
      </BrowserRouter>
    </AppProviders>
  );
}
```

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start demo + docs in parallel |
| `pnpm dev:demo` | Demo app only |
| `pnpm dev:docs` | Docs site only |
| `pnpm build` | Build all packages and apps |
| `pnpm lint` | Type-check all packages |
| `pnpm test` | Run tests |

## Deployment (Vercel)

Deploy each app as a separate Vercel project:

### Demo App
- **Root Directory:** `apps/demo`
- **Build Command:** `cd ../.. && pnpm build --filter=@neo-admin/demo`
- **Output Directory:** `dist`
- **Install Command:** `cd ../.. && pnpm install`

### Docs Site
- **Root Directory:** `apps/docs`
- **Build Command:** `cd ../.. && pnpm build --filter=@neo-admin/docs`
- **Output Directory:** `dist`
- **Install Command:** `cd ../.. && pnpm install`

Each app includes a `vercel.json` with these settings pre-configured.

## Component Library

Brutalism Admin Kit is built on [neobrutalism-ui-react](https://neo-brutalism-react-docs.vercel.app/). For primitive component API reference, see the [library documentation](https://neo-brutalism-react-docs.vercel.app/).

## Author

Built by [rahmatez](https://github.com/rahmatez) · [rahmatez.dev](https://www.rahmatez.dev/)

## License

MIT © [Rahmat Ashari](https://github.com/rahmatez)

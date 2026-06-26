import { DocsCodeBlock, DocsPage } from '@/components/docs-layout';
import {
  DocsCallout,
  DocsInlineCode,
  DocsLink,
  DocsNextLinks,
  DocsPackageTable,
  DocsSection,
  DocsSteps,
} from '@/components/docs-content';
import { Text } from 'neobrutalism-ui-react';

const PEER_DEPS = `pnpm add neobrutalism-ui-react lucide-react react-router-dom react-hook-form recharts cmdk`;

const STYLES_CSS = `@import "tailwindcss";
@import "neobrutalism-ui-react/styles.css";

/* Scan library + core Tailwind classes */
@source "../node_modules/neobrutalism-ui-react/dist";
@source "../node_modules/@neo-admin/core/dist";
@source "../src";

@layer base {
  html {
    color-scheme: light;
  }

  body {
    background-color: var(--nb-background);
    color: var(--nb-foreground);
  }
}`;

const APP_BOOTSTRAP = `import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProviders } from '@neo-admin/core';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppProviders>
  </StrictMode>,
);`;

export default function InstallationPage() {
  return (
    <DocsPage
      title="Installation"
      description="Install Brutalism Admin Kit from the monorepo or add the packages to an existing Vite + React app."
    >
      <Text>
        Brutalism Admin Kit ships as a Turborepo monorepo with <DocsInlineCode>@neo-admin/core</DocsInlineCode>{' '}
        (layouts, widgets, navigation) on top of{' '}
        <DocsInlineCode>neobrutalism-ui-react</DocsInlineCode>. Choose the path that matches your workflow.
      </Text>

      <DocsSection title="Requirements" description="Versions used by the demo and docs apps.">
        <DocsPackageTable
          rows={[
            { name: 'node', version: '20.19+', note: 'Required by Vite 7' },
            { name: 'react', version: '19.x', note: 'React 18+ supported' },
            { name: 'tailwindcss', version: '4.x', note: 'With @tailwindcss/vite' },
            { name: 'vite', version: '7.x', note: 'Recommended bundler' },
            { name: 'pnpm', version: '9.x', note: 'Monorepo package manager' },
          ]}
        />
      </DocsSection>

      <DocsSection
        title="Option A — Run the monorepo"
        description="Clone the full kit to explore dashboards, docs, and source code locally."
      >
        <DocsSteps
          steps={[
            {
              title: 'Clone and install',
              description: 'Install all workspace packages from the repository root.',
              code: `git clone https://github.com/rahmatez/brutalism-admin-kit.git
cd brutalism-admin-kit
pnpm install`,
            },
            {
              title: 'Start the apps',
              description: 'Demo runs on port 5174, docs on 5175.',
              code: `pnpm dev              # both apps
pnpm dev:demo         # demo only → http://localhost:5174
pnpm dev:docs         # docs only → http://localhost:5175`,
            },
            {
              title: 'Build for production',
              code: `pnpm build`,
            },
          ]}
        />
        <DocsCallout tone="mint" title="Tip">
          <Text size="sm">
            Use the demo app as a reference implementation. Pages live in{' '}
            <DocsInlineCode>apps/demo/src/pages</DocsInlineCode> and shared primitives in{' '}
            <DocsInlineCode>packages/core</DocsInlineCode>.
          </Text>
        </DocsCallout>
      </DocsSection>

      <DocsSection
        title="Option B — Add to your project"
        description="Install packages into an existing Vite + React + Tailwind v4 project."
      >
        <DocsSteps
          steps={[
            {
              title: 'Install core dependencies',
              description: '@neo-admin/core is currently private in the monorepo — copy packages/core into your repo or publish it first.',
              code: `pnpm add neobrutalism-ui-react lucide-react`,
            },
            {
              title: 'Install peer dependencies',
              description: 'Required for AdminShell, charts, forms, and the command palette.',
              code: PEER_DEPS,
            },
            {
              title: 'Configure Tailwind CSS',
              description: 'Import library styles and scan dist folders so utility classes from core are generated.',
              code: STYLES_CSS,
            },
            {
              title: 'Bootstrap the app',
              description: 'Wrap your router with AppProviders — it sets up NeoBrutalismProvider, ToastProvider, and CommandPaletteProvider.',
              code: APP_BOOTSTRAP,
            },
          ]}
        />
      </DocsSection>

      <DocsSection title="Vite setup" description="Minimal Vite config for Tailwind v4 and path aliases.">
        <DocsCodeBlock
          code={`import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});`}
        />
      </DocsSection>

      <DocsSection title="TypeScript paths" description="Optional — match the demo app import alias.">
        <DocsCodeBlock
          code={`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
        />
      </DocsSection>

      <DocsSection title="Verify installation" description="Confirm styles and layouts render correctly.">
        <DocsCodeBlock
          code={`import { AdminShell, PageHeader } from '@neo-admin/core';
import { Stack } from 'neobrutalism-ui-react';

export default function HomePage() {
  return (
    <Stack gap="lg">
      <PageHeader title="It works" description="Brutalism Admin Kit is ready." />
    </Stack>
  );
}`}
        />
        <DocsCallout tone="yellow" title="Styles look broken?">
          <Text size="sm">
            If borders, shadows, or spacing are missing, double-check both{' '}
            <DocsInlineCode>@source</DocsInlineCode> lines in your CSS and that{' '}
            <DocsInlineCode>neobrutalism-ui-react/styles.css</DocsInlineCode> is imported before your own layers.
          </Text>
        </DocsCallout>
      </DocsSection>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            {
              label: 'Quick Start',
              path: '/docs/quick-start',
              description: 'Wire AdminShell, navigation, and your first page.',
            },
            {
              label: 'Admin Shell',
              path: '/docs/admin-shell',
              description: 'Learn layout variants and sidebar configuration.',
            },
            {
              label: 'Theming',
              path: '/docs/customization/theming',
              description: 'Override NeoBrutalism tokens and CSS variables.',
            },
          ]}
        />
        <Text className="mt-4 opacity-70">
          Need a working reference? Open the{' '}
          <a
            href={import.meta.env.VITE_DEMO_URL ?? 'http://localhost:5174'}
            className="font-bold underline decoration-2 underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            live demo
          </a>{' '}
          or read the <DocsLink to="/docs/faq">FAQ</DocsLink>.
        </Text>
      </DocsSection>
    </DocsPage>
  );
}

import { DocsCodeBlock, DocsPage } from '@/components/docs-layout';
import {
  DocsCallout,
  DocsInlineCode,
  DocsLink,
  DocsNextLinks,
  DocsSection,
  DocsSteps,
} from '@/components/docs-content';
import { Text } from 'neobrutalism-ui-react';

const APP_TSX = `import { AppProviders } from '@neo-admin/core';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';

export function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <a href="#main-content" className="sr-only-focusable">
          Skip to content
        </a>
        <AppRouter />
      </BrowserRouter>
    </AppProviders>
  );
}`;

const ROUTER_TSX = `import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ShellLayout } from './layouts/shell-layout';

const DashboardPage = lazy(() => import('./pages/dashboard'));

function PageLoader() {
  return <div>Loading…</div>;
}

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route element={<ShellLayout variant="sectioned" />}>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<PageLoader />}>
              <DashboardPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}`;

const SHELL_LAYOUT = `import { AdminShell } from '@neo-admin/core';
import { Outlet } from 'react-router-dom';

export function ShellLayout({ variant = 'sectioned' }) {
  return (
    <AdminShell variant={variant}>
      <div id="main-content">
        <Outlet />
      </div>
    </AdminShell>
  );
}`;

const DASHBOARD_PAGE = `import { KpiStatRow, PageHeader } from '@neo-admin/core';
import { Stack } from 'neobrutalism-ui-react';
import { LayoutDashboard, Users, DollarSign, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  return (
    <Stack gap="xl">
      <PageHeader
        title="Dashboard"
        badge="Overview"
        description="Your first Brutalism Admin Kit page."
      />
      <KpiStatRow
        items={[
          { label: 'Revenue', value: '$12.4k', tone: 'yellow', icon: <DollarSign className="size-5" /> },
          { label: 'Users', value: '1,284', tone: 'mint', icon: <Users className="size-5" /> },
          { label: 'Orders', value: '342', tone: 'lavender', icon: <LayoutDashboard className="size-5" /> },
          { label: 'Growth', value: '+18%', tone: 'pink', icon: <TrendingUp className="size-5" /> },
        ]}
      />
    </Stack>
  );
}`;

const CUSTOM_NAV = `import type { NavGroup } from '@neo-admin/core';

export const myNavGroups: NavGroup[] = [
  {
    id: 'main',
    label: 'Main',
    items: [
      { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
      { id: 'settings', label: 'Settings', path: '/settings', icon: 'Settings' },
    ],
  },
];

// Pass to AdminShell:
<AdminShell variant="sectioned" navGroups={myNavGroups}>
  {children}
</AdminShell>`;

export default function QuickStartPage() {
  return (
    <DocsPage
      title="Quick Start"
      description="From a fresh Vite app to a running admin shell with a dashboard page."
    >
      <Text>
        This guide assumes you completed <DocsLink to="/docs/installation">Installation</DocsLink>. We wire up
        providers, routing, the admin shell, and a sample dashboard page — the same structure used in{' '}
        <DocsInlineCode>apps/demo</DocsInlineCode>.
      </Text>

      <DocsSteps
        steps={[
          {
            title: 'Wrap the app with providers',
            description: 'AppProviders configures the design system, toasts, and command palette.',
            code: APP_TSX,
          },
          {
            title: 'Set up routing',
            description: 'Use nested routes so ShellLayout wraps every admin page.',
            code: ROUTER_TSX,
          },
          {
            title: 'Create a shell layout',
            description: 'AdminShell reads navigation from packages/core by default. Override with navGroups when needed.',
            code: SHELL_LAYOUT,
          },
          {
            title: 'Add your first page',
            description: 'Use PageHeader and KpiStatRow for a dashboard-style screen.',
            code: DASHBOARD_PAGE,
          },
        ]}
      />

      <DocsSection title="Custom navigation" description="Replace the default demo nav with your own routes.">
        <DocsCodeBlock code={CUSTOM_NAV} />
      </DocsSection>

      <DocsSection title="Layout variants" description="Swap sidebar behavior without changing page content.">
        <DocsCodeBlock
          code={`<AdminShell variant="classic">…</AdminShell>
<AdminShell variant="sectioned">…</AdminShell>
<AdminShell variant="collapsible">…</AdminShell>
<AdminShell variant="floating">…</AdminShell>
<AdminShell variant="nested">…</AdminShell>
<AdminShell variant="documentation">…</AdminShell>`}
        />
        <Text className="opacity-70">
          See <DocsLink to="/docs/sidebar-variants">Sidebar Variants</DocsLink> for visual comparisons.
        </Text>
      </DocsSection>

      <DocsSection title="Run the reference apps">
        <DocsCodeBlock
          code={`pnpm dev:demo    # http://localhost:5174
pnpm dev:docs    # http://localhost:5175`}
          title="TERMINAL"
          language="bash"
        />
        <DocsCallout tone="mint" title="Copy pages from demo">
          <Text size="sm">
            Dashboard and app pages in <DocsInlineCode>apps/demo/src/pages</DocsInlineCode> are ready to copy.
            Widgets and layout primitives live in <DocsInlineCode>packages/core/src</DocsInlineCode>.
          </Text>
        </DocsCallout>
      </DocsSection>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            {
              label: 'Admin Shell',
              path: '/docs/admin-shell',
              description: 'Deep dive into the layout wrapper and header.',
            },
            {
              label: 'Command Palette',
              path: '/docs/patterns/command-palette',
              description: 'Wire keyboard search across routes.',
            },
            {
              label: 'Theming',
              path: '/docs/customization/theming',
              description: 'Customize colors, radius, and shadows.',
            },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

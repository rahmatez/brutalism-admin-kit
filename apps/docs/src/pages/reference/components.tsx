import { DocsPage } from '@/components/docs-layout';
import {
  DocsCallout,
  DocsInlineCode,
  DocsLink,
  DocsNextLinks,
  DocsSection,
} from '@/components/docs-content';
import { Badge, Button, Cluster, Stack, Text } from 'neobrutalism-ui-react';

const coreExports = [
  'AppProviders', 'AdminShell', 'AuthLayout', 'BlankLayout',
  'AppHeader', 'PageHeader', 'FilterBar', 'PageActions',
  'KpiStatRow', 'DashboardToolbar', 'DashboardSection',
  'TrafficChart', 'LineChartCard', 'BarChartCard', 'PieChartCard', 'FunnelChartCard',
  'RecentOrdersTable', 'TopPagesTable', 'ProductsTable', 'DealsTable', 'ActivityFeed',
  'useDashboardPage', 'useSimulatedLoading', 'useCommandPalette',
  'fullNav', 'flattenNav', 'getPageTitle', 'getNavBreadcrumbs',
] as const;

const libraryCategories = [
  'Layout — Stack, Cluster, Split, Surface',
  'Forms — Input, Select, FormRoot, FormField, Checkbox, Switch',
  'Data — DataTable, useDataTable',
  'Feedback — Toast, Alert, Dialog, Callout',
  'Navigation — Sidebar, Breadcrumb, Tabs, Command',
  'Display — Card, Badge, Avatar, Stat, Chart',
] as const;

export default function ComponentsRefPage() {
  return (
    <DocsPage
      title="Component Library"
      description="Brutalism Admin Kit builds on neobrutalism-ui-react. This page maps what lives where."
    >
      <Text>
        <DocsInlineCode>@neo-admin/core</DocsInlineCode> provides admin-specific layouts, widgets, and navigation.{' '}
        <DocsInlineCode>neobrutalism-ui-react</DocsInlineCode> provides all UI primitives. For full API docs, use the
        official library documentation.
      </Text>

      <DocsSection title="@neo-admin/core exports">
        <Cluster gap="sm" wrap="wrap">
          {coreExports.map((name) => (
            <Badge key={name} tone="secondary" className="font-mono text-xs">
              {name}
            </Badge>
          ))}
        </Cluster>
      </DocsSection>

      <DocsSection title="neobrutalism-ui-react categories">
        <ul>
          {libraryCategories.map((cat) => (
            <li key={cat}>{cat}</li>
          ))}
        </ul>
      </DocsSection>

      <DocsCallout tone="mint" title="Official docs">
        <Stack gap="sm">
          <Text size="sm">Full component API, props, and live examples:</Text>
          <Button
            href="https://neo-brutalism-react-docs.vercel.app/"
            target="_blank"
            rel="noreferrer"
            size="sm"
          >
            Open neobrutalism-ui-react docs
          </Button>
        </Stack>
      </DocsCallout>

      <DocsSection title="When to use which">
        <ul>
          <li>
            <strong>Admin pages</strong> — AdminShell + PageHeader + widgets from @neo-admin/core
          </li>
          <li>
            <strong>Auth / blank pages</strong> — AuthLayout or BlankLayout from @neo-admin/core
          </li>
          <li>
            <strong>Custom UI</strong> — import primitives directly from neobrutalism-ui-react
          </li>
          <li>
            <strong>Forms & tables</strong> — library components; see <DocsLink to="/docs/patterns/forms">Patterns</DocsLink>
          </li>
        </ul>
      </DocsSection>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            { label: 'Introduction', path: '/docs/introduction', description: 'Kit overview and structure.' },
            { label: 'Patterns', path: '/docs/patterns/command-palette', description: 'Recipes for common UI.' },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

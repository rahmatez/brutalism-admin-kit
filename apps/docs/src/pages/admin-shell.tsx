import { DocsCodeBlock, DocsPage } from '@/components/docs-layout';
import {
  DEMO_URL,
  DocsCallout,
  DocsInlineCode,
  DocsLink,
  DocsNextLinks,
  DocsPropList,
  DocsSection,
} from '@/components/docs-content';
import { Text } from 'neobrutalism-ui-react';

const BASIC_USAGE = `import { AdminShell, PageHeader } from '@neo-admin/core';
import { Stack } from 'neobrutalism-ui-react';

export default function DashboardPage() {
  return (
    <Stack gap="xl">
      <PageHeader title="Dashboard" badge="Overview" description="Welcome back." />
      {/* page content */}
    </Stack>
  );
}

// In your shell layout:
<AdminShell variant="sectioned">
  <div id="main-content">
    <Outlet />
  </div>
</AdminShell>`;

export default function AdminShellPage() {
  return (
    <DocsPage
      title="Admin Shell"
      description="The layout wrapper that composes sidebar, header, command palette, and main content."
    >
      <Text>
        <DocsInlineCode>AdminShell</DocsInlineCode> is the backbone of every admin page. It wires{' '}
        <DocsInlineCode>SidebarProvider</DocsInlineCode>, navigation groups,{' '}
        <DocsInlineCode>AppHeader</DocsInlineCode>, and <DocsInlineCode>SidebarInset</DocsInlineCode> from
        neobrutalism-ui-react with Brutalism Admin Kit navigation config.
      </Text>

      <DocsSection title="Basic usage">
        <DocsCodeBlock code={BASIC_USAGE} />
      </DocsSection>

      <DocsSection title="Props" description="Override defaults when building a custom app or docs site.">
        <DocsPropList
          items={[
            {
              name: 'variant',
              type: 'SidebarLayoutVariant',
              description: 'classic | sectioned | collapsible | nested | floating | documentation',
            },
            {
              name: 'navGroups',
              type: 'NavGroup[]',
              description: 'Sidebar menu structure. Defaults to fullNav from @neo-admin/core.',
            },
            {
              name: 'commandPaletteItems',
              type: 'CommandItem[]',
              description: 'Items for ⌘K search. Defaults to flattened nav routes.',
            },
            {
              name: 'searchPlaceholder',
              type: 'string',
              description: 'Placeholder text in the header search trigger.',
            },
            {
              name: 'showHeader',
              type: 'boolean',
              description: 'Toggle AppHeader. Default true.',
            },
            {
              name: 'children',
              type: 'ReactNode',
              description: 'Page content rendered inside SidebarInset.',
            },
          ]}
        />
      </DocsSection>

      <DocsSection title="What AdminShell includes">
        <ul>
          <li>Branded sidebar header with logo and collapse toggle</li>
          <li>Active route highlighting and nested menu support</li>
          <li>Footer user avatar link to profile</li>
          <li>
            <DocsLink to="/docs/header">AppHeader</DocsLink> with breadcrumbs, search, notifications, account menu
          </li>
          <li>Mobile sidebar sheet via SidebarTrigger</li>
        </ul>
      </DocsSection>

      <DocsCallout tone="mint" title="Docs site example">
        <Text size="sm">
          This documentation app passes custom <DocsInlineCode>navGroups</DocsInlineCode> and{' '}
          <DocsInlineCode>variant="documentation"</DocsInlineCode> to AdminShell. See{' '}
          <DocsInlineCode>apps/docs/src/components/docs-layout.tsx</DocsInlineCode>.
        </Text>
      </DocsCallout>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            {
              label: 'Sidebar Variants',
              path: '/docs/sidebar-variants',
              description: 'Compare all six layout modes.',
            },
            {
              label: 'Header & Navigation',
              path: '/docs/header',
              description: 'Breadcrumbs, command palette, and user menu.',
            },
            {
              label: 'Live demo',
              path: `${DEMO_URL}/dashboards/analytics`,
              description: 'See AdminShell in the demo app.',
              external: true,
            },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

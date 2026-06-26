import { fullNav, KpiStatRow, nestedNav, PageHeader } from '@neo-admin/core';
import { AdminShell } from '@neo-admin/core';
import { Badge, Button, Card, CardContent, Cluster, Stack, Text } from 'neobrutalism-ui-react';
import { Check, Layout, PanelLeft, Sidebar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { SidebarLayoutVariant } from '@neo-admin/core';

const features = [
  'Responsive sidebar with mobile drawer',
  'Command palette (⌘K) global search',
  'Breadcrumb navigation in header',
  'Collapsible groups and nested menus',
];

function LayoutDemoContent({ variant }: { variant: SidebarLayoutVariant }) {
  const navigate = useNavigate();

  return (
    <Stack gap="xl">
      <KpiStatRow
        items={[
          { label: 'Nav Items', value: '40+', tone: 'yellow' },
          { label: 'Layout Variants', value: '6', tone: 'mint' },
          { label: 'Components', value: '50+', tone: 'lavender' },
        ]}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card tone="cream" className="shadow-[4px_4px_0_0_var(--nb-shadow)]">
          <CardContent className="pt-6">
            <Cluster gap="sm" className="mb-4">
              <Layout className="size-5" />
              <Text weight="bold">Active variant</Text>
            </Cluster>
            <Badge tone="primary" className="mb-4 capitalize">
              {variant}
            </Badge>
            <Text size="sm" className="leading-relaxed opacity-80">
              This page renders inside its own AdminShell so you can preview the sidebar behavior in isolation.
              Use the sidebar to navigate — each layout variant changes spacing, grouping, and collapse behavior.
            </Text>
          </CardContent>
        </Card>

        <Card tone="yellow" className="shadow-[4px_4px_0_0_var(--nb-shadow)]">
          <CardContent className="pt-6">
            <Cluster gap="sm" className="mb-4">
              <Sidebar className="size-5" />
              <Text weight="bold">Shell features</Text>
            </Cluster>
            <Stack gap="sm">
              {features.map((f) => (
                <Cluster key={f} gap="sm" align="start">
                  <Check className="mt-0.5 size-4 shrink-0 text-(--nb-success)" />
                  <Text size="sm">{f}</Text>
                </Cluster>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </div>

      <Card tone="mint" className="shadow-[4px_4px_0_0_var(--nb-shadow)]">
        <CardContent className="pt-6">
          <Cluster justify="between" wrap="wrap" className="gap-4">
            <Stack gap="xs">
              <Text weight="bold">Try other layouts</Text>
              <Text size="sm" className="opacity-70">
                Compare classic, sectioned, collapsible, nested, floating, and documentation variants.
              </Text>
            </Stack>
            <Cluster gap="sm" wrap="wrap">
              <Button tone="secondary" size="sm" onClick={() => navigate('/layouts/classic')}>
                <PanelLeft className="mr-1 size-4" />
                Classic
              </Button>
              <Button tone="secondary" size="sm" onClick={() => navigate('/layouts/floating')}>
                Floating
              </Button>
              <Button tone="secondary" size="sm" onClick={() => navigate('/layouts/nested')}>
                Nested
              </Button>
            </Cluster>
          </Cluster>
        </CardContent>
      </Card>
    </Stack>
  );
}

function createLayoutPage(
  variant: SidebarLayoutVariant,
  title: string,
  description: string,
  navGroups = fullNav,
) {
  return function LayoutPage() {
    return (
      <AdminShell variant={variant} navGroups={navGroups}>
        <div id="main-content">
          <PageHeader title={title} badge="Layout" description={description} />
          <LayoutDemoContent variant={variant} />
        </div>
      </AdminShell>
    );
  };
}

export const ClassicLayoutPage = createLayoutPage(
  'classic',
  'Classic Layout',
  'Flat single-level sidebar navigation without section labels.',
);

export const SectionedLayoutPage = createLayoutPage(
  'sectioned',
  'Sectioned Layout',
  'Grouped navigation with section labels — default demo shell.',
);

export const CollapsibleLayoutPage = createLayoutPage(
  'collapsible',
  'Collapsible Layout',
  'Icon-collapsible sidebar that shrinks to icons with tooltips.',
);

export const NestedLayoutPage = createLayoutPage(
  'nested',
  'Nested Layout',
  'Multi-level nested navigation menus with expandable groups.',
  nestedNav,
);

export const FloatingLayoutPage = createLayoutPage(
  'floating',
  'Floating Layout',
  'Floating sidebar with margin, rounded corners, and shadow.',
);

export const DocumentationLayoutPage = createLayoutPage(
  'documentation',
  'Documentation Layout',
  'Wide sidebar optimized for docs navigation and long nav trees.',
);

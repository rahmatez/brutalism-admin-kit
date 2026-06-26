import { DocsPage } from '@/components/docs-layout';
import {
  DEMO_URL,
  DocsCallout,
  DocsInlineCode,
  DocsLink,
  DocsNextLinks,
  DocsSection,
} from '@/components/docs-content';
import { Badge, Card, CardContent, Cluster, Text } from 'neobrutalism-ui-react';

const variants = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'Flat single-level menu without group labels. Best for small apps with few routes.',
    demoPath: '/layouts/classic',
    tone: 'cream' as const,
  },
  {
    id: 'sectioned',
    name: 'Sectioned',
    description: 'Grouped navigation with section labels. Default for the main demo app.',
    demoPath: '/dashboards/analytics',
    tone: 'yellow' as const,
  },
  {
    id: 'collapsible',
    name: 'Collapsible',
    description: 'Icon rail when collapsed with expand toggle below the logo.',
    demoPath: '/layouts/collapsible',
    tone: 'mint' as const,
  },
  {
    id: 'nested',
    name: 'Nested',
    description: 'Multi-level submenus inside collapsible groups for deep IA.',
    demoPath: '/layouts/nested',
    tone: 'lavender' as const,
  },
  {
    id: 'floating',
    name: 'Floating',
    description: 'Detached sidebar with heavy shadow, inset from the viewport edge.',
    demoPath: '/layouts/floating',
    tone: 'pink' as const,
  },
  {
    id: 'documentation',
    name: 'Documentation',
    description: 'Wide, non-collapsible sidebar optimized for docs navigation.',
    demoPath: '/docs/introduction',
    demoExternal: true,
    tone: 'blue' as const,
  },
] as const;

export default function SidebarVariantsPage() {
  return (
    <DocsPage
      title="Sidebar Variants"
      description="Six layout modes for different information architecture and screen contexts."
    >
      <Text>
        Pass <DocsInlineCode>variant</DocsInlineCode> to <DocsLink to="/docs/admin-shell">AdminShell</DocsLink>.
        Each variant changes sidebar structure, collapse behavior, and visual treatment without touching page content.
      </Text>

      <DocsSection title="Variants">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {variants.map((v) => (
            <Card key={v.id} tone={v.tone} shadow="hard">
              <CardContent className="flex flex-col gap-3 p-5">
                <Cluster justify="between" align="center">
                  <Text weight="bold">{v.name}</Text>
                  <Badge tone="secondary" className="font-mono text-[10px]">
                    {v.id}
                  </Badge>
                </Cluster>
                <Text size="sm" className="opacity-80">
                  {v.description}
                </Text>
                <a
                  href={'demoExternal' in v && v.demoExternal ? v.demoPath : `${DEMO_URL}${v.demoPath}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold underline decoration-2 underline-offset-2"
                >
                  {'demoExternal' in v && v.demoExternal ? 'Open docs preview →' : 'Preview in demo →'}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Usage">
        <pre className="docs-code-block overflow-x-auto rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-cream) p-4 font-mono text-sm leading-relaxed shadow-[3px_3px_0_0_var(--nb-shadow)]">
          <code>{`<AdminShell variant="collapsible">{children}</AdminShell>`}</code>
        </pre>
      </DocsSection>

      <DocsCallout tone="yellow" title="Collapsed rail styling">
        <Text size="sm">
          Icon-only mode uses consistent 2.25rem buttons with mint active state. Custom CSS lives in{' '}
          <DocsInlineCode>apps/demo/src/styles.css</DocsInlineCode> under{' '}
          <DocsInlineCode>data-nb-sidebar][data-state=collapsed]</DocsInlineCode>.
        </Text>
      </DocsCallout>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            { label: 'Responsive Behavior', path: '/docs/responsive', description: 'How the sidebar adapts on mobile.' },
            { label: 'Admin Shell', path: '/docs/admin-shell', description: 'Full shell API and props.' },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

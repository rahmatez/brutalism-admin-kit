import { DocsPage } from '@/components/docs-layout';
import {
  DocsCallout,
  DocsInlineCode,
  DocsNextLinks,
  DocsSection,
} from '@/components/docs-content';
import { Badge, Cluster, Text } from 'neobrutalism-ui-react';

const breakpoints = [
  { name: 'Mobile', range: '< 768px', behavior: 'Sidebar hidden; SidebarTrigger in header opens sheet overlay' },
  { name: 'Tablet', range: '768px – 1023px', behavior: 'Collapsible sidebar; content uses full inset width' },
  { name: 'Desktop', range: '≥ 1024px', behavior: 'Full sidebar visible; collapse toggle available on collapsible variants' },
] as const;

export default function ResponsivePage() {
  return (
    <DocsPage
      title="Responsive Behavior"
      description="How AdminShell, dashboards, and split layouts adapt across screen sizes."
    >
      <Text>
        Brutalism Admin Kit uses Tailwind responsive utilities and the{' '}
        <DocsInlineCode>useIsMobile()</DocsInlineCode> hook from <DocsInlineCode>@neo-admin/core</DocsInlineCode> for
        layout decisions inside AdminShell.
      </Text>

      <DocsSection title="Breakpoints">
        <div className="flex flex-col gap-3">
          {breakpoints.map((bp) => (
            <div
              key={bp.name}
              className="rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-paper) p-4 shadow-[2px_2px_0_0_var(--nb-shadow)]"
            >
              <Cluster gap="sm" align="center" className="mb-2">
                <Text weight="bold">{bp.name}</Text>
                <Badge tone="secondary" className="font-mono text-[10px]">
                  {bp.range}
                </Badge>
              </Cluster>
              <Text size="sm" className="opacity-75">
                {bp.behavior}
              </Text>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Dashboard grids">
        <ul>
          <li>
            <DocsInlineCode>KpiStatRow</DocsInlineCode> — 1 column on mobile → 2 on sm → 4 on xl
          </li>
          <li>
            <DocsInlineCode>Split</DocsInlineCode> with <DocsInlineCode>collapse="lg"</DocsInlineCode> stacks panels
            vertically below the lg breakpoint
          </li>
          <li>DataTable horizontal scroll on narrow viewports</li>
          <li>PageHeader actions wrap with <DocsInlineCode>Cluster wrap</DocsInlineCode></li>
        </ul>
      </DocsSection>

      <DocsSection title="Touch targets">
        <Text>
          Sidebar menu buttons, icon buttons, and form controls target at least 2.25rem (36px) hit areas. Collapsed rail
          icons use uniform sizing for consistent tap targets on touch devices.
        </Text>
      </DocsSection>

      <DocsCallout tone="mint" title="Test responsive layouts">
        <Text size="sm">
          Open any dashboard in the demo and resize the browser, or use DevTools device mode. Layout preview routes at{' '}
          <DocsInlineCode>/layouts/*</DocsInlineCode> show each sidebar variant at different widths.
        </Text>
      </DocsCallout>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            { label: 'Sidebar Variants', path: '/docs/sidebar-variants', description: 'Layout modes and collapse behavior.' },
            { label: 'Analytics Dashboard', path: '/docs/dashboards/analytics', description: 'Split layout example.' },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

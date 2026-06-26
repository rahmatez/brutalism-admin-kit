import { DocsPage } from '@/components/docs-layout';
import { DocsLink, DocsSection } from '@/components/docs-content';
import { Badge, Card, CardContent, Cluster, Text } from 'neobrutalism-ui-react';

const planned = [
  {
    title: 'Next.js adapter',
    status: 'Planned',
    description: 'App router layout templates and SSR-safe style imports.',
    tone: 'lavender' as const,
  },
  {
    title: 'npm publish @neo-admin/core',
    status: 'Planned',
    description: 'Install via pnpm add without cloning the monorepo.',
    tone: 'yellow' as const,
  },
  {
    title: 'i18n support',
    status: 'Exploring',
    description: 'Locale files for nav labels, page copy, and date formatting.',
    tone: 'mint' as const,
  },
  {
    title: 'Logistics map integration',
    status: 'Exploring',
    description: 'Replace map placeholder with a real mapping library.',
    tone: 'pink' as const,
  },
  {
    title: 'More dashboard widgets',
    status: 'Planned',
    description: 'Calendar heatmap, kanban board, and real-time activity stream.',
    tone: 'cream' as const,
  },
  {
    title: 'Figma design file',
    status: 'Exploring',
    description: 'Design kit matching neo-brutalist tokens and components.',
    tone: 'blue' as const,
  },
] as const;

export default function RoadmapPage() {
  return (
    <DocsPage title="Roadmap" description="Planned features and areas under exploration.">
      <Text className="opacity-70">
        v0.1.0 is the initial release. Items below are not committed to dates — follow{' '}
        <DocsLink to="/docs/reference/changelog">Changelog</DocsLink> for shipped work.
      </Text>

      <DocsSection title="Planned">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {planned.map((item) => (
            <Card key={item.title} tone={item.tone} shadow="hard">
              <CardContent className="flex flex-col gap-2 p-5">
                <Cluster justify="between" align="start">
                  <Text weight="bold">{item.title}</Text>
                  <Badge tone="secondary" className="shrink-0 text-[10px]">
                    {item.status}
                  </Badge>
                </Cluster>
                <Text size="sm" className="opacity-75">
                  {item.description}
                </Text>
              </CardContent>
            </Card>
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Contributing">
        <Text>
          Open an issue or PR on{' '}
          <a
            href="https://github.com/rahmatez/neo-admin"
            target="_blank"
            rel="noreferrer"
            className="font-bold underline decoration-2 underline-offset-2"
          >
            GitHub
          </a>{' '}
          to suggest features or pick up roadmap items.
        </Text>
      </DocsSection>
    </DocsPage>
  );
}

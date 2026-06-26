import { DocsPage } from '@/components/docs-layout';
import { DocsLink, DocsSection } from '@/components/docs-content';
import { Badge, Cluster, Stack, Text } from 'neobrutalism-ui-react';

const releases = [
  {
    version: '0.1.0',
    date: '2026',
    title: 'Initial release',
    items: [
      'Turborepo monorepo with @neo-admin/core, demo, and docs apps',
      '10 dashboard variants with shared widget system',
      '40+ demo pages — apps, auth, UI showcase, errors',
      '6 sidebar layout variants (classic → documentation)',
      'Command palette, breadcrumbs, and responsive AdminShell',
      'Documentation site with Getting Started guides',
      'Widget card spacing via data-* attributes + plain CSS',
      'Collapsible sidebar icon rail with expand toggle',
    ],
  },
] as const;

export default function ChangelogPage() {
  return (
    <DocsPage title="Changelog" description="Release history for Brutalism Admin Kit.">
      <Stack gap="lg">
        {releases.map((release) => (
          <DocsSection key={release.version} title={`v${release.version} — ${release.title}`}>
            <Cluster gap="sm" className="mb-2">
              <Badge tone="primary">v{release.version}</Badge>
              <Text size="sm" className="opacity-60">
                {release.date}
              </Text>
            </Cluster>
            <ul>
              {release.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </DocsSection>
        ))}
      </Stack>

      <Text className="mt-6 opacity-70">
        Follow development on{' '}
        <a
          href="https://github.com/rahmatez/neo-admin"
          target="_blank"
          rel="noreferrer"
          className="font-bold underline decoration-2 underline-offset-2"
        >
          GitHub
        </a>
        . See <DocsLink to="/docs/reference/roadmap">Roadmap</DocsLink> for planned work.
      </Text>
    </DocsPage>
  );
}

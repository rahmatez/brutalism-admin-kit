import { PageHeader } from '@neo-admin/core';
import { Badge, Cluster, Stack, Text } from 'neobrutalism-ui-react';
import { ShowcaseSection } from '../../components/showcase-section';

export default function BadgesPage() {
  return (
    <Stack gap="xl">
      <PageHeader
        title="Badges"
        badge="Showcase"
        description="Status badges and labels for tags, counts, and states."
      />

      <ShowcaseSection title="Tones" description="All semantic badge tones">
        <Cluster gap="md" wrap="wrap">
          {(['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as const).map((tone) => (
            <Badge key={tone} tone={tone}>
              {tone}
            </Badge>
          ))}
        </Cluster>
      </ShowcaseSection>

      <ShowcaseSection title="Use cases" description="Common badge patterns in admin UIs">
        <Cluster gap="md" wrap="wrap" align="center">
          <Badge tone="success">Active</Badge>
          <Badge tone="warning">Pending</Badge>
          <Badge tone="danger">Overdue</Badge>
          <Badge tone="primary">New</Badge>
          <Badge tone="secondary">Draft</Badge>
        </Cluster>
        <Text size="sm" className="mt-4 opacity-60">
          Pair badges with tables, cards, and list items for quick status scanning.
        </Text>
      </ShowcaseSection>
    </Stack>
  );
}

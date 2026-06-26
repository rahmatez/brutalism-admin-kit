import { PageHeader } from '@neo-admin/core';
import { Button, Cluster, Stack, Tooltip } from 'neobrutalism-ui-react';
import { ShowcaseSection } from '../../components/showcase-section';

export default function TooltipsPage() {
  return (
    <Stack gap="xl">
      <PageHeader
        title="Tooltips"
        badge="Showcase"
        description="Contextual tooltip hints on hover or focus."
      />

      <ShowcaseSection title="Placement" description="Top and bottom tooltip sides">
        <Cluster gap="lg" wrap="wrap">
          <Tooltip content="Top tooltip" side="top">
            <Button tone="secondary">Top</Button>
          </Tooltip>
          <Tooltip content="Bottom tooltip" side="bottom">
            <Button tone="secondary">Bottom</Button>
          </Tooltip>
        </Cluster>
      </ShowcaseSection>

      <ShowcaseSection title="Rich content" description="Longer tooltip text for help hints">
        <Tooltip content="Export your data as CSV or PDF. Large exports may take a few minutes.">
          <Button tone="primary">Hover for export help</Button>
        </Tooltip>
      </ShowcaseSection>
    </Stack>
  );
}

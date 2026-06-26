import { PageHeader } from '@neo-admin/core';
import { Button, Cluster, IconButton, Stack, Text } from 'neobrutalism-ui-react';
import { Download, Plus, Trash2 } from 'lucide-react';
import { ShowcaseSection } from '../../components/showcase-section';

export default function ButtonsPage() {
  return (
    <Stack gap="xl">
      <PageHeader
        title="Buttons"
        badge="Showcase"
        description="Button variants, sizes, press effects, and icon combinations."
      />

      <ShowcaseSection title="Tones" description="Semantic color variants">
        <Cluster gap="md" wrap="wrap">
          <Button>Default</Button>
          <Button tone="primary">Primary</Button>
          <Button tone="secondary">Secondary</Button>
          <Button tone="danger">Danger</Button>
          <Button tone="success">Success</Button>
        </Cluster>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes" description="sm, md, and lg">
        <Cluster gap="md" wrap="wrap" align="center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Cluster>
      </ShowcaseSection>

      <ShowcaseSection title="Press & state" description="Neo-brutalist push/reverse and disabled">
        <Cluster gap="md" wrap="wrap">
          <Button press="push">Push</Button>
          <Button press="reverse">Reverse</Button>
          <Button disabled>Disabled</Button>
        </Cluster>
      </ShowcaseSection>

      <ShowcaseSection title="With icons" description="Leading icons and icon-only buttons">
        <Cluster gap="md" wrap="wrap" align="center">
          <Button tone="primary">
            <Plus className="mr-1.5 size-4" />
            Create
          </Button>
          <Button tone="secondary">
            <Download className="mr-1.5 size-4" />
            Download
          </Button>
          <IconButton tone="danger" aria-label="Delete">
            <Trash2 className="size-4" />
          </IconButton>
        </Cluster>
        <Text size="sm" className="mt-4 opacity-60">
          Use IconButton for square icon-only actions with accessible labels.
        </Text>
      </ShowcaseSection>
    </Stack>
  );
}

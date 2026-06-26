import { PageHeader } from '@neo-admin/core';
import { Progress, Stack } from 'neobrutalism-ui-react';
import { ShowcaseSection } from '../../components/showcase-section';

export default function ProgressPage() {
  return (
    <Stack gap="xl">
      <PageHeader
        title="Progress"
        badge="Showcase"
        description="Progress bars with labels and semantic tones."
      />

      <ShowcaseSection title="Values" description="25% through 100% completion">
        <Stack gap="md">
          <Progress value={25} label="25% complete" />
          <Progress value={50} label="50% complete" tone="primary" />
          <Progress value={75} label="75% complete" tone="warning" />
          <Progress value={100} label="Complete" tone="success" />
        </Stack>
      </ShowcaseSection>

      <ShowcaseSection title="Use cases" description="Upload, quota, and onboarding progress">
        <Stack gap="md">
          <Progress value={62} label="Storage: 6.2 GB of 10 GB" tone="primary" />
          <Progress value={88} label="Monthly quota: 88%" tone="warning" />
          <Progress value={40} label="Onboarding: 2 of 5 steps" />
        </Stack>
      </ShowcaseSection>
    </Stack>
  );
}

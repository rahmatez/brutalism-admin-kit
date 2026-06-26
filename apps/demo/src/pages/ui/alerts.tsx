import { PageHeader } from '@neo-admin/core';
import { Alert, Callout, Stack } from 'neobrutalism-ui-react';
import { ShowcaseSection } from '../../components/showcase-section';

export default function AlertsPage() {
  return (
    <Stack gap="xl">
      <PageHeader
        title="Alerts"
        badge="Showcase"
        description="Inline alerts and callouts for feedback, warnings, and info."
      />

      <ShowcaseSection title="Alerts" description="Destructive alert banner">
        <Alert variant="destructive">
          Payment failed — please update your billing method before the grace period ends.
        </Alert>
      </ShowcaseSection>

      <ShowcaseSection title="Callouts" description="Toned callout blocks with semantic meaning">
        <Stack gap="md">
          <Callout tone="warning">Warning: Your trial expires in 3 days. Upgrade to keep your data.</Callout>
          <Callout tone="success">Success! Your changes have been saved and synced across devices.</Callout>
          <Callout tone="primary">Info: New dashboard widgets are available in the component library.</Callout>
          <Callout tone="blue" layout="inline">
            <strong>Pro tip:</strong> Combine callouts with dashboard sections for contextual insights.
          </Callout>
        </Stack>
      </ShowcaseSection>
    </Stack>
  );
}

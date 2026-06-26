import { PageHeader } from '@neo-admin/core';
import { Button, Cluster, Stack, Text, useToast } from 'neobrutalism-ui-react';
import { ShowcaseSection } from '../../components/showcase-section';

export default function ToastsPage() {
  const { toast } = useToast();

  return (
    <Stack gap="xl">
      <PageHeader
        title="Toasts"
        badge="Showcase"
        description="Toast notifications for success, error, and info feedback."
      />

      <ShowcaseSection title="Variants" description="Click to trigger toast notifications">
        <Cluster gap="sm" wrap="wrap">
          <Button
            onClick={() =>
              toast({ title: 'Success', description: 'Your changes were saved successfully.' })
            }
          >
            Success Toast
          </Button>
          <Button
            tone="danger"
            onClick={() =>
              toast({ title: 'Error', description: 'Something went wrong. Please try again.', tone: 'danger' })
            }
          >
            Error Toast
          </Button>
          <Button
            tone="secondary"
            onClick={() =>
              toast({ title: 'Info', description: 'New update available — refresh to apply.' })
            }
          >
            Info Toast
          </Button>
        </Cluster>
      </ShowcaseSection>

      <ShowcaseSection title="With action" description="Toasts that confirm user actions">
        <Button
          tone="primary"
          onClick={() =>
            toast({
              title: 'Export started',
              description: 'Your report will download when ready.',
            })
          }
        >
          Trigger export toast
        </Button>
        <Text size="sm" className="mt-4 opacity-60">
          Toasts auto-dismiss and stack in the corner. Wrap your app with ToastProvider.
        </Text>
      </ShowcaseSection>
    </Stack>
  );
}

import { DocsCodeBlock, DocsPage } from '@/components/docs-layout';
import {
  DEMO_URL,
  DocsCallout,
  DocsInlineCode,
  DocsNextLinks,
  DocsSection,
} from '@/components/docs-content';
import { Text } from 'neobrutalism-ui-react';

export default function ToastsPatternPage() {
  return (
    <DocsPage
      title="Toasts"
      description="Non-blocking notification feedback for actions, errors, and confirmations."
    >
      <Text>
        Toasts are provided by <DocsInlineCode>ToastProvider</DocsInlineCode>, included in{' '}
        <DocsInlineCode>AppProviders</DocsInlineCode>. Call <DocsInlineCode>useToast()</DocsInlineCode> from any child
        component to show feedback.
      </Text>

      <DocsSection title="Setup">
        <DocsCodeBlock
          code={`import { AppProviders } from '@neo-admin/core';

// AppProviders wraps ToastProvider automatically.
<AppProviders>
  <App />
</AppProviders>`}
        />
      </DocsSection>

      <DocsSection title="Trigger a toast">
        <DocsCodeBlock
          code={`import { useToast } from 'neobrutalism-ui-react';

function SaveButton() {
  const { toast } = useToast();

  return (
    <Button onClick={() => toast({
      title: 'Saved',
      description: 'Your changes were applied.',
    })}>
      Save
    </Button>
  );
}

// Error variant
toast({ title: 'Error', description: 'Something went wrong.', tone: 'danger' });`}
        />
      </DocsSection>

      <DocsSection title="Common use cases">
        <ul>
          <li>Form submit success — auth, settings, CRUD dialogs</li>
          <li>Action confirmation — export started, item deleted</li>
          <li>Error feedback — validation or API failure</li>
          <li>Info notices — background task status</li>
        </ul>
      </DocsSection>

      <DocsCallout tone="mint" title="Live demo">
        <Text size="sm">
          Try interactive examples on the{' '}
          <a href={`${DEMO_URL}/ui/toasts`} target="_blank" rel="noreferrer" className="font-bold underline">
            Toasts showcase
          </a>{' '}
          page.
        </Text>
      </DocsCallout>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            { label: 'Forms', path: '/docs/patterns/forms', description: 'Toast on form submit.' },
            { label: 'CRUD Pattern', path: '/docs/templates/crud', description: 'Save/delete feedback.' },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

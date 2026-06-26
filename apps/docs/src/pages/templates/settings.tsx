import { DocsCodeBlock, DocsPage } from '@/components/docs-layout';
import {
  DEMO_URL,
  DocsCallout,
  DocsInlineCode,
  DocsNextLinks,
  DocsSection,
} from '@/components/docs-content';
import { Text } from 'neobrutalism-ui-react';

export default function SettingsTemplatePage() {
  return (
    <DocsPage
      title="Settings Form"
      description="Multi-tab settings with card sections, react-hook-form, and save feedback."
    >
      <Text>
        The settings page demonstrates a common admin pattern: tabbed sections (Account, Notifications, Security) with
        a single <DocsInlineCode>FormRoot</DocsInlineCode> and shared save/reset actions.
      </Text>

      <DocsSection title="Live preview">
        <a
          href={`${DEMO_URL}/user/settings`}
          target="_blank"
          rel="noreferrer"
          className="font-bold underline decoration-2 underline-offset-2"
        >
          Open Settings in demo →
        </a>
      </DocsSection>

      <DocsSection title="Structure">
        <DocsCodeBlock
          code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
    <TabsTrigger value="security">Security</TabsTrigger>
  </TabsList>

  <FormRoot form={form} onSubmit={() => toast({ title: 'Settings saved' })}>
    <TabsContent value="account">
      <DashboardSection title="Profile">
        <Card>
          <FormField name="name" ... />
          <FormField name="email" ... />
        </Card>
      </DashboardSection>
    </TabsContent>
    <TabsContent value="notifications">
      <FormField name="notifications" render={({ field }) => (
        <FormItem layout="horizontal">
          <FormLabel>Product updates</FormLabel>
          <Switch checked={field.value} onChange={...} />
        </FormItem>
      )} />
    </TabsContent>
    <FormActions>
      <Button type="submit">Save Changes</Button>
      <Button type="button" tone="secondary" onClick={() => form.reset()}>Reset</Button>
    </FormActions>
  </FormRoot>
</Tabs>`}
        />
      </DocsSection>

      <DocsSection title="Key patterns">
        <ul>
          <li>
            <DocsInlineCode>DashboardSection</DocsInlineCode> groups card content with title and description spacing
          </li>
          <li>
            <DocsInlineCode>FormItem layout="horizontal"</DocsInlineCode> for toggle rows (Switch, Checkbox)
          </li>
          <li>
            <DocsInlineCode>Select</DocsInlineCode> with <DocsInlineCode>onValueChange</DocsInlineCode> for timezone and
            language
          </li>
          <li>Security tab uses read-only info + action buttons (no form fields)</li>
        </ul>
      </DocsSection>

      <DocsCallout tone="mint" title="Source file">
        <Text size="sm">
          <DocsInlineCode>apps/demo/src/pages/user/settings.tsx</DocsInlineCode>
        </Text>
      </DocsCallout>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            { label: 'Forms pattern', path: '/docs/patterns/forms', description: 'FormField and validation.' },
            { label: 'Toasts pattern', path: '/docs/patterns/toasts', description: 'Save confirmation feedback.' },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

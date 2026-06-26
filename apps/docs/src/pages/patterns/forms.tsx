import { DocsCodeBlock, DocsPage } from '@/components/docs-layout';
import {
  DEMO_URL,
  DocsCallout,
  DocsInlineCode,
  DocsLink,
  DocsNextLinks,
  DocsSection,
} from '@/components/docs-content';
import { Text } from 'neobrutalism-ui-react';

export default function FormsPatternPage() {
  return (
    <DocsPage
      title="Forms"
      description="Form validation with react-hook-form, zod, and neobrutalism-ui-react form primitives."
    >
      <Text>
        Use <DocsInlineCode>FormRoot</DocsInlineCode>, <DocsInlineCode>FormField</DocsInlineCode>, and related components
        from neobrutalism-ui-react. Pair with <DocsInlineCode>zodResolver</DocsInlineCode> for schema validation.
      </Text>

      <DocsSection title="Component hierarchy">
        <DocsCodeBlock
          code={`<FormRoot form={form} onSubmit={onSubmit}>
  <FormField control={form.control} name="email" render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input type="email" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )} />
  <FormActions>
    <Button type="submit">Submit</Button>
  </FormActions>
</FormRoot>`}
        />
      </DocsSection>

      <DocsSection title="Zod validation">
        <DocsCodeBlock
          code={`import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Min 6 characters'),
});

const form = useForm({
  resolver: zodResolver(schema),
  defaultValues: { email: '', password: '' },
});`}
        />
      </DocsSection>

      <DocsSection title="Select, Switch, Checkbox">
        <DocsCodeBlock
          code={`// Select
<Select value={field.value} onValueChange={field.onChange}>
  <SelectOption value="admin">Admin</SelectOption>
</Select>

// Switch / Checkbox (boolean fields)
<Switch checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />
<Checkbox checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />`}
        />
      </DocsSection>

      <DocsCallout tone="yellow" title="FormLabel requires FormField">
        <Text size="sm">
          <DocsInlineCode>FormLabel</DocsInlineCode> must be inside <DocsInlineCode>FormField</DocsInlineCode>. For
          standalone demo inputs, use <DocsInlineCode>Label</DocsInlineCode> instead — see{' '}
          <a href={`${DEMO_URL}/ui/forms`} target="_blank" rel="noreferrer" className="font-bold underline">
            Forms showcase
          </a>
          .
        </Text>
      </DocsCallout>

      <DocsSection title="Demo references">
        <ul>
          <li>
            <a href={`${DEMO_URL}/ui/forms`} target="_blank" rel="noreferrer" className="font-bold underline">
              UI Forms showcase
            </a>
          </li>
          <li>
            <DocsLink to="/docs/templates/auth">Auth flows</DocsLink> — sign-in with zod
          </li>
          <li>
            <DocsLink to="/docs/templates/settings">Settings form</DocsLink> — tabs + toggles
          </li>
        </ul>
      </DocsSection>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            { label: 'Toasts', path: '/docs/patterns/toasts', description: 'Submit feedback.' },
            { label: 'Auth Flows', path: '/docs/templates/auth', description: 'AuthLayout + forms.' },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

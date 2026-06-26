import { DocsCodeBlock, DocsPage } from '@/components/docs-layout';
import {
  DEMO_URL,
  DocsCallout,
  DocsInlineCode,
  DocsLink,
  DocsNextLinks,
  DocsSection,
} from '@/components/docs-content';
import { Stack, Text } from 'neobrutalism-ui-react';

const routes = [
  { path: '/auth/sign-in', label: 'Sign In', description: 'Email + password with zod validation' },
  { path: '/auth/sign-up', label: 'Sign Up', description: 'Create account flow' },
  { path: '/auth/reset-password', label: 'Reset Password', description: 'Email reset link request' },
  { path: '/auth/two-step', label: 'Two-Step', description: 'OTP verification with InputOTP' },
] as const;

export default function AuthTemplatePage() {
  return (
    <DocsPage
      title="Auth Flows"
      description="Centered card authentication pages with form validation and toast feedback."
    >
      <Text>
        Auth pages use <DocsInlineCode>AuthLayout</DocsInlineCode> from <DocsInlineCode>@neo-admin/core</DocsInlineCode>{' '}
        — a centered card on a branded background, separate from <DocsLink to="/docs/admin-shell">AdminShell</DocsLink>.
      </Text>

      <DocsSection title="Demo routes">
        <div className="flex flex-col gap-3">
          {routes.map((r) => (
            <div
              key={r.path}
              className="flex flex-wrap items-center justify-between gap-3 rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-paper) p-4 shadow-[2px_2px_0_0_var(--nb-shadow)]"
            >
              <Stack gap="xs">
                <Text weight="bold">{r.label}</Text>
                <Text size="sm" className="opacity-70">
                  {r.description}
                </Text>
              </Stack>
              <a
                href={`${DEMO_URL}${r.path}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold underline decoration-2 underline-offset-2"
              >
                Preview →
              </a>
            </div>
          ))}
        </div>
      </DocsSection>

      <DocsSection title="Sign-in example">
        <DocsCodeBlock
          code={`import { AuthLayout } from '@neo-admin/core';
import { FormRoot, FormField, FormItem, FormLabel, FormControl, FormMessage, Input, Button } from 'neobrutalism-ui-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function SignInPage() {
  const form = useForm({ resolver: zodResolver(schema) });

  return (
    <AuthLayout title="Sign In" description="Welcome back">
      <FormRoot form={form} onSubmit={handleSubmit}>
        <FormField name="email" control={form.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl><Input type="email" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
        {/* password field */}
        <Button type="submit" fullWidth>Sign In</Button>
      </FormRoot>
    </AuthLayout>
  );
}`}
        />
      </DocsSection>

      <DocsCallout tone="yellow" title="FormLabel requires FormField">
        <Text size="sm">
          Always wrap <DocsInlineCode>FormLabel</DocsInlineCode> inside <DocsInlineCode>FormField</DocsInlineCode>. For
          standalone labels outside react-hook-form, use <DocsInlineCode>Label</DocsInlineCode> instead.
        </Text>
      </DocsCallout>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            { label: 'Forms pattern', path: '/docs/patterns/forms', description: 'FormRoot and validation.' },
            { label: 'Toasts pattern', path: '/docs/patterns/toasts', description: 'Submit feedback.' },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

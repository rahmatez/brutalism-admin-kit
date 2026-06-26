import { DocsPage } from '@/components/docs-layout';
import { DocsInlineCode, DocsLink, DocsSection } from '@/components/docs-content';
import { Stack, Text } from 'neobrutalism-ui-react';

const faqs = [
  {
    question: 'Is Brutalism Admin Kit free to use?',
    answer: 'Yes. The project is open-source under the MIT license for personal and commercial use.',
  },
  {
    question: 'How is it different from neobrutalism-ui-react?',
    answer:
      'neobrutalism-ui-react provides primitives (Button, Card, DataTable, etc.). Brutalism Admin Kit adds complete admin layouts, dashboards, navigation, and page templates on top of that library.',
  },
  {
    question: 'Why do my styles look broken after install?',
    answer:
      'Tailwind must scan both neobrutalism-ui-react and @neo-admin/core dist folders. Add both @source lines in your global CSS and import neobrutalism-ui-react/styles.css. See the Installation page for the full styles.css example.',
  },
  {
    question: 'Can I use pnpm, npm, or bun?',
    answer:
      'The monorepo is configured for pnpm workspaces. npm and bun may work for local development, but pnpm is the tested package manager.',
  },
  {
    question: 'Does it support Next.js or SSR?',
    answer:
      'The demo and docs use Vite SPAs. For Next.js, import styles in global CSS and render AdminShell in a client component. Server components can wrap client layout boundaries as usual.',
  },
  {
    question: 'How do I customize the sidebar navigation?',
    answer:
      'Pass a navGroups prop to AdminShell. Each group has an id, label, and items with path and icon name. See Quick Start for an example.',
  },
  {
    question: 'Where are the dashboard widgets defined?',
    answer:
      'Reusable widgets (KpiStatRow, chart cards, table widgets) live in packages/core/src/widgets. Dashboard pages in apps/demo compose them with mock data.',
  },
] as const;

export default function FaqPage() {
  return (
    <DocsPage title="FAQ" description="Common questions about setup, licensing, and architecture.">
      <Text className="opacity-70">
        New to the kit? Start with <DocsLink to="/docs/introduction">Introduction</DocsLink> and{' '}
        <DocsLink to="/docs/installation">Installation</DocsLink>.
      </Text>

      <Stack gap="lg">
        {faqs.map((item) => (
          <DocsSection key={item.question} title={item.question}>
            <Text>{item.answer}</Text>
          </DocsSection>
        ))}
      </Stack>

      <DocsSection title="Still stuck?">
        <Text>
          Compare your setup with <DocsInlineCode>apps/demo</DocsInlineCode> — especially{' '}
          <DocsInlineCode>src/App.tsx</DocsInlineCode>, <DocsInlineCode>src/styles.css</DocsInlineCode>, and{' '}
          <DocsInlineCode>src/layouts/shell-layout.tsx</DocsInlineCode>. Open an issue on GitHub if something
          looks like a bug.
        </Text>
      </DocsSection>
    </DocsPage>
  );
}

import { APP_AUTHOR, APP_GITHUB_URL } from '@neo-admin/core';
import { DocsPage } from '@/components/docs-layout';
import {
  DocsCallout,
  DocsInlineCode,
  DocsLink,
  DocsNextLinks,
  DocsSection,
} from '@/components/docs-content';
import { Badge, Card, CardContent, Cluster, Stack, Text } from 'neobrutalism-ui-react';
import {
  LayoutDashboard,
  Layers,
  Palette,
  Terminal,
} from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: '10 dashboards',
    description: 'Analytics, e-commerce, CRM, SaaS, finance, logistics, AI, and more.',
    tone: 'mint' as const,
  },
  {
    icon: Layers,
    title: '40+ pages',
    description: 'Apps, auth, UI showcase, user settings, and error states.',
    tone: 'lavender' as const,
  },
  {
    icon: Terminal,
    title: '6 layouts',
    description: 'Classic, sectioned, collapsible, nested, floating, and documentation.',
    tone: 'yellow' as const,
  },
  {
    icon: Palette,
    title: 'Theme tokens',
    description: 'Neo-brutalist colors, shadows, and radius via CSS variables.',
    tone: 'pink' as const,
  },
] as const;

export default function IntroductionPage() {
  return (
    <DocsPage
      title="Introduction"
      description="Brutalism Admin Kit — a production-ready neo-brutalist admin dashboard template built on neobrutalism-ui-react."
    >
      <Text>
        Brutalism Admin Kit is an open-source admin template inspired by TailAdmin. Instead of generic shadcn-style
        components, every screen uses the bold borders, hard shadows, and saturated palette from{' '}
        <a
          href="https://www.npmjs.com/package/neobrutalism-ui-react"
          className="font-bold underline decoration-2 underline-offset-2"
          target="_blank"
          rel="noreferrer"
        >
          neobrutalism-ui-react
        </a>
        .
      </Text>

      <DocsCallout tone="cream" title="Monorepo structure">
        <Stack gap="xs">
          <Text size="sm">
            <DocsInlineCode>packages/core</DocsInlineCode> — shared layouts, widgets, header, navigation
          </Text>
          <Text size="sm">
            <DocsInlineCode>apps/demo</DocsInlineCode> — full admin app with every page and dashboard
          </Text>
          <Text size="sm">
            <DocsInlineCode>apps/docs</DocsInlineCode> — this documentation site
          </Text>
        </Stack>
      </DocsCallout>

      <DocsCallout tone="lavender" title="Created by">
        <Text size="sm">
          Brutalism Admin Kit is built by{' '}
          <a
            href={APP_GITHUB_URL}
            className="font-bold underline decoration-2 underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            {APP_AUTHOR}
          </a>
          .
        </Text>
      </DocsCallout>

      <DocsSection title="What you get">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} tone={item.tone} shadow="hard">
                <CardContent className="flex flex-col gap-3 p-5">
                  <div className="flex size-9 items-center justify-center rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-background) shadow-[2px_2px_0_0_var(--nb-shadow)]">
                    <Icon className="size-4" aria-hidden />
                  </div>
                  <Text weight="bold">{item.title}</Text>
                  <Text size="sm" className="opacity-75">
                    {item.description}
                  </Text>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </DocsSection>

      <DocsSection title="Core building blocks" description="Import from @neo-admin/core.">
        <ul>
          <li>
            <DocsInlineCode>AdminShell</DocsInlineCode> — sidebar, header, command palette, responsive layout
          </li>
          <li>
            <DocsInlineCode>AppProviders</DocsInlineCode> — NeoBrutalismProvider, toasts, command palette context
          </li>
          <li>
            <DocsInlineCode>PageHeader</DocsInlineCode> — page title, badge, description, and actions
          </li>
          <li>
            <DocsInlineCode>KpiStatRow</DocsInlineCode>, chart cards, tables — dashboard widgets with consistent spacing
          </li>
          <li>
            <DocsInlineCode>AuthLayout</DocsInlineCode> / <DocsInlineCode>BlankLayout</DocsInlineCode> — non-shell pages
          </li>
        </ul>
      </DocsSection>

      <DocsSection title="Tech stack">
        <Cluster gap="sm" wrap="wrap">
          {['React 19', 'Vite 7', 'Tailwind CSS v4', 'React Router 7', 'Recharts', 'react-hook-form'].map(
            (item) => (
              <Badge key={item} tone="secondary">
                {item}
              </Badge>
            ),
          )}
        </Cluster>
        <Text className="mt-4 opacity-70">
          Primitive components (Button, Card, DataTable, Dialog, etc.) come from{' '}
          <DocsInlineCode>neobrutalism-ui-react</DocsInlineCode>. See the{' '}
          <a
            href="https://neo-brutalism-react-docs.vercel.app/"
            className="font-bold underline decoration-2 underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            component library docs
          </a>{' '}
          for API reference.
        </Text>
      </DocsSection>

      <DocsSection title="Get started">
        <DocsNextLinks
          items={[
            {
              label: 'Installation',
              path: '/docs/installation',
              description: 'Clone the monorepo or add packages to your app.',
            },
            {
              label: 'Quick Start',
              path: '/docs/quick-start',
              description: 'Bootstrap AppProviders and AdminShell in minutes.',
            },
            {
              label: 'Live Demo',
              path: import.meta.env.VITE_DEMO_URL ?? 'http://localhost:5174',
              description: 'Explore dashboards and pages in the demo app.',
              external: true,
            },
          ]}
        />
        <Text className="mt-4">
          Already installed? Jump to <DocsLink to="/docs/admin-shell">Admin Shell</DocsLink> or browse{' '}
          <DocsLink to="/docs/patterns/command-palette">patterns</DocsLink>.
        </Text>
      </DocsSection>
    </DocsPage>
  );
}

import { AdminShell } from '@neo-admin/core';
import { docsNavGroups } from '@/docs/admin.navigation';
import { BrutalCodeTerminal } from '@/components/brutal-code-terminal';
import { flattenNav } from '@neo-admin/core';
import type { ReactNode } from 'react';
import { Stack, Text } from 'neobrutalism-ui-react';

const docsNavForShell = docsNavGroups.map((g) => ({
  id: g.label.toLowerCase().replace(/\s+/g, '-'),
  label: g.label,
  items: g.items.map((item) => ({
    id: item.path,
    label: item.label,
    path: item.path,
    icon: 'BookOpen',
  })),
}));

const docsCommandItems = flattenNav(
  docsNavGroups.map((g) => ({
    id: g.label.toLowerCase().replace(/\s+/g, '-'),
    label: g.label,
    items: g.items.map((item) => ({
      id: item.path,
      label: item.label,
      path: item.path,
    })),
  })),
);

export function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <AdminShell
      variant="documentation"
      navGroups={docsNavForShell}
      commandPaletteItems={docsCommandItems}
      searchPlaceholder="Search docs, components, recipes..."
      chromeLinks={{
        brand: '/',
        profile: '/docs/faq',
        settings: '/docs/installation',
        signOut: '/',
      }}
      breadcrumbOptions={{
        home: { label: 'Docs', path: '/' },
        navGroups: docsNavForShell,
      }}
    >
      <div id="main-content">{children}</div>
    </AdminShell>
  );
}

export function DocsPage({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <article className="docs-article max-w-3xl">
      <header className="docs-article-header border-b-2 border-(--nb-border) pb-6">
        <Stack gap="sm">
          <h1 className="font-heading text-2xl font-black uppercase leading-snug tracking-tight md:text-3xl">
            {title}
          </h1>
          {description ? (
            <Text className="max-w-2xl text-base leading-relaxed opacity-70">{description}</Text>
          ) : null}
        </Stack>
      </header>
      <Stack gap="lg" className="docs-article-body pt-6">
        {children}
      </Stack>
    </article>
  );
}

export function DocsCodeBlock({
  code,
  title = 'CODE',
  language = 'tsx',
}: {
  code: string;
  title?: string;
  language?: 'bash' | 'tsx' | 'text';
}) {
  return <BrutalCodeTerminal code={code} title={title} language={language} />;
}

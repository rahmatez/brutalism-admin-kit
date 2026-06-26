import { DocsCodeBlock, DocsPage } from '@/components/docs-layout';
import {
  DocsCallout,
  DocsInlineCode,
  DocsLink,
  DocsNextLinks,
  DocsSection,
} from '@/components/docs-content';
import { Text } from 'neobrutalism-ui-react';

export default function CommandPalettePage() {
  return (
    <DocsPage
      title="Command Palette"
      description="Global keyboard search for routes, pages, and actions — ⌘K / Ctrl+K."
    >
      <Text>
        The command palette is built into <DocsLink to="/docs/admin-shell">AdminShell</DocsLink> via{' '}
        <DocsInlineCode>AppCommandPalette</DocsInlineCode>. <DocsInlineCode>AppProviders</DocsInlineCode> includes{' '}
        <DocsInlineCode>CommandPaletteProvider</DocsInlineCode> for open/close state.
      </Text>

      <DocsSection title="How it works">
        <ul>
          <li>Header search button or ⌘K opens the palette</li>
          <li>Items come from <DocsInlineCode>commandPaletteItems</DocsInlineCode> on AdminShell</li>
          <li>Default items are flattened from <DocsInlineCode>fullNav</DocsInlineCode> in @neo-admin/core</li>
          <li>Selecting an item navigates via React Router</li>
        </ul>
      </DocsSection>

      <DocsSection title="Custom items">
        <DocsCodeBlock
          code={`import { flattenNav } from '@neo-admin/core';

const commandPaletteItems = flattenNav(myNavGroups).map((item) => ({
  id: item.id,
  label: item.label,
  path: item.path,
  group: item.group,
  keywords: ['dashboard', 'analytics'],
}));

<AdminShell commandPaletteItems={commandPaletteItems} searchPlaceholder="Search pages...">
  {children}
</AdminShell>`}
        />
      </DocsSection>

      <DocsSection title="Hook access">
        <DocsCodeBlock
          code={`import { useCommandPalette } from '@neo-admin/core';

function MyComponent() {
  const { open, setOpen } = useCommandPalette();
  return <Button onClick={() => setOpen(true)}>Open search</Button>;
}`}
        />
      </DocsSection>

      <DocsCallout tone="yellow" title="Styling">
        <Text size="sm">
          Command palette styles are customized in <DocsInlineCode>apps/docs/src/styles.css</DocsInlineCode> and{' '}
          <DocsInlineCode>apps/demo/src/styles.css</DocsInlineCode> under <DocsInlineCode>.app-command-palette</DocsInlineCode>.
        </Text>
      </DocsCallout>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            { label: 'Header & Navigation', path: '/docs/header', description: 'Search trigger in AppHeader.' },
            { label: 'Admin Shell', path: '/docs/admin-shell', description: 'commandPaletteItems prop.' },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

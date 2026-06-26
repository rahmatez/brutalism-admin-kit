import { DocsCodeBlock, DocsPage } from '@/components/docs-layout';
import {
  DocsCallout,
  DocsInlineCode,
  DocsLink,
  DocsNextLinks,
  DocsSection,
} from '@/components/docs-content';
import { Text } from 'neobrutalism-ui-react';

export default function HeaderPage() {
  return (
    <DocsPage
      title="Header & Navigation"
      description="AppHeader anatomy — breadcrumbs, command palette, notifications, and account menu."
    >
      <Text>
        <DocsInlineCode>AppHeader</DocsInlineCode> is rendered automatically inside{' '}
        <DocsLink to="/docs/admin-shell">AdminShell</DocsLink>. It stays sticky at the top of{' '}
        <DocsInlineCode>SidebarInset</DocsInlineCode> and adapts between mobile and desktop layouts.
      </Text>

      <DocsSection title="Features">
        <ul>
          <li>
            <strong>Breadcrumbs</strong> — auto-generated from <DocsInlineCode>routeMeta</DocsInlineCode> and current
            pathname via <DocsInlineCode>getNavBreadcrumbs()</DocsInlineCode>
          </li>
          <li>
            <strong>Command palette</strong> — search trigger opens{' '}
            <DocsInlineCode>AppCommandPalette</DocsInlineCode> (⌘K / Ctrl+K)
          </li>
          <li>
            <strong>Notifications</strong> — bell icon with unread badge (demo data)
          </li>
          <li>
            <strong>User menu</strong> — avatar dropdown with profile and settings links
          </li>
          <li>
            <strong>Mobile</strong> — <DocsInlineCode>SidebarTrigger</DocsInlineCode> toggles the sidebar sheet
          </li>
        </ul>
      </DocsSection>

      <DocsSection title="Command palette integration">
        <DocsCodeBlock
          code={`import { useCommandPalette } from '@neo-admin/core';

const { open, setOpen } = useCommandPalette();

// AppHeader wires this internally.
// Customize items via AdminShell commandPaletteItems prop.`}
        />
        <Text className="opacity-70">
          See <DocsLink to="/docs/patterns/command-palette">Command Palette</DocsLink> for full setup.
        </Text>
      </DocsSection>

      <DocsSection title="Page titles">
        <DocsCodeBlock
          code={`import { getPageTitle } from '@neo-admin/core';

const title = getPageTitle('/dashboards/analytics');
// → "Analytics"`}
        />
        <Text className="opacity-70">
          Route metadata lives in <DocsInlineCode>packages/core/src/navigation/nav.config.ts</DocsInlineCode>.
        </Text>
      </DocsSection>

      <DocsCallout tone="cream" title="Skip link">
        <Text size="sm">
          The demo app includes a skip-to-content link targeting <DocsInlineCode>#main-content</DocsInlineCode>.
          Wrap your <DocsInlineCode>Outlet</DocsInlineCode> with this id for accessibility.
        </Text>
      </DocsCallout>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            { label: 'Command Palette', path: '/docs/patterns/command-palette', description: 'Keyboard search pattern.' },
            { label: 'Responsive Behavior', path: '/docs/responsive', description: 'Mobile header behavior.' },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

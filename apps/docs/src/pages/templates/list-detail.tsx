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

export default function ListDetailPage() {
  return (
    <DocsPage
      title="List + Detail Split"
      description="Master-detail layouts with resizable panels for inbox, chat, and file browsers."
    >
      <Text>
        Split-pane layouts let users browse a list on the left and read or edit detail content on the right. Panel widths
        are adjustable with <DocsInlineCode>ResizablePanelGroup</DocsInlineCode> from neobrutalism-ui-react.
      </Text>

      <DocsSection title="Demo pages">
        <ul>
          <li>
            <a href={`${DEMO_URL}/apps/mail`} target="_blank" rel="noreferrer" className="font-bold underline">
              Mail
            </a>{' '}
            — folder sidebar, message list, reading pane
          </li>
          <li>
            <a href={`${DEMO_URL}/apps/chat`} target="_blank" rel="noreferrer" className="font-bold underline">
              Chat
            </a>{' '}
            — thread list + conversation view
          </li>
          <li>
            <a href={`${DEMO_URL}/apps/files`} target="_blank" rel="noreferrer" className="font-bold underline">
              Files
            </a>{' '}
            — folder tree + file grid
          </li>
        </ul>
      </DocsSection>

      <DocsSection title="Resizable panels">
        <DocsCodeBlock
          code={`import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from 'neobrutalism-ui-react';

<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={30} minSize={20}>
    <MessageList items={messages} onSelect={setActive} />
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={70}>
    <MessageDetail message={active} />
  </ResizablePanel>
</ResizablePanelGroup>`}
        />
      </DocsSection>

      <DocsCallout tone="cream" title="Mobile behavior">
        <Text size="sm">
          On narrow screens, hide the detail panel until a list item is selected. Use{' '}
          <DocsLink to="/docs/responsive">responsive patterns</DocsLink> or route-based detail views for mobile.
        </Text>
      </DocsCallout>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            { label: 'Responsive Behavior', path: '/docs/responsive', description: 'Adapt split layouts on mobile.' },
            { label: 'CRUD Pattern', path: '/docs/templates/crud', description: 'Table-based list views.' },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

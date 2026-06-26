import { DocsCodeBlock, DocsPage } from '@/components/docs-layout';
import {
  DocsCallout,
  DocsInlineCode,
  DocsLink,
  DocsNextLinks,
  DocsSection,
} from '@/components/docs-content';
import { Text } from 'neobrutalism-ui-react';

export default function ThemingPage() {
  return (
    <DocsPage
      title="Theming"
      description="Customize brand colors, radius, borders, and shadows via NeoBrutalismProvider or CSS variables."
    >
      <Text>
        <DocsInlineCode>AppProviders</DocsInlineCode> wraps your app with{' '}
        <DocsInlineCode>NeoBrutalismProvider</DocsInlineCode>. Override the <DocsInlineCode>theme</DocsInlineCode> prop
        for runtime token changes, or set CSS variables in your global stylesheet for static customization.
      </Text>

      <DocsSection title="Provider theme prop">
        <DocsCodeBlock
          code={`import { NeoBrutalismProvider } from 'neobrutalism-ui-react';

<NeoBrutalismProvider
  theme={{
    primary: '#ff90e8',
    radius: '0px',
    borderWidth: '3px',
  }}
>
  <App />
</NeoBrutalismProvider>`}
        />
      </DocsSection>

      <DocsSection title="CSS variable overrides">
        <DocsCodeBlock
          code={`@layer base {
  :root {
    --nb-background: #faf3df;
    --nb-paper: #fffaf0;
    --nb-cream: #fff5e0;
    --nb-primary: #ff90e8;
    --nb-radius: 0.25rem;
    --nb-border-width: 2px;
  }
}`}
        />
        <Text className="opacity-70">
          See <DocsLink to="/docs/customization/css-variables">CSS Variables</DocsLink> for the full token list.
        </Text>
      </DocsSection>

      <DocsSection title="Per-component tones">
        <Text>
          Most components accept a <DocsInlineCode>tone</DocsInlineCode> prop:{' '}
          <DocsInlineCode>primary</DocsInlineCode>, <DocsInlineCode>secondary</DocsInlineCode>,{' '}
          <DocsInlineCode>yellow</DocsInlineCode>, <DocsInlineCode>mint</DocsInlineCode>,{' '}
          <DocsInlineCode>lavender</DocsInlineCode>, <DocsInlineCode>pink</DocsInlineCode>,{' '}
          <DocsInlineCode>cream</DocsInlineCode>, etc. Dashboard widgets use consistent tone rotation across KPI cards.
        </Text>
      </DocsSection>

      <DocsCallout tone="mint" title="Docs vs demo">
        <Text size="sm">
          The docs site uses a warm cream background (<DocsInlineCode>#faf3df</DocsInlineCode>) defined in{' '}
          <DocsInlineCode>apps/docs/src/styles.css</DocsInlineCode>. The demo app uses the default library palette.
        </Text>
      </DocsCallout>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            { label: 'CSS Variables', path: '/docs/customization/css-variables', description: 'Full token reference.' },
            { label: 'Installation', path: '/docs/installation', description: 'CSS setup with @source.' },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

import { DocsPage } from '@/components/docs-layout';
import {
  DocsCallout,
  DocsInlineCode,
  DocsNextLinks,
  DocsPackageTable,
  DocsSection,
} from '@/components/docs-content';
import { Text } from 'neobrutalism-ui-react';

const tokenGroups = [
  {
    title: 'Surfaces',
    tokens: [
      { name: '--nb-background', note: 'Page background' },
      { name: '--nb-foreground', note: 'Default text color' },
      { name: '--nb-paper', note: 'Card / panel surface' },
      { name: '--nb-cream', note: 'Muted surface, code blocks' },
      { name: '--nb-surface', note: 'Input and header surfaces' },
    ],
  },
  {
    title: 'Brand colors',
    tokens: [
      { name: '--nb-primary', note: 'Primary accent (pink)' },
      { name: '--nb-secondary', note: 'Secondary accent (lavender)' },
      { name: '--nb-yellow', note: 'Highlight / hover' },
      { name: '--nb-mint', note: 'Success / active nav' },
      { name: '--nb-lavender', note: 'Card tone' },
      { name: '--nb-pink', note: 'Card tone' },
      { name: '--nb-danger', note: 'Error / destructive' },
    ],
  },
  {
    title: 'Structure',
    tokens: [
      { name: '--nb-border', note: 'Border color (black)' },
      { name: '--nb-shadow', note: 'Hard shadow offset color' },
      { name: '--nb-radius', note: 'Border radius' },
      { name: '--nb-border-width', note: 'Default border width' },
    ],
  },
  {
    title: 'Charts',
    tokens: [
      { name: '--nb-chart-1', note: 'Chart series 1' },
      { name: '--nb-chart-2', note: 'Chart series 2' },
      { name: '--nb-chart-3', note: 'Chart series 3' },
      { name: '--nb-chart-4', note: 'Chart series 4' },
      { name: '--nb-chart-5', note: 'Chart series 5' },
    ],
  },
  {
    title: 'Typography',
    tokens: [
      { name: '--nb-font-sans', note: 'Body font stack' },
      { name: '--nb-font-heading', note: 'Heading font stack' },
      { name: '--nb-font-mono', note: 'Monospace font stack' },
    ],
  },
] as const;

export default function CssVariablesPage() {
  return (
    <DocsPage
      title="CSS Variables"
      description="Design token reference for neobrutalism-ui-react and Brutalism Admin Kit."
    >
      <Text>
        All visual tokens are exposed as CSS custom properties on <DocsInlineCode>:root</DocsInlineCode>. Override them in
        your global CSS or pass a theme object to <DocsInlineCode>NeoBrutalismProvider</DocsInlineCode>.
      </Text>

      {tokenGroups.map((group) => (
        <DocsSection key={group.title} title={group.title}>
          <DocsPackageTable
            rows={group.tokens.map((t) => ({
              name: t.name,
              version: 'color / size',
              note: t.note,
            }))}
          />
        </DocsSection>
      ))}

      <DocsSection title="Tailwind integration">
        <Text>
          Use arbitrary value syntax to reference tokens in Tailwind classes:{' '}
          <DocsInlineCode>bg-(--nb-background)</DocsInlineCode>,{' '}
          <DocsInlineCode>border-(--nb-border)</DocsInlineCode>,{' '}
          <DocsInlineCode>shadow-[3px_3px_0_0_var(--nb-shadow)]</DocsInlineCode>.
        </Text>
      </DocsSection>

      <DocsCallout tone="yellow" title="Full source">
        <Text size="sm">
          Complete token definitions live in{' '}
          <DocsInlineCode>neobrutalism-ui-react/styles.css</DocsInlineCode>. Widget-specific spacing uses{' '}
          <DocsInlineCode>data-widget-*</DocsInlineCode> attributes — see demo and docs <DocsInlineCode>styles.css</DocsInlineCode>.
        </Text>
      </DocsCallout>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            { label: 'Theming', path: '/docs/customization/theming', description: 'Provider theme overrides.' },
            { label: 'Charts', path: '/docs/patterns/charts', description: 'Chart color usage.' },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

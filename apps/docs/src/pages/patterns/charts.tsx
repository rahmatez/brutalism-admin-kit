import { DocsCodeBlock, DocsPage } from '@/components/docs-layout';
import {
  DEMO_URL,
  DocsCallout,
  DocsInlineCode,
  DocsNextLinks,
  DocsSection,
} from '@/components/docs-content';
import { Text } from 'neobrutalism-ui-react';

export default function ChartsPatternPage() {
  return (
    <DocsPage
      title="Charts"
      description="Recharts integration with neo-brutalist theming via ChartContainer and widget cards."
    >
      <Text>
        Charts use <DocsInlineCode>ChartContainer</DocsInlineCode> from neobrutalism-ui-react with{' '}
        <DocsInlineCode>--nb-chart-*</DocsInlineCode> CSS variables. @neo-admin/core provides ready-made chart widget
        cards with consistent header spacing and 280px chart height.
      </Text>

      <DocsSection title="Widget chart cards">
        <ul>
          <li><DocsInlineCode>TrafficChart</DocsInlineCode> — area chart for analytics traffic</li>
          <li><DocsInlineCode>LineChartCard</DocsInlineCode> — generic line chart with title</li>
          <li><DocsInlineCode>BarChartCard</DocsInlineCode> — bar chart (CRM pipeline, AI usage)</li>
          <li><DocsInlineCode>PieChartCard</DocsInlineCode> — pie/donut (marketing channels, finance expenses)</li>
          <li><DocsInlineCode>FunnelChartCard</DocsInlineCode> — funnel visualization for marketing</li>
        </ul>
      </DocsSection>

      <DocsSection title="Usage">
        <DocsCodeBlock
          code={`import { LineChartCard, analyticsData } from '@neo-admin/core';

<LineChartCard
  title="Revenue trend"
  description="Monthly revenue"
  data={revenueTrend}
  dataKey="revenue"
  xKey="month"
  tone="mint"
/>`}
        />
      </DocsSection>

      <DocsSection title="Custom chart">
        <DocsCodeBlock
          code={`import { ChartContainer, ChartTooltip, ChartTooltipContent } from 'neobrutalism-ui-react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const config = {
  value: { label: 'Count', color: 'var(--nb-chart-1)' },
};

<ChartContainer config={config} className="h-[280px] w-full">
  <BarChart data={data}>
    <XAxis dataKey="stage" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="count" fill="var(--nb-chart-1)" radius={4} />
  </BarChart>
</ChartContainer>`}
        />
      </DocsSection>

      <DocsSection title="Spacing & sizing">
        <Text>
          Widget cards use <DocsInlineCode>data-widget-chart-card</DocsInlineCode> attributes and plain CSS in{' '}
          <DocsInlineCode>styles.css</DocsInlineCode> for fixed 280px chart height. Chart cards use{' '}
          <DocsInlineCode>self-start</DocsInlineCode> in Split layouts to prevent stretch.
        </Text>
      </DocsSection>

      <DocsCallout tone="yellow" title="Preview">
        <Text size="sm">
          Open{' '}
          <a href={`${DEMO_URL}/apps/charts`} target="_blank" rel="noreferrer" className="font-bold underline">
            Charts showcase
          </a>{' '}
          or any dashboard in the demo app.
        </Text>
      </DocsCallout>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            { label: 'Analytics Dashboard', path: '/docs/dashboards/analytics', description: 'TrafficChart example.' },
            { label: 'CSS Variables', path: '/docs/customization/css-variables', description: 'Chart color tokens.' },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

import { DocsCodeBlock, DocsPage } from '@/components/docs-layout';
import {
  DEMO_URL,
  DocsCallout,
  DocsInlineCode,
  DocsLink,
  DocsNextLinks,
  DocsSection,
} from '@/components/docs-content';
import { Badge, Cluster, Text } from 'neobrutalism-ui-react';

interface DashboardInfo {
  title: string;
  description: string;
  badge: string;
  widgets: readonly string[];
  patterns: readonly string[];
  imports: string;
}

const dashboardInfo: Record<string, DashboardInfo> = {
  analytics: {
    title: 'Analytics',
    description: 'Traffic, engagement, and growth metrics with a traffic chart and top pages table.',
    badge: 'Live',
    widgets: ['KpiStatRow', 'DashboardToolbar', 'TrafficChart', 'TopPagesTable', 'Callout'],
    patterns: ['useDashboardPage', 'useSimulatedLoading', 'Split ratio 2:1'],
    imports: `import {
  analyticsData, KpiStatRow, PageHeader, topPages,
  TopPagesTable, TrafficChart, useDashboardPage, useSimulatedLoading,
} from '@neo-admin/core';`,
  },
  ecommerce: {
    title: 'E-Commerce',
    description: 'Revenue KPIs, order trends, recent orders, and product inventory.',
    badge: 'Store',
    widgets: ['KpiStatRow', 'LineChartCard', 'RecentOrdersTable', 'ProductsTable'],
    patterns: ['Revenue trend from analyticsData', 'Split 1:1 chart + table'],
    imports: `import {
  KpiStatRow, LineChartCard, RecentOrdersTable, ProductsTable,
  orders, products, useDashboardPage,
} from '@neo-admin/core';`,
  },
  marketing: {
    title: 'Marketing',
    description: 'Campaign performance, funnel visualization, and channel breakdown.',
    badge: 'Campaigns',
    widgets: ['KpiStatRow', 'FunnelChartCard', 'PieChartCard', 'DataTable (campaigns)'],
    patterns: ['Embedded DataTable in widget card', 'Channel pie chart'],
    imports: `import {
  FunnelChartCard, PieChartCard, KpiStatRow,
  campaigns, funnelData, channelData, embeddedDataTableClassName,
} from '@neo-admin/core';`,
  },
  crm: {
    title: 'CRM',
    description: 'Pipeline deals, activity feed, and bar chart by sales stage.',
    badge: 'Pipeline',
    widgets: ['KpiStatRow', 'DealsTable', 'ActivityFeed', 'BarChartCard'],
    patterns: ['Split 2:1 table + activity', 'Pipeline bar chart'],
    imports: `import {
  DealsTable, ActivityFeed, BarChartCard, KpiStatRow,
  deals, activities, useDashboardPage,
} from '@neo-admin/core';`,
  },
  stocks: {
    title: 'Stocks',
    description: 'Portfolio value, performance line chart, and watchlist table.',
    badge: 'Portfolio',
    widgets: ['KpiStatRow', 'LineChartCard', 'DataTable (watchlist)'],
    patterns: ['Badge direction indicators', 'Portfolio history chart'],
    imports: `import {
  KpiStatRow, LineChartCard, stocks, portfolioHistory,
  embeddedDataTableClassName, WidgetCardHeader,
} from '@neo-admin/core';`,
  },
  saas: {
    title: 'SaaS',
    description: 'MRR, churn, cohort retention chart, and subscription table.',
    badge: 'Subscriptions',
    widgets: ['KpiStatRow', 'LineChartCard (cohort)', 'DataTable (subscriptions)'],
    patterns: ['Computed MRR from mock data', 'Cohort retention line chart'],
    imports: `import {
  KpiStatRow, LineChartCard, subscriptions, cohortData,
  embeddedDataTableClassName, useDashboardPage,
} from '@neo-admin/core';`,
  },
  logistics: {
    title: 'Logistics',
    description: 'Fleet status, shipment tracking table, and delivery progress.',
    badge: 'Fleet',
    widgets: ['KpiStatRow', 'Surface map placeholder', 'DataTable (shipments)', 'Progress'],
    patterns: ['Fleet status cards', 'Shipment status badges'],
    imports: `import {
  KpiStatRow, shipments, embeddedDataTableClassName,
  WidgetCardHeader, useDashboardPage,
} from '@neo-admin/core';`,
  },
  ai: {
    title: 'AI',
    description: 'Token usage, generation history, prompt input, and usage bar chart.',
    badge: 'Generations',
    widgets: ['KpiStatRow', 'BarChartCard', 'DataTable (generations)', 'Prompt Card'],
    patterns: ['Prompt textarea + submit', 'Token usage visualization'],
    imports: `import {
  KpiStatRow, BarChartCard, aiGenerations, aiUsageData,
  embeddedDataTableClassName, useDashboardPage,
} from '@neo-admin/core';`,
  },
  sales: {
    title: 'Sales',
    description: 'Quota progress, team leaderboard, and rep performance table.',
    badge: 'Team',
    widgets: ['KpiStatRow', 'Progress (quota)', 'Leaderboard Card', 'DataTable (reps)'],
    patterns: ['Avatar leaderboard', 'Sorted rep rankings'],
    imports: `import {
  KpiStatRow, salesReps, embeddedDataTableClassName,
  WidgetCardHeader, useDashboardPage,
} from '@neo-admin/core';`,
  },
  finance: {
    title: 'Finance',
    description: 'Income vs expenses, pie chart breakdown, and transactions table.',
    badge: 'Ledger',
    widgets: ['KpiStatRow', 'PieChartCard', 'DataTable (transactions)'],
    patterns: ['Computed net from transactions', 'Expense breakdown pie'],
    imports: `import {
  KpiStatRow, PieChartCard, transactions, expenseBreakdown,
  embeddedDataTableClassName, useDashboardPage,
} from '@neo-admin/core';
`,
  },
};

const DASHBOARD_ORDER = [
  'analytics',
  'ecommerce',
  'marketing',
  'crm',
  'stocks',
  'saas',
  'logistics',
  'ai',
  'sales',
  'finance',
] as const;

export default function DashboardDocPage({ dashboard }: { dashboard: string }) {
  const info = dashboardInfo[dashboard] ?? dashboardInfo.analytics!;
  const demoPath = `/dashboards/${dashboard}`;
  const currentIndex = DASHBOARD_ORDER.indexOf(dashboard as (typeof DASHBOARD_ORDER)[number]);
  const nextDashboard =
    currentIndex >= 0 && currentIndex < DASHBOARD_ORDER.length - 1
      ? DASHBOARD_ORDER[currentIndex + 1]
      : null;

  return (
    <DocsPage
      title={`${info.title} Dashboard`}
      description={info.description}
    >
      <Cluster gap="sm" wrap="wrap">
        <Badge tone="primary">{info.badge}</Badge>
        <a
          href={`${DEMO_URL}${demoPath}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-bold underline decoration-2 underline-offset-2"
        >
          Open live preview →
        </a>
      </Cluster>

      <DocsSection title="Widgets used">
        <ul>
          {info.widgets.map((w) => (
            <li key={w}>
              <DocsInlineCode>{w}</DocsInlineCode>
            </li>
          ))}
        </ul>
      </DocsSection>

      <DocsSection title="Patterns">
        <ul>
          {info.patterns.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </DocsSection>

      <DocsSection title="Imports" description="Key @neo-admin/core exports for this dashboard.">
        <DocsCodeBlock code={info.imports} />
      </DocsSection>

      <DocsSection title="Page structure">
        <DocsCodeBlock
          code={`<Stack gap="xl">
  <PageHeader title="${info.title}" badge="${info.badge}" description="..." />
  <DashboardToolbar {...toolbarProps} />
  <KpiStatRow items={[...]} />
  <DashboardSection title="..." description="...">
    {/* charts and tables */}
  </DashboardSection>
</Stack>`}
        />
        <Text className="opacity-70">
          Source: <DocsInlineCode>apps/demo/src/pages/dashboards/{dashboard}.tsx</DocsInlineCode>
        </Text>
      </DocsSection>

      <DocsCallout tone="mint" title="Shared dashboard hooks">
        <Text size="sm">
          <DocsInlineCode>useDashboardPage()</DocsInlineCode> returns <DocsInlineCode>DashboardToolbar</DocsInlineCode>,{' '}
          <DocsInlineCode>DashboardSection</DocsInlineCode>, and filter props.{' '}
          <DocsInlineCode>useSimulatedLoading()</DocsInlineCode> adds skeleton states for demo polish.
        </Text>
      </DocsCallout>

      <DocsSection title="Related">
        <DocsNextLinks
          items={[
            {
              label: 'Charts pattern',
              path: '/docs/patterns/charts',
              description: 'ChartContainer and widget card styling.',
            },
            {
              label: 'DataTable pattern',
              path: '/docs/patterns/data-table',
              description: 'Embedded tables in dashboard cards.',
            },
            ...(nextDashboard
              ? [
                  {
                    label: `${dashboardInfo[nextDashboard]!.title} Dashboard`,
                    path: `/docs/dashboards/${nextDashboard}`,
                    description: 'Next dashboard in the series.',
                  },
                ]
              : []),
          ]}
        />
        <Text className="mt-4 opacity-70">
          Browse all dashboards in the{' '}
          <a href={`${DEMO_URL}/dashboards/analytics`} target="_blank" rel="noreferrer" className="font-bold underline">
            demo app
          </a>{' '}
          or read <DocsLink to="/docs/patterns/charts">Charts</DocsLink> for widget customization.
        </Text>
      </DocsSection>
    </DocsPage>
  );
}

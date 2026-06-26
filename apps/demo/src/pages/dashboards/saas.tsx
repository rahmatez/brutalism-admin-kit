import {
  cohortData,
  embeddedDataTableClassName,
  KpiStatRow,
  LineChartCard,
  PageHeader,
  subscriptions,
  useDashboardPage,
  WidgetCardHeader,
  widgetCardProps,
  widgetCardShellClassName,
  widgetCardTableContentClassName,
} from '@neo-admin/core';
import { Badge, Card, CardContent, DataTable, Split, Stack, Text } from 'neobrutalism-ui-react';
import { Cloud, RefreshCw, TrendingDown, TrendingUp } from 'lucide-react';

export default function SaasDashboard() {
  const { toolbarProps, DashboardToolbar, DashboardSection } = useDashboardPage();
  const activeSubs = subscriptions.filter((s) => s.status === 'active').length;
  const totalMrr = subscriptions.filter((s) => s.status === 'active').reduce((s, sub) => s + sub.mrr, 0);

  return (
    <Stack gap="xl">
      <PageHeader
        title="SaaS"
        badge="Subscriptions"
        description="MRR, churn, cohort retention, and subscription health."
      />
      <DashboardToolbar {...toolbarProps} />
      <KpiStatRow
        items={[
          { label: 'MRR', value: `$${(totalMrr / 1000).toFixed(1)}K`, change: '+8.2%', changeType: 'up', icon: <TrendingUp className="size-5" />, tone: 'mint' },
          { label: 'ARR', value: '$297K', change: '+12%', changeType: 'up', icon: <Cloud className="size-5" />, tone: 'lavender' },
          { label: 'Churn Rate', value: '2.1%', change: '-0.3%', changeType: 'down', icon: <TrendingDown className="size-5" />, tone: 'pink' },
          { label: 'Active Subs', value: String(activeSubs), change: '+18', changeType: 'up', icon: <RefreshCw className="size-5" />, tone: 'yellow' },
        ]}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { plan: 'Starter', count: 1, mrr: 29, tone: 'cream' as const },
          { plan: 'Pro', count: 2, mrr: 198, tone: 'yellow' as const },
          { plan: 'Enterprise', count: 2, mrr: 1298, tone: 'mint' as const },
        ].map((tier) => (
          <Card key={tier.plan} tone={tier.tone} shadow="hard" className="p-4">
            <Text size="sm" weight="bold" className="opacity-70">{tier.plan}</Text>
            <p className="mt-1 font-heading text-2xl font-black">${tier.mrr}</p>
            <Text size="xs" className="mt-1 opacity-60">{tier.count} customers</Text>
          </Card>
        ))}
      </div>
      <DashboardSection title="Retention & Subscriptions" description="Cohort analysis and customer list">
        <Split ratio="1:1" collapse="lg">
          <LineChartCard
            title="Cohort Retention"
            description="% of users retained each month"
            data={cohortData}
            dataKey="retained"
            categoryKey="month"
            tone="blue"
          />
          <Card tone="cream" shadow="hard" className={widgetCardShellClassName} {...widgetCardProps}>
            <WidgetCardHeader title="Subscriptions" description="All customers and plan status" />
            <CardContent className={widgetCardTableContentClassName}>
              <DataTable
                className={embeddedDataTableClassName}
                data={[...subscriptions]}
                searchable
                columns={[
                  { id: 'customer', header: 'Customer', accessorKey: 'customer' },
                  { id: 'plan', header: 'Plan', accessorKey: 'plan' },
                  { id: 'mrr', header: 'MRR', accessorFn: (r) => `$${r.mrr}` },
                  {
                    id: 'status',
                    header: 'Status',
                    cell: ({ row }) => (
                      <Badge tone={row.status === 'active' ? 'success' : row.status === 'cancelled' ? 'danger' : 'warning'}>
                        {row.status}
                      </Badge>
                    ),
                  },
                ]}
              />
            </CardContent>
          </Card>
        </Split>
      </DashboardSection>
    </Stack>
  );
}

import {
  embeddedDataTableClassName,
  KpiStatRow,
  LineChartCard,
  PageHeader,
  portfolioHistory,
  stocks,
  useDashboardPage,
  WidgetCardHeader,
  widgetCardProps,
  widgetCardShellClassName,
  widgetCardTableContentClassName,
} from '@neo-admin/core';
import { Badge, Card, CardContent, DataTable, Split, Stack } from 'neobrutalism-ui-react';
import { ArrowDown, ArrowUp, DollarSign, TrendingUp, Wallet } from 'lucide-react';

export default function StocksDashboard() {
  const { toolbarProps, DashboardToolbar, DashboardSection } = useDashboardPage();

  return (
    <Stack gap="xl">
      <PageHeader
        title="Stocks"
        badge="Portfolio"
        description="Portfolio performance, daily changes, and your watchlist."
      />
      <DashboardToolbar {...toolbarProps} />
      <KpiStatRow
        items={[
          { label: 'Portfolio Value', value: '$105.2K', change: '+1.8%', changeType: 'up', icon: <Wallet className="size-5" />, tone: 'mint' },
          { label: 'Day Change', value: '+$1,890', change: '+1.8%', changeType: 'up', icon: <TrendingUp className="size-5" />, tone: 'yellow' },
          { label: 'Total Gain', value: '$12.4K', change: '+13.4%', changeType: 'up', icon: <ArrowUp className="size-5" />, tone: 'lavender' },
          { label: 'Cash Balance', value: '$8.2K', change: 'Ready', changeType: 'neutral', icon: <DollarSign className="size-5" />, tone: 'cream' },
        ]}
      />
      <DashboardSection title="Portfolio Chart" description="5-day value movement">
        <Split ratio="2:1" collapse="lg">
          <LineChartCard
            title="Portfolio Value"
            description="Daily closing value"
            data={portfolioHistory}
            dataKey="value"
            categoryKey="date"
            tone="cream"
          />
          <Card tone="yellow" shadow="hard" className={widgetCardShellClassName} {...widgetCardProps}>
            <WidgetCardHeader title="Watchlist" description="Track your favorite symbols" />
            <CardContent className={widgetCardTableContentClassName}>
              <DataTable
                className={embeddedDataTableClassName}
                data={[...stocks]}
                columns={[
                  { id: 'symbol', header: 'Symbol', accessorKey: 'symbol' },
                  { id: 'price', header: 'Price', accessorFn: (r) => `$${r.price}` },
                  {
                    id: 'change',
                    header: 'Change',
                    cell: ({ row }) => (
                      <Badge tone={row.change >= 0 ? 'success' : 'danger'} className="inline-flex items-center gap-1">
                        {row.change >= 0 ? <ArrowUp className="size-3" /> : <ArrowDown className="size-3" />}
                        {Math.abs(row.change)}%
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

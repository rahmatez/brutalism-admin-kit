import {
  campaigns,
  channelData,
  embeddedDataTableClassName,
  funnelData,
  FunnelChartCard,
  KpiStatRow,
  PageHeader,
  PieChartCard,
  useDashboardPage,
  WidgetCardHeader,
  widgetCardProps,
  widgetCardShellClassName,
  widgetCardTableContentClassName,
} from '@neo-admin/core';
import { Badge, Card, CardContent, DataTable, Split, Stack } from 'neobrutalism-ui-react';
import { Megaphone, Target, Users, Zap } from 'lucide-react';

export default function MarketingDashboard() {
  const { toolbarProps, DashboardToolbar, DashboardSection } = useDashboardPage();

  return (
    <Stack gap="xl">
      <PageHeader
        title="Marketing"
        badge="Campaigns"
        description="Campaign performance, channel mix, and conversion analytics."
      />
      <DashboardToolbar {...toolbarProps} />
      <KpiStatRow
        items={[
          { label: 'Active Campaigns', value: '12', change: '+2', changeType: 'up', icon: <Megaphone className="size-5" />, tone: 'pink' },
          { label: 'Conversions', value: '1,907', change: '+24%', changeType: 'up', icon: <Target className="size-5" />, tone: 'mint' },
          { label: 'Leads Generated', value: '3,420', change: '+16%', changeType: 'up', icon: <Users className="size-5" />, tone: 'yellow' },
          { label: 'Avg. ROI', value: '3.9x', change: '+0.6x', changeType: 'up', icon: <Zap className="size-5" />, tone: 'lavender' },
        ]}
      />
      <DashboardSection title="Funnel & Channels" description="Where your audience converts">
        <Split ratio="1:1" collapse="lg">
          <FunnelChartCard data={funnelData} />
          <PieChartCard
            title="Channel Mix"
            description="Traffic share by marketing channel"
            data={channelData.map((c) => ({ name: c.channel, value: c.value }))}
            tone="blue"
          />
        </Split>
      </DashboardSection>
      <DashboardSection title="Campaign Performance" description="ROI and spend by campaign">
        <Card tone="cream" shadow="hard" className={widgetCardShellClassName} {...widgetCardProps}>
          <WidgetCardHeader title="All Campaigns" description="Sort and search across active campaigns" />
          <CardContent className={widgetCardTableContentClassName}>
            <DataTable
              className={embeddedDataTableClassName}
              data={[...campaigns]}
              searchable
              columns={[
                { id: 'name', header: 'Campaign', accessorKey: 'name', sortable: true },
                { id: 'channel', header: 'Channel', accessorKey: 'channel' },
                { id: 'spend', header: 'Spend', accessorFn: (r) => `$${r.spend.toLocaleString()}`, sortable: true },
                { id: 'conversions', header: 'Conv.', accessorKey: 'conversions', sortable: true },
                { id: 'roi', header: 'ROI', cell: ({ row }) => <Badge tone={row.roi >= 4 ? 'success' : 'primary'}>{row.roi}x</Badge>, sortable: true },
              ]}
            />
          </CardContent>
        </Card>
      </DashboardSection>
    </Stack>
  );
}

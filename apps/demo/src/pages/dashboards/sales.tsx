import {
  embeddedDataTableClassName,
  KpiStatRow,
  PageHeader,
  salesReps,
  useDashboardPage,
  WidgetCardHeader,
  widgetCardBodyClassName,
  widgetCardBodyProps,
  widgetCardProps,
  widgetCardShellClassName,
  widgetCardTableContentClassName,
} from '@neo-admin/core';
import { Avatar, Badge, Card, CardContent, Cluster, DataTable, Progress, Split, Stack, Text } from 'neobrutalism-ui-react';
import { Award, DollarSign, Target, Trophy } from 'lucide-react';

export default function SalesDashboard() {
  const { toolbarProps, DashboardToolbar, DashboardSection } = useDashboardPage();
  const sorted = [...salesReps].sort((a, b) => b.closed - a.closed);
  const topRep = sorted[0]!;

  return (
    <Stack gap="xl">
      <PageHeader
        title="Sales"
        badge="Q2 2026"
        description="Quota attainment, pipeline value, and team leaderboard."
      />
      <DashboardToolbar {...toolbarProps} />
      <KpiStatRow
        items={[
          { label: 'Quota Attainment', value: '87%', change: '+5%', changeType: 'up', icon: <Target className="size-5" />, tone: 'yellow' },
          { label: 'Closed Revenue', value: '$322K', change: '+$28K', changeType: 'up', icon: <DollarSign className="size-5" />, tone: 'mint' },
          { label: 'Open Pipeline', value: '$156K', change: '12 deals', changeType: 'neutral', icon: <Award className="size-5" />, tone: 'lavender' },
          { label: 'Top Rep', value: topRep.name.split(' ')[0] + '.', change: `$${topRep.closed.toLocaleString()}`, changeType: 'up', icon: <Trophy className="size-5" />, tone: 'pink' },
        ]}
      />
      <DashboardSection title="Leaderboard" description="Quota progress by rep">
        <Split ratio="1:1" collapse="lg">
          <Card tone="yellow" shadow="hard" className={widgetCardShellClassName} {...widgetCardProps}>
            <WidgetCardHeader title="Sales Leaderboard" description="Ranked by closed revenue" />
            <CardContent className={widgetCardBodyClassName} {...widgetCardBodyProps}>
              <Stack gap="md">
                {sorted.map((rep, i) => {
                  const pct = Math.min(Math.round((rep.closed / rep.quota) * 100), 100);
                  return (
                    <div key={rep.id}>
                      <Cluster justify="between" align="center" className="mb-1.5">
                        <Cluster gap="sm" align="center">
                          <p className="font-heading text-lg font-black opacity-40">#{i + 1}</p>
                          <Avatar alt={rep.name} tone={i === 0 ? 'primary' : 'secondary'} className="size-8" />
                          <Text weight="bold">{rep.name}</Text>
                        </Cluster>
                        <Text size="sm" weight="bold">
                          ${rep.closed.toLocaleString()} / ${rep.quota.toLocaleString()}
                        </Text>
                      </Cluster>
                      <Progress value={pct} label={`${pct}% of quota`} tone={pct >= 100 ? 'success' : 'primary'} />
                    </div>
                  );
                })}
              </Stack>
            </CardContent>
          </Card>
          <Card tone="cream" shadow="hard" className={widgetCardShellClassName} {...widgetCardProps}>
            <WidgetCardHeader title="Team Performance" description="Detailed metrics per rep" />
            <CardContent className={widgetCardTableContentClassName}>
              <DataTable
                className={embeddedDataTableClassName}
                data={sorted}
                columns={[
                  { id: 'name', header: 'Rep', accessorKey: 'name' },
                  { id: 'closed', header: 'Closed', accessorFn: (r) => `$${r.closed.toLocaleString()}`, sortable: true },
                  { id: 'deals', header: 'Deals', accessorKey: 'deals' },
                  {
                    id: 'status',
                    header: 'Status',
                    cell: ({ row }) => (
                      <Badge tone={row.closed >= row.quota ? 'success' : 'warning'}>
                        {row.closed >= row.quota ? 'On Track' : 'Behind'}
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

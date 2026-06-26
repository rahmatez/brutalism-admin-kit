import {
  analyticsData,
  KpiStatRow,
  PageHeader,
  topPages,
  TopPagesTable,
  TrafficChart,
  useDashboardPage,
  useSimulatedLoading,
} from '@neo-admin/core';
import { Callout, Skeleton, Split, Stack } from 'neobrutalism-ui-react';
import { Clock, Eye, MousePointer, Users } from 'lucide-react';

export default function AnalyticsDashboard() {
  const loading = useSimulatedLoading(150);
  const { toolbarProps, DashboardToolbar, DashboardSection } = useDashboardPage();

  return (
    <Stack gap="xl">
      <PageHeader
        title="Analytics"
        badge="Live"
        description="Traffic, engagement, and growth metrics — updated in real time."
      />
      <DashboardToolbar {...toolbarProps} />
      <KpiStatRow
        items={[
          { label: 'Total Visitors', value: '18.2K', change: '+14.2%', changeType: 'up', icon: <Users className="size-5" />, tone: 'yellow' },
          { label: 'Page Views', value: '70.1K', change: '+8.6%', changeType: 'up', icon: <Eye className="size-5" />, tone: 'mint' },
          { label: 'Bounce Rate', value: '33%', change: '-4.1%', changeType: 'down', icon: <MousePointer className="size-5" />, tone: 'pink' },
          { label: 'Avg. Session', value: '4m 12s', change: '+22s', changeType: 'up', icon: <Clock className="size-5" />, tone: 'lavender' },
        ]}
      />
      <DashboardSection title="Performance" description="Traffic trends and top content">
        {loading ? (
          <Skeleton variant="block" className="h-96" />
        ) : (
          <Split ratio="2:1" collapse="lg">
            <TrafficChart data={analyticsData} />
            <TopPagesTable data={topPages} />
          </Split>
        )}
      </DashboardSection>
      <Callout tone="blue" layout="inline">
        <strong>Insight:</strong> Page views grew 18% month-over-month. Blog content drives the highest engagement.
      </Callout>
    </Stack>
  );
}

import {
  ActivityFeed,
  activities,
  BarChartCard,
  deals,
  DealsTable,
  KpiStatRow,
  PageHeader,
  useDashboardPage,
} from '@neo-admin/core';
import { Callout, Split, Stack } from 'neobrutalism-ui-react';
import { Handshake, TrendingUp, UserCheck, Users } from 'lucide-react';

const pipelineData = [
  { stage: 'Lead', count: 24 },
  { stage: 'Qualified', count: 18 },
  { stage: 'Proposal', count: 12 },
  { stage: 'Won', count: 8 },
];

export default function CrmDashboard() {
  const { toolbarProps, DashboardToolbar, DashboardSection } = useDashboardPage();

  return (
    <Stack gap="xl">
      <PageHeader
        title="CRM"
        badge="Pipeline"
        description="Deal pipeline, contacts, and team activity in one view."
      />
      <DashboardToolbar {...toolbarProps} />
      <KpiStatRow
        items={[
          { label: 'Active Deals', value: '42', change: '+6', changeType: 'up', icon: <Handshake className="size-5" />, tone: 'yellow' },
          { label: 'Pipeline Value', value: '$247K', change: '+$32K', changeType: 'up', icon: <TrendingUp className="size-5" />, tone: 'mint' },
          { label: 'Contacts', value: '1,204', change: '+89', changeType: 'up', icon: <Users className="size-5" />, tone: 'lavender' },
          { label: 'Win Rate', value: '28%', change: '+3%', changeType: 'up', icon: <UserCheck className="size-5" />, tone: 'pink' },
        ]}
      />
      <DashboardSection title="Deals & Activity" description="Open opportunities and recent updates">
        <Split ratio="2:1" collapse="lg">
          <DealsTable data={deals} />
          <ActivityFeed data={activities} />
        </Split>
      </DashboardSection>
      <DashboardSection title="Pipeline Stages" description="Deal count by sales stage">
        <BarChartCard
          title="Sales Pipeline"
          description="Deals progressing through each stage"
          data={pipelineData}
          dataKey="count"
          categoryKey="stage"
          tone="cream"
        />
      </DashboardSection>
      <Callout tone="success" layout="inline">
        <strong>Win:</strong> Umbrella Co closed at $67K — largest deal this quarter.
      </Callout>
    </Stack>
  );
}

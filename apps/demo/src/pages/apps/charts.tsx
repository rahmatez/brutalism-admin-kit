import {
  analyticsData,
  channelData,
  DashboardSection,
  expenseBreakdown,
  PageHeader,
  useDashboardPage,
} from '@neo-admin/core';
import { Callout, Stack } from 'neobrutalism-ui-react';
import { BarChartCard, LineChartCard, PieChartCard, TrafficChart } from '@neo-admin/core';

export default function ChartsPage() {
  const { toolbarProps, DashboardToolbar } = useDashboardPage();

  return (
    <Stack gap="xl">
      <PageHeader
        title="Charts"
        badge="Recharts"
        description="Bar, line, area, and pie chart compositions built on Recharts."
      />
      <DashboardToolbar {...toolbarProps} />

      <DashboardSection title="Traffic Overview" description="Combined area chart with visitors and page views">
        <TrafficChart data={analyticsData} />
      </DashboardSection>

      <DashboardSection title="Comparisons" description="Bar and line chart side by side">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <BarChartCard title="Channel Mix" data={[...channelData]} dataKey="value" categoryKey="channel" />
          <LineChartCard
            title="Visitor Trend"
            data={analyticsData.map((d) => ({ month: d.month, visitors: d.visitors }))}
            dataKey="visitors"
            categoryKey="month"
          />
        </div>
      </DashboardSection>

      <DashboardSection title="Distribution" description="Donut chart for expense breakdown">
        <div className="max-w-md">
          <PieChartCard title="Expense Breakdown" data={expenseBreakdown} />
        </div>
      </DashboardSection>

      <Callout tone="blue" layout="inline">
        <strong>Tip:</strong> All chart widgets accept mock data arrays and can be composed inside dashboard sections.
      </Callout>
    </Stack>
  );
}

import type { ReactNode } from 'react';
import {
  Card,
  CardContent,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type CardTone,
} from 'neobrutalism-ui-react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from 'recharts';
import {
  widgetCardChartBodyClassName,
  widgetCardChartBodyProps,
  widgetCardShellClassName,
  widgetChartCardProps,
} from './widget-card-styles';
import { WidgetCardHeader } from './widget-card-header';

const chartConfig = {
  visitors: { label: 'Visitors', color: 'var(--nb-chart-1)' },
  pageViews: { label: 'Page Views', color: 'var(--nb-chart-2)' },
  value: { label: 'Value', color: 'var(--nb-chart-1)' },
  tokens: { label: 'Tokens', color: 'var(--nb-chart-3)' },
  retained: { label: 'Retained %', color: 'var(--nb-chart-4)' },
};

const PIE_COLORS = [
  'var(--nb-chart-1)',
  'var(--nb-chart-2)',
  'var(--nb-chart-3)',
  'var(--nb-chart-4)',
  'var(--nb-chart-5)',
];

interface ChartCardProps {
  title: string;
  description?: string;
  tone?: CardTone;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}

function ChartCard({ title, description, tone, actions, children, className }: ChartCardProps) {
  return (
    <Card
      tone={tone}
      shadow="hard"
      className={`${widgetCardShellClassName} ${className ?? ''}`}
      {...widgetChartCardProps}
    >
      <WidgetCardHeader title={title} description={description} actions={actions} />
      <CardContent className={widgetCardChartBodyClassName} {...widgetCardChartBodyProps}>
        {children}
      </CardContent>
    </Card>
  );
}

const chartContainerClassName = 'widget-chart-surface w-full';

export function TrafficChart({
  data,
  description = 'Visitors and page views over the last 6 months',
}: {
  data: readonly { month: string; visitors: number; pageViews: number }[];
  description?: string;
}) {
  return (
    <ChartCard title="Traffic Overview" description={description} tone="cream">
      <ChartContainer config={chartConfig} className={chartContainerClassName}>
        <AreaChart data={[...data]} margin={{ top: 8, right: 12, left: -8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="var(--nb-border)" opacity={0.4} />
          <XAxis dataKey="month" tick={{ fontSize: 12, fontWeight: 700 }} />
          <YAxis tick={{ fontSize: 12, fontWeight: 700 }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="visitors"
            stroke="var(--nb-chart-1)"
            fill="var(--nb-chart-1)"
            fillOpacity={0.35}
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="pageViews"
            stroke="var(--nb-chart-2)"
            fill="var(--nb-chart-2)"
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </AreaChart>
      </ChartContainer>
    </ChartCard>
  );
}

export function BarChartCard({
  title,
  description,
  data,
  dataKey,
  categoryKey,
  tone,
}: {
  title: string;
  description?: string;
  data: readonly Record<string, string | number>[];
  dataKey: string;
  categoryKey: string;
  tone?: CardTone;
}) {
  return (
    <ChartCard title={title} description={description} tone={tone}>
      <ChartContainer config={chartConfig} className={chartContainerClassName}>
        <BarChart data={[...data]} margin={{ top: 8, right: 12, left: -8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="var(--nb-border)" opacity={0.4} />
          <XAxis dataKey={categoryKey} tick={{ fontSize: 12, fontWeight: 700 }} />
          <YAxis tick={{ fontSize: 12, fontWeight: 700 }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey={dataKey} fill="var(--nb-chart-1)" radius={[6, 6, 0, 0]} maxBarSize={48} />
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}

export function LineChartCard({
  title,
  description,
  data,
  dataKey,
  categoryKey,
  tone,
}: {
  title: string;
  description?: string;
  data: readonly Record<string, string | number>[];
  dataKey: string;
  categoryKey: string;
  tone?: CardTone;
}) {
  return (
    <ChartCard title={title} description={description} tone={tone}>
      <ChartContainer config={chartConfig} className={chartContainerClassName}>
        <LineChart data={[...data]} margin={{ top: 8, right: 12, left: -8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="var(--nb-border)" opacity={0.4} />
          <XAxis dataKey={categoryKey} tick={{ fontSize: 12, fontWeight: 700 }} />
          <YAxis tick={{ fontSize: 12, fontWeight: 700 }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="var(--nb-chart-1)"
            strokeWidth={3}
            dot={{ fill: 'var(--nb-chart-1)', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ChartContainer>
    </ChartCard>
  );
}

export function PieChartCard({
  title,
  description,
  data,
  tone,
}: {
  title: string;
  description?: string;
  data: readonly { name: string; value: number }[];
  tone?: CardTone;
}) {
  return (
    <ChartCard title={title} description={description} tone={tone}>
      <ChartContainer config={chartConfig} className={`${chartContainerClassName} mx-auto`}>
        <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Pie
            data={[...data]}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={88}
            paddingAngle={3}
            stroke="var(--nb-border)"
            strokeWidth={2}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
    </ChartCard>
  );
}

export function FunnelChartCard({
  data,
  description = 'Conversion rate at each funnel stage',
}: {
  data: readonly { stage: string; value: number }[];
  description?: string;
}) {
  return (
    <BarChartCard
      title="Conversion Funnel"
      description={description}
      data={data}
      dataKey="value"
      categoryKey="stage"
      tone="mint"
    />
  );
}

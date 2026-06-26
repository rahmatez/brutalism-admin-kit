import {
  analyticsData,
  KpiStatRow,
  LineChartCard,
  orders,
  PageHeader,
  ProductsTable,
  products,
  RecentOrdersTable,
  useDashboardPage,
  useSimulatedLoading,
} from '@neo-admin/core';
import { Skeleton, Split, Stack } from 'neobrutalism-ui-react';
import { DollarSign, Package, ShoppingCart, TrendingUp } from 'lucide-react';

const revenueTrend = analyticsData.map((d) => ({
  month: d.month,
  revenue: Math.round(d.visitors * 6.8),
}));

export default function EcommerceDashboard() {
  const loading = useSimulatedLoading();
  const { toolbarProps, DashboardToolbar, DashboardSection } = useDashboardPage();

  return (
    <Stack gap="xl">
      <PageHeader
        title="E-Commerce"
        badge="Store"
        description="Revenue, orders, and product performance across your catalog."
      />
      <DashboardToolbar {...toolbarProps} />
      <KpiStatRow
        items={[
          { label: 'Revenue', value: '$124.5K', change: '+18.3%', changeType: 'up', icon: <DollarSign className="size-5" />, tone: 'yellow' },
          { label: 'Orders', value: '1,842', change: '+12.1%', changeType: 'up', icon: <ShoppingCart className="size-5" />, tone: 'mint' },
          { label: 'Products', value: '156', change: '+4 new', changeType: 'neutral', icon: <Package className="size-5" />, tone: 'lavender' },
          { label: 'Conversion', value: '3.2%', change: '+0.4%', changeType: 'up', icon: <TrendingUp className="size-5" />, tone: 'pink' },
        ]}
      />
      <DashboardSection title="Revenue Trend" description="Monthly revenue growth">
        <LineChartCard
          title="Revenue Over Time"
          description="Estimated revenue from visitor traffic"
          data={revenueTrend}
          dataKey="revenue"
          categoryKey="month"
          tone="cream"
        />
      </DashboardSection>
      <DashboardSection title="Orders & Products" description="Recent activity and inventory">
        {loading ? (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Skeleton variant="block" className="h-96" />
            <Skeleton variant="block" className="h-96" />
          </div>
        ) : (
          <Split ratio="1:1" collapse="lg" className="*:min-w-0">
            <RecentOrdersTable data={orders} />
            <ProductsTable data={products} />
          </Split>
        )}
      </DashboardSection>
    </Stack>
  );
}

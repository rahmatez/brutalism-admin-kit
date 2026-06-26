import type { ReactNode } from 'react';
import {
  Avatar,
  Badge,
  Card,
  CardContent,
  DataTable,
  Stack,
  Text,
  type CardTone,
} from 'neobrutalism-ui-react';
import type { Activity, Deal, Order, Product, TopPage } from '../data/types';
import {
  embeddedDataTableClassName,
  widgetCardProps,
  widgetCardShellClassName,
  widgetCardTableContentClassName,
} from './widget-card-styles';
import { WidgetCardHeader } from './widget-card-header';

export { embeddedDataTableClassName };

function DataCard({
  title,
  description,
  tone,
  children,
}: {
  title: string;
  description?: string;
  tone?: CardTone;
  children: ReactNode;
}) {
  return (
    <Card tone={tone} shadow="hard" className={widgetCardShellClassName} {...widgetCardProps}>
      <WidgetCardHeader title={title} description={description} />
      <CardContent className={widgetCardTableContentClassName}>{children}</CardContent>
    </Card>
  );
}

export function RecentOrdersTable({ data }: { data: readonly Order[] }) {
  return (
    <DataCard title="Recent Orders" description="Latest transactions across your store" tone="cream">
      <DataTable
        className={embeddedDataTableClassName}
        data={[...data]}
        searchable
        paginated
        columns={[
          { id: 'id', header: 'Order ID', accessorKey: 'id' },
          { id: 'customer', header: 'Customer', accessorKey: 'customer' },
          { id: 'product', header: 'Product', accessorKey: 'product' },
          {
            id: 'amount',
            header: 'Amount',
            accessorFn: (r) => `$${r.amount.toFixed(2)}`,
          },
          {
            id: 'status',
            header: 'Status',
            cell: ({ row }) => (
              <Badge tone={row.status === 'delivered' ? 'success' : row.status === 'cancelled' ? 'danger' : 'warning'}>
                {row.status}
              </Badge>
            ),
          },
        ]}
      />
    </DataCard>
  );
}

export function TopPagesTable({ data }: { data: readonly TopPage[] }) {
  return (
    <DataCard title="Top Pages" description="Most visited pages this period" tone="lavender">
      <DataTable
        className={embeddedDataTableClassName}
        data={[...data]}
        columns={[
          { id: 'path', header: 'Path', accessorKey: 'path' },
          {
            id: 'views',
            header: 'Views',
            accessorFn: (r) => r.views.toLocaleString(),
          },
          { id: 'avgTime', header: 'Avg. Time', accessorKey: 'avgTime' },
        ]}
      />
    </DataCard>
  );
}

export function ProductsTable({ data }: { data: readonly Product[] }) {
  return (
    <DataCard title="Products" description="Inventory and sales performance" tone="mint">
      <DataTable
        className={embeddedDataTableClassName}
        data={[...data]}
        searchable
        paginated
        selectable
        columns={[
          { id: 'name', header: 'Name', accessorKey: 'name' },
          { id: 'category', header: 'Category', accessorKey: 'category' },
          {
            id: 'price',
            header: 'Price',
            accessorFn: (r) => `$${r.price}`,
          },
          { id: 'stock', header: 'Stock', accessorKey: 'stock' },
          { id: 'sales', header: 'Sales', accessorKey: 'sales' },
        ]}
      />
    </DataCard>
  );
}

export function DealsTable({ data }: { data: readonly Deal[] }) {
  return (
    <DataCard title="Active Deals" description="Open opportunities in your pipeline" tone="yellow">
      <DataTable
        className={embeddedDataTableClassName}
        data={[...data]}
        searchable
        columns={[
          { id: 'company', header: 'Company', accessorKey: 'company' },
          { id: 'contact', header: 'Contact', accessorKey: 'contact' },
          {
            id: 'value',
            header: 'Value',
            accessorFn: (r) => `$${r.value.toLocaleString()}`,
          },
          {
            id: 'stage',
            header: 'Stage',
            cell: ({ row }) => <Badge tone="primary">{row.stage}</Badge>,
          },
        ]}
      />
    </DataCard>
  );
}

export function ActivityFeed({ data }: { data: readonly Activity[] }) {
  return (
    <DataCard title="Recent Activity" description="Latest team actions and updates" tone="pink">
      <Stack gap="none">
        {data.map((item, i) => (
          <div
            key={item.id}
            className={`flex gap-3 px-4 py-3 ${i < data.length - 1 ? 'border-b-2 border-(--nb-border)' : ''}`}
          >
            <Avatar alt={item.user} tone="primary" className="size-9 shrink-0" />
            <Stack gap="xs" className="min-w-0 flex-1">
              <Text size="sm" weight="bold" className="truncate">
                {item.user}
              </Text>
              <Text size="sm" className="leading-snug">
                {item.action}
              </Text>
              <Text size="xs" className="opacity-60">
                {item.time}
              </Text>
            </Stack>
          </div>
        ))}
      </Stack>
    </DataCard>
  );
}

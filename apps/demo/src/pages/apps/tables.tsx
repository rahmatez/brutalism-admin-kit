import {
  DashboardSection,
  embeddedDataTableClassName,
  orders,
  PageHeader,
  products,
  useSimulatedLoading,
  users,
  WidgetCardHeader,
  widgetCardProps,
  widgetCardShellClassName,
  widgetCardTableContentClassName,
} from '@neo-admin/core';
import {
  Badge,
  Card,
  CardContent,
  DataTable,
  Skeleton,
  Stack,
} from 'neobrutalism-ui-react';

export default function TablesPage() {
  const loading = useSimulatedLoading();

  return (
    <Stack gap="xl">
      <PageHeader
        title="Tables"
        badge="Data"
        description="DataTable examples with search, sort, pagination, and row selection."
      />

      <DashboardSection title="Users" description="Searchable, sortable, with row selection">
        <Card tone="cream" className={`${widgetCardShellClassName} shadow-[4px_4px_0_0_var(--nb-shadow)]`} {...widgetCardProps}>
          <WidgetCardHeader title="Team Members" />
          <CardContent className={widgetCardTableContentClassName}>
            {loading ? (
              <Stack gap="sm" className="p-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} variant="block" className="h-10" />
                ))}
              </Stack>
            ) : (
              <DataTable
                className={embeddedDataTableClassName}
                data={[...users]}
                searchable
                paginated
                selectable
                stickyHeader
                columns={[
                  { id: 'name', header: 'Name', accessorKey: 'name', sortable: true },
                  { id: 'email', header: 'Email', accessorKey: 'email', sortable: true },
                  { id: 'role', header: 'Role', accessorKey: 'role' },
                  {
                    id: 'status',
                    header: 'Status',
                    cell: ({ row }) => (
                      <Badge tone={row.status === 'active' ? 'success' : 'secondary'}>{row.status}</Badge>
                    ),
                  },
                ]}
              />
            )}
          </CardContent>
        </Card>
      </DashboardSection>

      <DashboardSection title="Products" description="Compact table with numeric sorting">
        <Card tone="yellow" className={`${widgetCardShellClassName} shadow-[4px_4px_0_0_var(--nb-shadow)]`} {...widgetCardProps}>
          <WidgetCardHeader title="Inventory" />
          <CardContent className={widgetCardTableContentClassName}>
            <DataTable
              className={embeddedDataTableClassName}
              data={[...products]}
              paginated
              columns={[
                { id: 'name', header: 'Product', accessorKey: 'name', sortable: true },
                { id: 'category', header: 'Category', accessorKey: 'category' },
                { id: 'price', header: 'Price', accessorFn: (r) => `$${r.price}`, sortable: true },
                { id: 'stock', header: 'Stock', accessorKey: 'stock', sortable: true },
                { id: 'sales', header: 'Sales', accessorKey: 'sales', sortable: true },
              ]}
            />
          </CardContent>
        </Card>
      </DashboardSection>

      <DashboardSection title="Orders" description="Clickable rows with status badges">
        <Card tone="mint" className={`${widgetCardShellClassName} shadow-[4px_4px_0_0_var(--nb-shadow)]`} {...widgetCardProps}>
          <WidgetCardHeader title="Recent Orders" />
          <CardContent className={widgetCardTableContentClassName}>
            <DataTable
              className={embeddedDataTableClassName}
              data={[...orders]}
              searchable
              columns={[
                { id: 'id', header: 'Order', accessorKey: 'id' },
                { id: 'customer', header: 'Customer', accessorKey: 'customer' },
                { id: 'product', header: 'Product', accessorKey: 'product' },
                { id: 'amount', header: 'Amount', accessorFn: (r) => `$${r.amount}` },
                {
                  id: 'status',
                  header: 'Status',
                  cell: ({ row }) => {
                    const tone =
                      row.status === 'delivered'
                        ? 'success'
                        : row.status === 'cancelled'
                          ? 'danger'
                          : 'primary';
                    return <Badge tone={tone}>{row.status}</Badge>;
                  },
                },
              ]}
            />
          </CardContent>
        </Card>
      </DashboardSection>
    </Stack>
  );
}

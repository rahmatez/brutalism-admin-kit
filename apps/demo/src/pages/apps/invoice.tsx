import {
  embeddedDataTableClassName,
  FilterBar,
  KpiStatRow,
  PageHeader,
  orders,
  WidgetCardHeader,
  widgetCardProps,
  widgetCardShellClassName,
  widgetCardTableContentClassName,
} from '@neo-admin/core';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Cluster,
  DataTable,
  Split,
  Stack,
  Text,
} from 'neobrutalism-ui-react';
import { DollarSign, Download, FileText, Printer } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const statusTone: Record<string, 'success' | 'warning' | 'primary' | 'secondary' | 'danger'> = {
  delivered: 'success',
  shipped: 'primary',
  processing: 'warning',
  pending: 'secondary',
  cancelled: 'danger',
};

export default function InvoicePage() {
  const [selectedId, setSelectedId] = useState(orders[0]?.id);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filtered = useMemo(
    () => (statusFilter === 'all' ? [...orders] : orders.filter((o) => o.status === statusFilter)),
    [statusFilter],
  );

  const selected = filtered.find((o) => o.id === selectedId) ?? filtered[0];

  useEffect(() => {
    if (filtered.length === 0) return;
    if (!filtered.some((o) => o.id === selectedId)) {
      setSelectedId(filtered[0]!.id);
    }
  }, [filtered, selectedId]);

  const totalRevenue = orders.reduce((sum, o) => sum + o.amount, 0);
  const paidCount = orders.filter((o) => o.status === 'delivered' || o.status === 'shipped').length;

  return (
    <Stack gap="xl">
      <PageHeader
        title="Invoice"
        badge="Billing"
        description="Invoice list, detail preview, and payment status tracking."
        actions={
          <Cluster gap="sm">
            <Button tone="secondary" size="sm">
              <Printer className="mr-1.5 size-4" />
              Print
            </Button>
            <Button tone="secondary" size="sm">
              <Download className="mr-1.5 size-4" />
              Export
            </Button>
          </Cluster>
        }
      />

      <KpiStatRow
        items={[
          {
            label: 'Total Revenue',
            value: `$${totalRevenue.toFixed(0)}`,
            change: '+12%',
            changeType: 'up',
            icon: <DollarSign className="size-5" />,
            tone: 'mint',
          },
          {
            label: 'Invoices',
            value: String(orders.length),
            icon: <FileText className="size-5" />,
            tone: 'yellow',
          },
          {
            label: 'Paid / Shipped',
            value: String(paidCount),
            change: `${Math.round((paidCount / orders.length) * 100)}%`,
            changeType: 'up',
            icon: <FileText className="size-5" />,
            tone: 'lavender',
          },
        ]}
      />

      <FilterBar>
        <Cluster gap="sm" wrap="wrap">
          {(['all', 'pending', 'processing', 'shipped', 'delivered', 'cancelled'] as const).map((s) => (
            <Button
              key={s}
              size="sm"
              tone={statusFilter === s ? 'primary' : 'secondary'}
              onClick={() => setStatusFilter(s)}
            >
              {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
            </Button>
          ))}
        </Cluster>
      </FilterBar>

      <Split ratio="1:1" collapse="lg">
        <Card tone="cream" className={`${widgetCardShellClassName} shadow-[4px_4px_0_0_var(--nb-shadow)]`} {...widgetCardProps}>
          <WidgetCardHeader title="Invoices" />
          <CardContent className={widgetCardTableContentClassName}>
            <DataTable
              className={embeddedDataTableClassName}
              data={filtered}
              onRowClick={(row) => setSelectedId(row.id)}
              columns={[
                { id: 'id', header: 'ID', accessorKey: 'id' },
                { id: 'customer', header: 'Customer', accessorKey: 'customer' },
                { id: 'amount', header: 'Amount', accessorFn: (r) => `$${r.amount}` },
                {
                  id: 'status',
                  header: 'Status',
                  cell: ({ row }) => (
                    <Badge tone={statusTone[row.status] ?? 'secondary'}>{row.status}</Badge>
                  ),
                },
              ]}
            />
          </CardContent>
        </Card>

        {selected && (
          <Card tone="white" className="shadow-[6px_6px_0_0_var(--nb-shadow)]">
            <CardHeader>
              <Cluster justify="between" wrap="wrap" className="gap-3">
                <CardTitle>Invoice {selected.id}</CardTitle>
                <Badge tone={statusTone[selected.status] ?? 'secondary'}>{selected.status}</Badge>
              </Cluster>
            </CardHeader>
            <CardContent>
              <Stack gap="lg">
                <div className="rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-cream) p-4">
                  <Text size="sm" className="block opacity-60">
                    Billed to
                  </Text>
                  <Text size="lg" weight="bold" className="mt-1 block">
                    {selected.customer}
                  </Text>
                  <Text size="sm" className="mt-1 block opacity-70">
                    {selected.date}
                  </Text>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-(--nb-border) text-left">
                      <th className="px-2 pb-3 font-bold">Item</th>
                      <th className="px-2 pb-3 text-right font-bold">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-2 py-3">{selected.product}</td>
                      <td className="px-2 py-3 text-right">${selected.amount}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-(--nb-border) font-bold">
                      <td className="px-2 pt-4">Total</td>
                      <td className="px-2 pt-4 text-right">${selected.amount}</td>
                    </tr>
                  </tfoot>
                </table>
                <Cluster gap="sm">
                  <Button tone="primary" className="flex-1">
                    Mark Paid
                  </Button>
                  <Button tone="secondary" className="flex-1">
                    Send Reminder
                  </Button>
                </Cluster>
              </Stack>
            </CardContent>
          </Card>
        )}
      </Split>
    </Stack>
  );
}

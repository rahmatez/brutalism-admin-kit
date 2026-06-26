import {
  embeddedDataTableClassName,
  expenseBreakdown,
  KpiStatRow,
  PageHeader,
  PieChartCard,
  transactions,
  useDashboardPage,
  WidgetCardHeader,
  widgetCardProps,
  widgetCardShellClassName,
  widgetCardTableContentClassName,
} from '@neo-admin/core';
import { Badge, Card, CardContent, Cluster, DataTable, Split, Stack, Text } from 'neobrutalism-ui-react';
import { ArrowDownLeft, ArrowUpRight, DollarSign, PiggyBank, Wallet } from 'lucide-react';

export default function FinanceDashboard() {
  const { toolbarProps, DashboardToolbar, DashboardSection } = useDashboardPage();
  const income = transactions.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const expense = transactions.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const net = income - expense;

  return (
    <Stack gap="xl">
      <PageHeader
        title="Finance"
        badge="FY 2026"
        description="Income, expenses, net position, and transaction history."
      />
      <DashboardToolbar {...toolbarProps} />
      <KpiStatRow
        items={[
          { label: 'Total Income', value: `$${income.toLocaleString()}`, change: '+12%', changeType: 'up', icon: <ArrowUpRight className="size-5" />, tone: 'mint' },
          { label: 'Total Expenses', value: `$${expense.toLocaleString()}`, change: '+4%', changeType: 'up', icon: <ArrowDownLeft className="size-5" />, tone: 'pink' },
          { label: 'Net Profit', value: `$${net.toLocaleString()}`, change: '+18%', changeType: 'up', icon: <DollarSign className="size-5" />, tone: 'yellow' },
          { label: 'Savings', value: '$42K', change: 'On track', changeType: 'neutral', icon: <PiggyBank className="size-5" />, tone: 'lavender' },
        ]}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card tone="mint" shadow="hard" className="p-5">
          <Cluster gap="sm" align="center">
            <Wallet className="size-6" />
            <div>
              <Text size="sm" weight="bold" className="opacity-70">Cash Flow</Text>
              <p className="font-heading text-xl font-black text-(--nb-success)">+${net.toLocaleString()}</p>
            </div>
          </Cluster>
        </Card>
        <Card tone="cream" shadow="hard" className="p-5">
          <Text size="sm" weight="bold" className="opacity-70">Expense Ratio</Text>
          <p className="mt-1 font-heading text-xl font-black">{Math.round((expense / income) * 100)}%</p>
          <Text size="xs" className="mt-1 opacity-60">of total income</Text>
        </Card>
      </div>
      <DashboardSection title="Breakdown & Transactions" description="Where money goes and recent activity">
        <Split ratio="1:1" collapse="lg">
          <PieChartCard
            title="Expense Breakdown"
            description="Share of spending by category"
            data={expenseBreakdown}
            tone="blue"
          />
          <Card tone="yellow" shadow="hard" className={widgetCardShellClassName} {...widgetCardProps}>
            <WidgetCardHeader title="Recent Transactions" description="Income and expenses this period" />
            <CardContent className={widgetCardTableContentClassName}>
              <DataTable
                className={embeddedDataTableClassName}
                data={[...transactions]}
                searchable
                paginated
                columns={[
                  { id: 'description', header: 'Description', accessorKey: 'description' },
                  { id: 'category', header: 'Category', accessorKey: 'category' },
                  {
                    id: 'amount',
                    header: 'Amount',
                    cell: ({ row }) => (
                      <Badge tone={row.type === 'income' ? 'success' : 'danger'}>
                        {row.type === 'income' ? '+' : '-'}${row.amount.toLocaleString()}
                      </Badge>
                    ),
                  },
                  { id: 'date', header: 'Date', accessorKey: 'date' },
                ]}
              />
            </CardContent>
          </Card>
        </Split>
      </DashboardSection>
    </Stack>
  );
}

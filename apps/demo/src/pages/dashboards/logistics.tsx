import {
  embeddedDataTableClassName,
  KpiStatRow,
  PageHeader,
  shipments,
  useDashboardPage,
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
  Progress,
  Split,
  Stack,
  Surface,
  Text,
} from 'neobrutalism-ui-react';
import { Clock, MapPin, Package, Truck } from 'lucide-react';

const fleetStatus = [
  { label: 'On route', value: 34, pct: 68 },
  { label: 'Loading', value: 8, pct: 16 },
  { label: 'Idle', value: 8, pct: 16 },
];

export default function LogisticsDashboard() {
  const { toolbarProps, DashboardToolbar, DashboardSection } = useDashboardPage();

  return (
    <Stack gap="xl">
      <PageHeader
        title="Logistics"
        badge="Fleet"
        description="Shipment tracking, delivery status, and fleet overview."
      />
      <DashboardToolbar {...toolbarProps} />
      <KpiStatRow
        items={[
          { label: 'In Transit', value: '34', change: 'Active', changeType: 'neutral', icon: <Truck className="size-5" />, tone: 'yellow' },
          { label: 'Delivered', value: '128', change: '+24', changeType: 'up', icon: <Package className="size-5" />, tone: 'mint' },
          { label: 'Delayed', value: '5', change: '-2', changeType: 'down', icon: <Clock className="size-5" />, tone: 'pink' },
          { label: 'On-Time Rate', value: '94%', change: '+2%', changeType: 'up', icon: <MapPin className="size-5" />, tone: 'lavender' },
        ]}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {fleetStatus.map((item) => (
          <Card key={item.label} tone="cream" shadow="hard" className="p-4">
            <Text size="sm" weight="bold">{item.label}</Text>
            <p className="mt-1 font-heading text-2xl font-black">{item.value} units</p>
            <Progress value={item.pct} className="mt-3" tone="primary" />
          </Card>
        ))}
      </div>
      <DashboardSection title="Shipments" description="Live tracking and delivery schedule">
        <Split ratio="1:1" collapse="lg">
          <Surface tone="blue" padding="lg" shadow="hard" className="min-h-72">
            <Stack gap="lg" align="center" className="h-full justify-center text-center">
              <span className="flex size-16 items-center justify-center border-2 border-(--nb-border) bg-(--nb-background) shadow-[4px_4px_0_0_var(--nb-shadow)]">
                <MapPin className="size-8" />
              </span>
              <Stack gap="xs">
                <Text size="lg" weight="bold">Shipment Map</Text>
                <Text size="sm" className="max-w-xs opacity-70">
                  Visualize routes across Indonesia — integrate OpenLayers or Mapbox.
                </Text>
              </Stack>
              <Progress value={94} label="94% delivery coverage" tone="success" className="w-full max-w-xs" />
            </Stack>
          </Surface>
          <Card tone="yellow" shadow="hard" className={widgetCardShellClassName} {...widgetCardProps}>
            <WidgetCardHeader title="Active Shipments" description="Origin, destination, and ETA" />
            <CardContent className={widgetCardTableContentClassName}>
              <DataTable
                className={embeddedDataTableClassName}
                data={[...shipments]}
                searchable
                columns={[
                  { id: 'id', header: 'ID', accessorKey: 'id' },
                  { id: 'route', header: 'Route', accessorFn: (r) => `${r.origin} → ${r.destination}` },
                  {
                    id: 'status',
                    header: 'Status',
                    cell: ({ row }) => (
                      <Badge tone={row.status === 'delivered' ? 'success' : row.status === 'delayed' ? 'danger' : 'warning'}>
                        {row.status.replace('_', ' ')}
                      </Badge>
                    ),
                  },
                  { id: 'eta', header: 'ETA', accessorKey: 'eta' },
                ]}
              />
            </CardContent>
          </Card>
        </Split>
      </DashboardSection>
    </Stack>
  );
}

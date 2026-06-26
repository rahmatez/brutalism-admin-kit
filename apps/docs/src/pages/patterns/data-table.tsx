import { DocsCodeBlock, DocsPage } from '@/components/docs-layout';
import {
  DEMO_URL,
  DocsCallout,
  DocsInlineCode,
  DocsNextLinks,
  DocsPropList,
  DocsSection,
} from '@/components/docs-content';
import { Text } from 'neobrutalism-ui-react';

export default function DataTablePatternPage() {
  return (
    <DocsPage
      title="DataTable"
      description="Sortable, searchable, paginated tables with selection and embedded dashboard cards."
    >
      <Text>
        <DocsInlineCode>DataTable</DocsInlineCode> from neobrutalism-ui-react powers list views across dashboards and app
        pages. <DocsInlineCode>embeddedDataTableClassName</DocsInlineCode> from @neo-admin/core styles tables inside widget
        cards.
      </Text>

      <DocsSection title="Basic usage">
        <DocsCodeBlock
          code={`import { DataTable } from 'neobrutalism-ui-react';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'status', header: 'Status' },
];

<DataTable
  data={rows}
  columns={columns}
  searchable
  searchPlaceholder="Filter rows..."
  paginated
  selectable
/>`}
        />
      </DocsSection>

      <DocsSection title="Common props">
        <DocsPropList
          items={[
            { name: 'searchable', type: 'boolean', description: 'Show search input above the table' },
            { name: 'paginated', type: 'boolean', description: 'Client-side pagination with page size select' },
            { name: 'selectable', type: 'boolean', description: 'Row checkboxes with select-all' },
            { name: 'loading', type: 'boolean', description: 'Skeleton rows while data loads' },
            { name: 'manualPagination', type: 'boolean', description: 'Server-driven pagination' },
            { name: 'manualSorting', type: 'boolean', description: 'Server-driven sort' },
            { name: 'manualFiltering', type: 'boolean', description: 'Server-driven search/filter' },
            { name: 'onRowClick', type: '(row) => void', description: 'Row click handler for master-detail' },
          ]}
        />
      </DocsSection>

      <DocsSection title="Embedded in widget cards">
        <DocsCodeBlock
          code={`import { embeddedDataTableClassName, WidgetCardHeader, widgetCardProps } from '@neo-admin/core';

<Card {...widgetCardProps}>
  <WidgetCardHeader title="Recent orders" description="Last 30 days" />
  <CardContent className={embeddedDataTableClassName}>
    <DataTable data={orders} columns={columns} paginated />
  </CardContent>
</Card>`}
        />
      </DocsSection>

      <DocsSection title="Demo pages">
        <ul>
          <li>
            <a href={`${DEMO_URL}/apps/tables`} target="_blank" rel="noreferrer" className="font-bold underline">
              Tables app
            </a>
          </li>
          <li>
            <a href={`${DEMO_URL}/dashboards/ecommerce`} target="_blank" rel="noreferrer" className="font-bold underline">
              E-Commerce dashboard
            </a>
          </li>
        </ul>
      </DocsSection>

      <DocsCallout tone="mint" title="useDataTable hook">
        <Text size="sm">
          For custom table UI, use <DocsInlineCode>useDataTable()</DocsInlineCode> from neobrutalism-ui-react to access
          sort, filter, pagination, and selection state.
        </Text>
      </DocsCallout>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            { label: 'CRUD Pattern', path: '/docs/templates/crud', description: 'List + dialog edit flow.' },
            { label: 'List + Detail', path: '/docs/templates/list-detail', description: 'Row click to detail pane.' },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

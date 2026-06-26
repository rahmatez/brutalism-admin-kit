import { DocsCodeBlock, DocsPage } from '@/components/docs-layout';
import {
  DEMO_URL,
  DocsCallout,
  DocsInlineCode,
  DocsLink,
  DocsNextLinks,
  DocsSection,
} from '@/components/docs-content';
import { Text } from 'neobrutalism-ui-react';

export default function CrudTemplatePage() {
  return (
    <DocsPage
      title="CRUD Pattern"
      description="List, create, edit, and delete records with DataTable and Dialog forms."
    >
      <Text>
        The CRUD pattern combines a searchable <DocsLink to="/docs/patterns/data-table">DataTable</DocsLink> list view
        with <DocsInlineCode>Dialog</DocsInlineCode> forms for create/edit and confirmation for delete.
      </Text>

      <DocsSection title="Demo references">
        <ul>
          <li>
            <a href={`${DEMO_URL}/apps/tables`} target="_blank" rel="noreferrer" className="font-bold underline">
              Tables app
            </a>{' '}
            — full DataTable with selection and pagination
          </li>
          <li>
            <a href={`${DEMO_URL}/apps/invoice`} target="_blank" rel="noreferrer" className="font-bold underline">
              Invoice app
            </a>{' '}
            — line items with inline edit
          </li>
          <li>
            <a href={`${DEMO_URL}/apps/task`} target="_blank" rel="noreferrer" className="font-bold underline">
              Task app
            </a>{' '}
            — status filters and row actions
          </li>
        </ul>
      </DocsSection>

      <DocsSection title="List view">
        <DocsCodeBlock
          code={`<DataTable
  data={items}
  columns={columns}
  searchable
  paginated
  selectable
  onRowClick={(row) => openEdit(row)}
/>`}
        />
      </DocsSection>

      <DocsSection title="Create / edit dialog">
        <DocsCodeBlock
          code={`const dialogRef = useRef<DialogHandle>(null);

<Button onClick={() => dialogRef.current?.open()}>Add item</Button>

<Dialog ref={dialogRef} title="Edit item">
  <FormRoot form={form} onSubmit={(data) => {
    saveItem(data);
    dialogRef.current?.close();
    toast({ title: 'Saved' });
  }}>
    <FormField name="name" control={form.control} render={...} />
    <DialogActions>
      <DialogClose tone="secondary">Cancel</DialogClose>
      <Button type="submit">Save</Button>
    </DialogActions>
  </FormRoot>
</Dialog>`}
        />
      </DocsSection>

      <DocsCallout tone="mint" title="Server-side mode">
        <Text size="sm">
          Pass <DocsInlineCode>manualPagination</DocsInlineCode>, <DocsInlineCode>manualSorting</DocsInlineCode>, and{' '}
          <DocsInlineCode>manualFiltering</DocsInlineCode> to DataTable when data comes from an API.
        </Text>
      </DocsCallout>

      <DocsSection title="Next steps">
        <DocsNextLinks
          items={[
            { label: 'DataTable', path: '/docs/patterns/data-table', description: 'Sorting, search, pagination.' },
            { label: 'Forms', path: '/docs/patterns/forms', description: 'Dialog form validation.' },
          ]}
        />
      </DocsSection>
    </DocsPage>
  );
}

import { PageHeader } from '@neo-admin/core';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Stack,
  Text,
} from 'neobrutalism-ui-react';
import { ShowcaseSection } from '../../components/showcase-section';

export default function PaginationPage() {
  return (
    <Stack gap="xl">
      <PageHeader
        title="Pagination"
        badge="Showcase"
        description="Page navigation controls for tables and lists."
      />

      <ShowcaseSection title="Basic" description="Previous, numbered pages, and next">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ShowcaseSection>

      <ShowcaseSection title="With ellipsis" description="Large page count pattern">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>…</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>8</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive>9</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>10</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <Text size="sm" className="mt-4 opacity-60">
          Pair with DataTable paginated prop for full table pagination.
        </Text>
      </ShowcaseSection>
    </Stack>
  );
}

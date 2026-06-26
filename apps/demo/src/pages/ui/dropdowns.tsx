import { PageHeader } from '@neo-admin/core';
import { Cluster, DropdownMenu, DropdownMenuItem, DropdownMenuSeparator, Stack, Text } from 'neobrutalism-ui-react';
import { ShowcaseSection } from '../../components/showcase-section';

export default function DropdownsPage() {
  return (
    <Stack gap="xl">
      <PageHeader
        title="Dropdowns"
        badge="Showcase"
        description="Dropdown menus for actions, filters, and context menus."
      />

      <ShowcaseSection title="Action menu" description="Edit, duplicate, and delete actions">
        <DropdownMenu trigger="Open Menu">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuItem>Share</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenu>
      </ShowcaseSection>

      <ShowcaseSection title="Multiple triggers" description="Different menu labels">
        <Cluster gap="md" wrap="wrap">
          <DropdownMenu trigger="Actions">
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Export</DropdownMenuItem>
          </DropdownMenu>
          <DropdownMenu trigger="More options">
            <DropdownMenuItem>Archive</DropdownMenuItem>
            <DropdownMenuItem>Move to folder</DropdownMenuItem>
          </DropdownMenu>
        </Cluster>
        <Text size="sm" className="mt-4 opacity-60">
          Use dropdowns in table row actions and card overflow menus.
        </Text>
      </ShowcaseSection>
    </Stack>
  );
}

import { APP_NAME, DashboardSection, embeddedDataTableClassName, files, KpiStatRow, PageHeader, widgetCardProps, widgetCardShellClassName, widgetCardTableContentClassName } from '@neo-admin/core';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  Cluster,
  DataTable,
  Stack,
  Text,
} from 'neobrutalism-ui-react';
import { File, FileImage, FileText, FileVideo, Folder, Grid, HardDrive, List, Upload } from 'lucide-react';
import { useState } from 'react';

const typeIcons: Record<string, typeof Folder> = {
  folder: Folder,
  image: FileImage,
  document: FileText,
  video: FileVideo,
};

export default function FilesPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <Stack gap="xl">
      <PageHeader
        title="File Manager"
        badge="Storage"
        description="Browse files in grid or list view with breadcrumbs and storage overview."
        actions={
          <Cluster gap="sm">
            <Button tone="primary" size="sm">
              <Upload className="mr-1.5 size-4" />
              Upload
            </Button>
            <Button tone={view === 'grid' ? 'primary' : 'secondary'} size="sm" onClick={() => setView('grid')} aria-label="Grid view">
              <Grid className="size-4" />
            </Button>
            <Button tone={view === 'list' ? 'primary' : 'secondary'} size="sm" onClick={() => setView('list')} aria-label="List view">
              <List className="size-4" />
            </Button>
          </Cluster>
        }
      />

      <KpiStatRow
        items={[
          { label: 'Total Files', value: String(files.length), icon: <File className="size-5" />, tone: 'yellow' },
          { label: 'Storage Used', value: '48.5 MB', change: '12% free', changeType: 'up', icon: <HardDrive className="size-5" />, tone: 'mint' },
          { label: 'Folders', value: '1', icon: <Folder className="size-5" />, tone: 'lavender' },
        ]}
      />

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
            <BreadcrumbSeparator />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Documents</BreadcrumbLink>
            <BreadcrumbSeparator />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbPage>{APP_NAME}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <DashboardSection title="Files" description={view === 'grid' ? 'Grid view' : 'List view with sortable columns'}>
        {view === 'grid' ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {files.map((f) => {
              const Icon = typeIcons[f.type] ?? File;
              return (
                <Card
                  key={f.id}
                  tone="cream"
                  className="cursor-pointer shadow-[4px_4px_0_0_var(--nb-shadow)] transition-transform hover:-translate-y-0.5"
                >
                  <CardContent className="flex flex-col items-center gap-2 pt-6 text-center">
                    <div className="rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-yellow) p-3">
                      <Icon className="size-8" />
                    </div>
                    <Text weight="bold" size="sm">
                      {f.name}
                    </Text>
                    <Text size="xs" className="opacity-60">
                      {f.size} · {f.modified}
                    </Text>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card tone="cream" className={`${widgetCardShellClassName} shadow-[4px_4px_0_0_var(--nb-shadow)]`} {...widgetCardProps}>
            <CardContent className={widgetCardTableContentClassName}>
              <DataTable
                className={embeddedDataTableClassName}
                data={[...files]}
                columns={[
                  { id: 'name', header: 'Name', accessorKey: 'name', sortable: true },
                  { id: 'type', header: 'Type', accessorKey: 'type' },
                  { id: 'size', header: 'Size', accessorKey: 'size' },
                  { id: 'modified', header: 'Modified', accessorKey: 'modified', sortable: true },
                ]}
              />
            </CardContent>
          </Card>
        )}
      </DashboardSection>
    </Stack>
  );
}

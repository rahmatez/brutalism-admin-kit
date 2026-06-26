import { APP_NAME, PageHeader } from '@neo-admin/core';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Stack,
} from 'neobrutalism-ui-react';
import { useNavigate } from 'react-router-dom';
import { ShowcaseSection } from '../../components/showcase-section';

export default function BreadcrumbsPage() {
  const navigate = useNavigate();

  const go = (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <Stack gap="xl">
      <PageHeader
        title="Breadcrumbs"
        badge="Showcase"
        description="Navigation breadcrumb trails for hierarchical pages."
      />

      <ShowcaseSection title="Default" description="Three-level navigation path">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboards/analytics" onClick={go('/dashboards/analytics')}>
                Home
              </BreadcrumbLink>
              <BreadcrumbSeparator />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboards/analytics" onClick={go('/dashboards/analytics')}>
                Dashboards
              </BreadcrumbLink>
              <BreadcrumbSeparator />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>Analytics</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ShowcaseSection>

      <ShowcaseSection title="Deep path" description="File manager style breadcrumbs">
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
              <BreadcrumbLink href="#">Projects</BreadcrumbLink>
              <BreadcrumbSeparator />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>{APP_NAME}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ShowcaseSection>
    </Stack>
  );
}

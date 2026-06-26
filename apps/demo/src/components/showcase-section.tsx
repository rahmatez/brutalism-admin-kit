import { DashboardSection } from '@neo-admin/core';
import { Card, CardContent } from 'neobrutalism-ui-react';
import type { ReactNode } from 'react';

interface ShowcaseSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function ShowcaseSection({ title, description, children }: ShowcaseSectionProps) {
  return (
    <DashboardSection title={title} description={description}>
      <Card tone="cream" className="shadow-[4px_4px_0_0_var(--nb-shadow)]">
        <CardContent className="pt-6">{children}</CardContent>
      </Card>
    </DashboardSection>
  );
}

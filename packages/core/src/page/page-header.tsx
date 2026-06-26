import { Badge, Cluster, Stack } from 'neobrutalism-ui-react';
import type { ReactNode } from 'react';
import { widgetSectionDescriptionClassName } from '../widgets/widget-card-styles';

export interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  actions?: ReactNode;
}

export function PageHeader({ title, description, badge, actions }: PageHeaderProps) {
  return (
    <header className="border-b-2 border-(--nb-border) pb-6">
      <Cluster justify="between" align="start" wrap="wrap" className="gap-4">
        <Stack gap="xs" className="min-w-0 flex-1">
          <Cluster gap="md" align="baseline" wrap="wrap">
            <h1 className="font-heading text-2xl font-black uppercase leading-snug tracking-tight md:text-3xl">
              {title}
            </h1>
            {badge ? (
              <Badge tone="primary" className="shrink-0">
                {badge}
              </Badge>
            ) : null}
          </Cluster>
          {description ? (
            <p className={`max-w-2xl ${widgetSectionDescriptionClassName}`}>{description}</p>
          ) : null}
        </Stack>
        {actions ? <Cluster gap="sm">{actions}</Cluster> : null}
      </Cluster>
    </header>
  );
}

export interface FilterBarProps {
  children: ReactNode;
}

export function FilterBar({ children }: FilterBarProps) {
  return (
    <Cluster
      gap="sm"
      wrap="wrap"
      className="rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-surface) p-3 shadow-[3px_3px_0_0_var(--nb-shadow)]"
    >
      {children}
    </Cluster>
  );
}

export function PageActions({ children }: { children: ReactNode }) {
  return <Cluster gap="sm">{children}</Cluster>;
}

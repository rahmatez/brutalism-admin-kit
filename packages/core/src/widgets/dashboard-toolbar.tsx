import { Button, Cluster, Select, SelectOption } from 'neobrutalism-ui-react';
import { Download, RefreshCw } from 'lucide-react';
import type { ReactNode } from 'react';
import {
  widgetSectionClassName,
  widgetSectionDescriptionClassName,
  widgetSectionHeaderClassName,
  widgetSectionTitleClassName,
} from './widget-card-styles';

export interface DashboardToolbarProps {
  period?: string;
  onPeriodChange?: (value: string) => void;
  onRefresh?: () => void;
  onExport?: () => void;
  extra?: ReactNode;
}

export function DashboardToolbar({
  period = '30d',
  onPeriodChange,
  onRefresh,
  onExport,
  extra,
}: DashboardToolbarProps) {
  return (
    <Cluster gap="sm" wrap="wrap" justify="between" align="center" className="rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-surface) p-3 shadow-[3px_3px_0_0_var(--nb-shadow)]">
      <Cluster gap="sm" align="center">
        <Select
          value={period}
          onValueChange={(v) => v && onPeriodChange?.(String(v))}
          className="min-w-36"
        >
          <SelectOption value="7d">Last 7 days</SelectOption>
          <SelectOption value="30d">Last 30 days</SelectOption>
          <SelectOption value="90d">Last 90 days</SelectOption>
          <SelectOption value="12m">Last 12 months</SelectOption>
        </Select>
        {extra}
      </Cluster>
      <Cluster gap="sm">
        {onRefresh ? (
          <Button tone="secondary" size="sm" onClick={onRefresh}>
            <RefreshCw className="mr-1.5 size-4" />
            Refresh
          </Button>
        ) : null}
        {onExport ? (
          <Button tone="secondary" size="sm" onClick={onExport}>
            <Download className="mr-1.5 size-4" />
            Export
          </Button>
        ) : null}
      </Cluster>
    </Cluster>
  );
}

export function DashboardSection({
  title,
  description,
  children,
}: {
  title?: string;
  description?: string;
  children: ReactNode;
}) {
  if (!title) return <>{children}</>;
  return (
    <section className={widgetSectionClassName} data-widget-section>
      <div className={widgetSectionHeaderClassName} data-widget-section-header>
        <h2 className={widgetSectionTitleClassName} data-widget-section-title>
          {title}
        </h2>
        {description ? (
          <p className={widgetSectionDescriptionClassName} data-widget-section-description>
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

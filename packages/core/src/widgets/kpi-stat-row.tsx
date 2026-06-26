import { Badge, Card, CardContent, Cluster } from 'neobrutalism-ui-react';
import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';
import type { ReactNode } from 'react';

export type KpiTone = 'yellow' | 'mint' | 'pink' | 'lavender' | 'cream' | 'blue';

export interface KpiItem {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'up' | 'down' | 'neutral';
  icon?: ReactNode;
  tone?: KpiTone;
}

const defaultTones: readonly KpiTone[] = ['yellow', 'mint', 'pink', 'lavender'];

function getKpiGridClass(count: number) {
  if (count <= 1) return 'grid-cols-1';
  if (count === 2) return 'grid-cols-1 sm:grid-cols-2';
  if (count === 3) return 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3';
  return 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-4';
}

function TrendBadge({ change, changeType }: { change: string; changeType?: 'up' | 'down' | 'neutral' }) {
  const tone = changeType === 'up' ? 'success' : changeType === 'down' ? 'danger' : 'secondary';
  const Icon = changeType === 'up' ? ArrowUpRight : changeType === 'down' ? ArrowDownRight : Minus;
  return (
    <Badge tone={tone} className="inline-flex shrink-0 items-center gap-1">
      <Icon className="size-3" aria-hidden />
      {change}
    </Badge>
  );
}

export function KpiStatRow({ items }: { items: readonly KpiItem[] }) {
  return (
    <div className={`grid gap-4 ${getKpiGridClass(items.length)}`}>
      {items.map((item, i) => {
        const tone = item.tone ?? defaultTones[i % defaultTones.length]!;

        return (
          <Card key={`${item.label}-${i}`} tone={tone} shadow="hard" className="h-full gap-0 overflow-hidden py-0">
            <CardContent className="flex h-full flex-col gap-4 p-5">
              <Cluster justify="between" align="start" className="min-h-11">
                {item.icon ? (
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-background) shadow-[3px_3px_0_0_var(--nb-shadow)]">
                    {item.icon}
                  </span>
                ) : (
                  <span className="size-11 shrink-0" aria-hidden />
                )}
                {item.change ? (
                  <TrendBadge change={item.change} changeType={item.changeType} />
                ) : (
                  <span className="size-11 shrink-0" aria-hidden />
                )}
              </Cluster>
              <div className="mt-auto space-y-2">
                <p className="font-heading text-3xl leading-tight font-black tracking-tight">
                  {item.value}
                </p>
                <p className="text-sm font-bold leading-snug opacity-70">{item.label}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <Card tone="cream" className="gap-0 py-0">
      <CardContent className="space-y-2 p-8 text-center">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm leading-relaxed opacity-70">{description}</p>
        {action ? <div className="pt-2">{action}</div> : null}
      </CardContent>
    </Card>
  );
}

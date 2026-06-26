import { Badge, Callout, Cluster, Stack, Text } from 'neobrutalism-ui-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { DocsCodeBlock } from './docs-layout';

export const DEMO_URL = import.meta.env.VITE_DEMO_URL ?? 'http://localhost:5174';

export function DocsSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="docs-section">
      <Stack gap="sm" className="docs-section-header">
        <h2 className="font-heading text-xl font-black uppercase tracking-tight md:text-2xl">{title}</h2>
        {description ? <Text className="opacity-70">{description}</Text> : null}
      </Stack>
      <div className="docs-section-body">{children}</div>
    </section>
  );
}

export function DocsInlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-sm border border-(--nb-border) bg-(--nb-cream) px-1.5 py-0.5 font-mono text-[0.875em]">
      {children}
    </code>
  );
}

export function DocsLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="font-bold underline decoration-2 underline-offset-2 hover:opacity-80">
      {children}
    </Link>
  );
}

export function DocsSteps({
  steps,
}: {
  steps: readonly {
    title: string;
    description?: string;
    code?: string;
    children?: ReactNode;
  }[];
}) {
  return (
    <ol className="docs-steps">
      {steps.map((step, index) => (
        <li key={step.title} className="docs-step">
          <div className="docs-step-marker" aria-hidden>
            {String(index + 1).padStart(2, '0')}
          </div>
          <Stack gap="sm" className="min-w-0 flex-1">
            <Text weight="bold">{step.title}</Text>
            {step.description ? <Text className="opacity-70">{step.description}</Text> : null}
            {step.code ? <DocsCodeBlock code={step.code} /> : null}
            {step.children}
          </Stack>
        </li>
      ))}
    </ol>
  );
}

export function DocsCallout({
  tone = 'cream',
  title,
  children,
}: {
  tone?: 'cream' | 'yellow' | 'mint' | 'lavender';
  title?: string;
  children: ReactNode;
}) {
  return (
    <Callout tone={tone} className="docs-callout">
      {title ? <Text weight="bold">{title}</Text> : null}
      <div className="docs-callout-body">{children}</div>
    </Callout>
  );
}

export function DocsPackageTable({
  rows,
}: {
  rows: readonly { name: string; version: string; note?: string }[];
}) {
  return (
    <div className="docs-table-wrap overflow-x-auto rounded-(--nb-radius) border-2 border-(--nb-border) shadow-[3px_3px_0_0_var(--nb-shadow)]">
      <table className="docs-table w-full text-sm">
        <thead>
          <tr>
            <th scope="col">Package</th>
            <th scope="col">Version</th>
            <th scope="col">Note</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>
                <DocsInlineCode>{row.name}</DocsInlineCode>
              </td>
              <td>{row.version}</td>
              <td className="opacity-70">{row.note ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DocsPropList({
  items,
}: {
  items: readonly { name: string; type: string; description: string }[];
}) {
  return (
    <div className="docs-table-wrap overflow-x-auto rounded-(--nb-radius) border-2 border-(--nb-border) shadow-[3px_3px_0_0_var(--nb-shadow)]">
      <table className="docs-table w-full text-sm">
        <thead>
          <tr>
            <th scope="col">Prop</th>
            <th scope="col">Type</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td>
                <DocsInlineCode>{item.name}</DocsInlineCode>
              </td>
              <td className="font-mono text-xs opacity-80">{item.type}</td>
              <td className="opacity-70">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DocsNextLinks({
  items,
}: {
  items: readonly { label: string; path: string; description: string; external?: boolean }[];
}) {
  return (
    <Cluster gap="sm" wrap="wrap" className="docs-next-links">
      {items.map((item) => {
        const content = (
          <Stack gap="xs">
            <Cluster gap="sm" align="center">
              <Text weight="bold">{item.label}</Text>
              <Badge tone="secondary" className="text-[10px]">
                Next
              </Badge>
            </Cluster>
            <Text size="sm" className="opacity-70 group-hover:opacity-90">
              {item.description}
            </Text>
          </Stack>
        );

        if (item.external) {
          return (
            <a
              key={item.path}
              href={item.path}
              target="_blank"
              rel="noreferrer"
              className="docs-next-link group"
            >
              {content}
            </a>
          );
        }

        return (
          <Link key={item.path} to={item.path} className="docs-next-link group">
            {content}
          </Link>
        );
      })}
    </Cluster>
  );
}

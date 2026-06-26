import { APP_AUTHOR, APP_GITHUB_URL, APP_NAME } from '@neo-admin/core';
import { docsNavGroups } from '@/docs/admin.navigation';
import {
  Badge,
  Button,
  Card,
  CardContent,
  Cluster,
  Stack,
  Text,
} from 'neobrutalism-ui-react';
import {
  ArrowRight,
  ExternalLink,
  Github,
  LayoutDashboard,
  Layers,
  Palette,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrutalCodeTerminal } from '@/components/brutal-code-terminal';

const DEMO_URL = import.meta.env.VITE_DEMO_URL ?? 'http://localhost:5174';

const highlights = [
  {
    icon: LayoutDashboard,
    title: '10 dashboards',
    description: 'Analytics, e-commerce, CRM, SaaS, finance, logistics, and AI — charts, tables, KPIs ready to ship.',
    tone: 'mint' as const,
    href: '/docs/dashboards/analytics',
    span: 'md:col-span-2',
    featured: true,
  },
  {
    icon: Layers,
    title: '6 layout modes',
    description: 'Classic, sectioned, collapsible, nested, floating, and docs sidebar.',
    tone: 'lavender' as const,
    href: '/docs/sidebar-variants',
    span: '',
    featured: false,
  },
  {
    icon: Terminal,
    title: 'Patterns',
    description: 'Command palette, DataTable, charts, forms, toasts.',
    tone: 'yellow' as const,
    href: '/docs/patterns/command-palette',
    span: '',
    featured: false,
  },
  {
    icon: Palette,
    title: 'Theme tokens',
    description: 'CSS variables & provider overrides.',
    tone: 'pink' as const,
    href: '/docs/customization/theming',
    span: '',
    featured: false,
  },
] as const;

const stack = ['React 19', 'Vite 7', 'Tailwind v4', 'Router 7', 'Recharts', 'TypeScript'];

const quickStartCode = `pnpm install
pnpm dev:demo  # :5174
pnpm dev:docs  # :5175`;

const steps = [
  { step: '01', title: 'Install', path: '/docs/installation', label: 'Clone & pnpm install' },
  { step: '02', title: 'Bootstrap', path: '/docs/quick-start', label: 'AppProviders + AdminShell' },
  { step: '03', title: 'Ship', path: '/docs/introduction', label: 'Pages, widgets, navigation' },
];

export default function DocsHomePage() {
  const popularLinks = docsNavGroups.flatMap((g) => g.items).slice(0, 8);

  return (
    <div className="docs-landing min-h-svh bg-(--nb-background) text-(--nb-foreground)">
      <header className="docs-landing-header sticky top-0 z-30 px-4 md:px-6">
        <Cluster justify="between" align="center" className="docs-landing-header-inner mx-auto max-w-6xl">
          <Link to="/" className="docs-landing-brand group">
            <span className="docs-landing-brand-icon" aria-hidden>
              <Zap className="size-5" />
            </span>
            <Stack gap="none">
              <span className="docs-landing-brand-title font-heading font-black uppercase leading-tight">
                {APP_NAME}
              </span>
              <span className="docs-landing-brand-subtitle font-bold uppercase tracking-widest opacity-50">
                Docs
              </span>
            </Stack>
          </Link>

          <Cluster gap="sm">
            <Button
              tone="secondary"
              size="sm"
              href={APP_GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex"
            >
              <Github className="mr-1.5 size-4" />
              GitHub
            </Button>
            <Link to="/docs/installation">
              <Button size="sm">
                Get started
                <ArrowRight className="ml-1.5 size-4" />
              </Button>
            </Link>
          </Cluster>
        </Cluster>
      </header>

      <main>
        <section className="docs-landing-hero docs-grid-bg relative overflow-hidden border-b-2 border-(--nb-border)">
          <div className="docs-hero-glow pointer-events-none absolute inset-0" aria-hidden />
          <div className="docs-landing-hero-noise pointer-events-none absolute inset-0" aria-hidden />

          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:py-20">
            <Stack gap="lg" className="min-w-0">
              <Cluster gap="sm" wrap="wrap">
                <Badge tone="primary" className="docs-landing-pill">
                  <Sparkles className="mr-1 size-3.5" aria-hidden />
                  Open source
                </Badge>
                <Badge tone="secondary" className="docs-landing-pill">
                  neobrutalism-ui-react
                </Badge>
              </Cluster>

              <Stack gap="md">
                <h1 className="docs-landing-title font-heading font-black uppercase tracking-tight">
                  <span className="block">Brutalism</span>
                  <span className="docs-landing-title-accent block">Admin Kit</span>
                </h1>
                <Text className="max-w-xl text-base leading-relaxed opacity-80 md:text-lg">
                  A bold, production-ready admin template — dashboards, apps, auth, and layout recipes.
                  Built on{' '}
                  <a
                    href="https://www.npmjs.com/package/neobrutalism-ui-react"
                    className="font-bold underline decoration-2 underline-offset-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    neobrutalism-ui-react
                  </a>
                  , not another generic gray dashboard.
                </Text>
              </Stack>

              <Cluster gap="sm" wrap="wrap">
                <Link to="/docs/installation">
                  <Button size="lg">Start building</Button>
                </Link>
                <Button tone="secondary" size="lg" href={DEMO_URL} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-1.5 size-4" />
                  Live demo
                </Button>
              </Cluster>

              <div className="docs-landing-stat-strip" role="list" aria-label="Kit highlights">
                {[
                  { value: '10', label: 'Dashboards' },
                  { value: '40+', label: 'Pages' },
                  { value: '6', label: 'Layouts' },
                  { value: '50+', label: 'Components' },
                ].map((item) => (
                  <div key={item.label} className="docs-landing-stat" role="listitem">
                    <span className="docs-landing-stat-value">{item.value}</span>
                    <span className="docs-landing-stat-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </Stack>

            <div className="docs-landing-preview-wrap min-w-0">
              <div className="docs-landing-preview" aria-hidden>
                <div className="docs-landing-preview-chrome">
                  <span className="docs-landing-preview-dot" />
                  <span className="docs-landing-preview-dot" />
                  <span className="docs-landing-preview-dot" />
                  <span className="docs-landing-preview-url">localhost:5174/dashboards</span>
                </div>
                <div className="docs-landing-preview-body">
                  <div className="docs-landing-preview-sidebar">
                    <div className="docs-landing-preview-logo" />
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`docs-landing-preview-nav ${i === 1 ? 'is-active' : ''}`}
                      />
                    ))}
                  </div>
                  <div className="docs-landing-preview-main">
                    <div className="docs-landing-preview-header" />
                    <div className="docs-landing-preview-kpis">
                      <div className="docs-landing-preview-kpi tone-mint" />
                      <div className="docs-landing-preview-kpi tone-yellow" />
                      <div className="docs-landing-preview-kpi tone-pink" />
                    </div>
                    <div className="docs-landing-preview-chart" />
                  </div>
                </div>
              </div>
              <div className="docs-landing-preview-badge">
                <LayoutDashboard className="size-4" aria-hidden />
                <span>Preview · Analytics dashboard</span>
              </div>
            </div>
          </div>
        </section>

        <section className="docs-landing-stack-section mx-auto max-w-6xl px-4 md:px-6">
          <Cluster gap="sm" wrap="wrap" className="docs-landing-stack">
            {stack.map((item) => (
              <span key={item} className="docs-landing-stack-item">
                {item}
              </span>
            ))}
          </Cluster>
        </section>

        <section className="border-y-2 border-(--nb-border) bg-(--nb-paper) py-14 md:py-18">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Stack gap="lg">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <Stack gap="sm" className="max-w-2xl">
                  <Text size="xs" weight="bold" className="font-mono uppercase tracking-widest opacity-50">
                    Features
                  </Text>
                  <h2 className="font-heading text-3xl font-black uppercase tracking-tight md:text-4xl">
                    Everything in one kit
                  </h2>
                  <Text className="opacity-70">
                    Real pages and shared primitives — copy, customize, and deploy without rebuilding the shell.
                  </Text>
                </Stack>
                <Link to="/docs/introduction" className="shrink-0">
                  <Button tone="secondary">
                    View introduction
                    <ArrowRight className="ml-1.5 size-4" />
                  </Button>
                </Link>
              </div>

              <div className="docs-landing-bento">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`docs-landing-bento-item group ${item.span}`}
                    >
                      <Card
                        tone={item.tone}
                        shadow="hard"
                        className="h-full overflow-hidden transition-[transform,box-shadow] duration-200 group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0_0_var(--nb-shadow)]"
                      >
                        <CardContent
                          className={`docs-landing-bento-content flex h-full items-start gap-3.5 ${item.featured ? 'p-5 md:p-6' : 'p-4'}`}
                        >
                          <div className="docs-landing-feature-icon shrink-0">
                            <Icon className="size-5" aria-hidden />
                          </div>
                          <div className="min-w-0 flex-1 space-y-1">
                            <h3
                              className={`font-heading font-black leading-tight ${item.featured ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}
                            >
                              {item.title}
                            </h3>
                            <Text
                              size="sm"
                              className={`leading-snug opacity-80 ${item.featured ? 'text-sm md:text-base' : ''}`}
                            >
                              {item.description}
                            </Text>
                          </div>
                          <ArrowRight
                            className="docs-landing-bento-arrow mt-0.5 size-4 shrink-0 opacity-35 transition-all group-hover:translate-x-0.5 group-hover:opacity-100 md:size-5"
                            aria-hidden
                          />
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </Stack>
          </div>
        </section>

        <section className="docs-landing-quickstart mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
          <div className="docs-landing-quickstart-grid">
            <Stack gap="sm" className="docs-landing-quickstart-intro max-w-lg">
              <Text size="xs" weight="bold" className="font-mono uppercase tracking-widest opacity-50">
                Quick start
              </Text>
              <h2 className="font-heading text-3xl font-black uppercase tracking-tight md:text-4xl">
                Up and running in minutes
              </h2>
              <Text className="opacity-70">
                Monorepo with demo and docs apps — install once, explore every page locally.
              </Text>
            </Stack>

            <div className="docs-landing-steps">
              {steps.map((item) => (
                <Link key={item.path} to={item.path} className="docs-landing-step group">
                  <span className="docs-landing-step-index">{item.step}</span>
                  <Stack gap="xs" className="min-w-0 flex-1">
                    <Text weight="bold" className="text-base md:text-lg">
                      {item.title}
                    </Text>
                    <Text size="sm" className="opacity-70">
                      {item.label}
                    </Text>
                  </Stack>
                  <ArrowRight className="docs-landing-step-arrow size-5 shrink-0" aria-hidden />
                </Link>
              ))}
            </div>

            <div className="docs-landing-quickstart-terminal">
              <BrutalCodeTerminal title="TERMINAL" code={quickStartCode} language="bash" />
            </div>
          </div>
        </section>

        <section className="bg-(--nb-cream) py-12 md:py-14">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Stack gap="lg">
              <Stack gap="sm">
                <Text size="xs" weight="bold" className="font-mono uppercase tracking-widest opacity-50">
                  Documentation
                </Text>
                <h2 className="font-heading text-2xl font-black uppercase tracking-tight md:text-3xl">
                  Popular guides
                </h2>
              </Stack>
              <div className="docs-landing-doc-grid">
                {popularLinks.map((link) => (
                  <Link key={link.path} to={link.path} className="docs-landing-doc-card group">
                    <Text weight="bold" className="group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                      {link.label}
                    </Text>
                    <ArrowRight className="size-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-60" />
                  </Link>
                ))}
              </div>
            </Stack>
          </div>
        </section>

        <section className="docs-landing-cta border-t-2 border-(--nb-border)">
          <div className="docs-landing-cta-inner mx-auto max-w-6xl px-4 md:px-6">
            <Card tone="lavender" shadow="hard" className="overflow-hidden">
              <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:gap-6 md:p-5">
                <Stack gap="xs" className="min-w-0 flex-1">
                  <h2 className="font-heading text-xl font-black uppercase tracking-tight md:text-2xl">
                    Ready to build something loud?
                  </h2>
                  <Text size="sm" className="opacity-80">
                    Open the demo, skim the docs, and drop AdminShell into your next Vite app.
                  </Text>
                </Stack>
                <Cluster gap="sm" wrap="wrap" className="shrink-0">
                  <Button href={DEMO_URL} target="_blank" rel="noreferrer">
                    Open demo
                  </Button>
                  <Link to="/docs/quick-start">
                    <Button tone="secondary">Quick start</Button>
                  </Link>
                </Cluster>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-(--nb-border) bg-(--nb-paper) px-4 py-8 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Stack gap="xs">
            <Text weight="bold" className="font-heading uppercase">
              {APP_NAME}
            </Text>
            <Text size="sm" className="opacity-60">
              Made by{' '}
              <a
                href={APP_GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="font-bold underline decoration-2 underline-offset-2 hover:opacity-80"
              >
                {APP_AUTHOR}
              </a>
              {' · '}
              <a
                href="https://www.rahmatez.dev/"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline decoration-2 underline-offset-2 hover:opacity-80"
              >
                rahmatez.dev
              </a>
            </Text>
          </Stack>
          <Cluster gap="md" wrap="wrap">
            <a href={DEMO_URL} target="_blank" rel="noreferrer" className="docs-landing-nav-link text-sm">
              Demo app
            </a>
            <Link to="/docs/faq" className="docs-landing-nav-link text-sm">
              FAQ
            </Link>
            <a href={APP_GITHUB_URL} target="_blank" rel="noreferrer" className="docs-landing-nav-link text-sm">
              GitHub
            </a>
          </Cluster>
        </div>
      </footer>
    </div>
  );
}

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Cluster,
  IconButton,
  SidebarTrigger,
  Text,
} from 'neobrutalism-ui-react';
import { Bell, PanelLeft, Search } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { commandItems } from '../navigation/nav.config';
import { getNavBreadcrumbs, getPageTitle } from '../navigation/route-utils';
import type { BreadcrumbOptions, CommandItem, ShellChromeLinks } from '../navigation/types';
import { useCommandPaletteContext } from '../providers/command-palette-provider';
import { AppCommandPalette } from './app-command-palette';
import { UserAccountMenu } from './user-account-menu';

function SearchTrigger({ onClick, placeholder }: { onClick: () => void; placeholder: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="hidden h-10 min-w-48 flex-1 items-center gap-2 rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-surface) px-3 text-left text-sm font-medium shadow-[2px_2px_0_0_var(--nb-shadow)] transition-colors hover:bg-(--nb-yellow) md:flex lg:min-w-64"
      aria-label="Open command palette"
    >
      <Search className="size-4 shrink-0 opacity-50" />
      <span className="flex-1 truncate opacity-60">{placeholder}</span>
      <kbd className="hidden rounded border border-(--nb-border) bg-(--nb-cream) px-1.5 py-0.5 font-mono text-[10px] font-bold lg:inline">
        ⌘K
      </kbd>
    </button>
  );
}

function BreadcrumbSegment({
  label,
  path,
  isLast,
  onNavigate,
}: {
  label: string;
  path?: string;
  isLast: boolean;
  onNavigate: (path: string) => void;
}) {
  if (isLast) {
    return <BreadcrumbPage>{label}</BreadcrumbPage>;
  }

  if (path) {
    return (
      <>
        <BreadcrumbLink
          href={path}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(path);
          }}
        >
          {label}
        </BreadcrumbLink>
        <BreadcrumbSeparator />
      </>
    );
  }

  return (
    <>
      <span className="font-mono text-sm font-bold opacity-60">{label}</span>
      <BreadcrumbSeparator />
    </>
  );
}

export function AppHeader({
  commandPaletteItems = commandItems,
  searchPlaceholder = 'Search pages, dashboards, and actions...',
  chromeLinks,
  breadcrumbOptions,
}: {
  commandPaletteItems?: readonly CommandItem[];
  searchPlaceholder?: string;
  chromeLinks?: ShellChromeLinks;
  breadcrumbOptions?: BreadcrumbOptions;
} = {}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { open, setOpen } = useCommandPaletteContext();
  const crumbs = getNavBreadcrumbs(pathname, breadcrumbOptions);
  const pageTitle = getPageTitle(pathname);

  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(!open);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, setOpen]);

  return (
    <>
      <header className="sticky top-0 z-20 flex min-h-[4.5rem] shrink-0 items-center gap-2 border-b-2 border-(--nb-border) bg-(--nb-background) px-4 py-3 shadow-[0_4px_0_0_var(--nb-shadow)] md:gap-3 md:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-3">
          <SidebarTrigger
            className="size-9 shrink-0 justify-center p-0 lg:hidden"
            aria-label="Toggle navigation"
          >
            <PanelLeft className="size-4" />
          </SidebarTrigger>

          <Text
            weight="bold"
            size="sm"
            className="min-w-0 truncate leading-tight uppercase md:hidden"
          >
            {pageTitle}
          </Text>

          <Breadcrumb className="hidden min-w-0 flex-1 md:block">
            <BreadcrumbList className="flex-wrap items-center">
              {crumbs.map((crumb, i) => (
                <BreadcrumbItem key={`${crumb.label}-${i}`}>
                  <BreadcrumbSegment
                    label={crumb.label}
                    path={crumb.path}
                    isLast={i === crumbs.length - 1}
                    onNavigate={navigate}
                  />
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <SearchTrigger onClick={() => setOpen(true)} placeholder={searchPlaceholder} />

        <Cluster gap="sm" className="shrink-0" align="center">
          <IconButton
            aria-label="Open command palette"
            tone="secondary"
            size="sm"
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Search className="size-4" />
          </IconButton>

          <IconButton
            aria-label="Notifications, 3 unread"
            tone="secondary"
            size="sm"
            className="relative"
          >
            <Bell className="size-4" />
            <span
              aria-hidden
              className="pointer-events-none absolute -top-1 -right-1 z-10 flex size-5 min-w-5 items-center justify-center rounded-full border-2 border-(--nb-border) bg-(--nb-danger) px-0.5 text-[10px] leading-none font-bold text-white"
            >
              3
            </span>
          </IconButton>

          <UserAccountMenu chromeLinks={chromeLinks} />
        </Cluster>
      </header>

      <AppCommandPalette
        open={open}
        onOpenChange={setOpen}
        items={commandPaletteItems}
        placeholder={searchPlaceholder}
      />
    </>
  );
}

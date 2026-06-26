import {
  Avatar,
  Badge,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Input,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarHeaderLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuButtonLabel,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  Stack,
  Text,
  useSidebar,
} from 'neobrutalism-ui-react';
import { ChevronDown, Search, Settings, Zap } from 'lucide-react';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNavIcon } from '../icons/nav-icons';
import { APP_NAME, fullNav } from '../navigation/nav.config';
import { filterNavGroups } from '../navigation/route-utils';
import type {
  BreadcrumbOptions,
  CommandItem,
  NavGroup,
  NavItem,
  ShellChromeLinks,
  SidebarLayoutVariant,
} from '../navigation/types';
import { AppHeader } from '../header/app-header';
import { useIsMobile } from '../hooks/use-media-query';

export interface AdminShellProps {
  children: ReactNode;
  variant?: SidebarLayoutVariant;
  navGroups?: readonly NavGroup[];
  showHeader?: boolean;
  commandPaletteItems?: readonly CommandItem[];
  searchPlaceholder?: string;
  chromeLinks?: ShellChromeLinks;
  breadcrumbOptions?: BreadcrumbOptions;
}

function isPathActive(pathname: string, path?: string) {
  if (!path) return false;
  return pathname === path || pathname.startsWith(`${path}/`);
}

function SidebarBrand({ brandHref = '/dashboards/analytics' }: { brandHref?: string }) {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';

  return (
    <SidebarHeader className="shrink-0 gap-0 border-b-2 border-(--nb-border) px-3 py-3 group-data-[state=collapsed]/sidebar:px-2 group-data-[state=collapsed]/sidebar:py-2.5">
      {collapsed ? (
        <Stack gap="xs" align="center" className="w-full">
          <Link
            to={brandHref}
            className="flex items-center justify-center rounded-(--nb-radius) transition-colors hover:opacity-90"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-primary) shadow-[3px_3px_0_0_var(--nb-shadow)]">
              <Zap className="size-5" aria-hidden />
            </div>
          </Link>
        </Stack>
      ) : (
        <Link
          to={brandHref}
          className="flex min-w-0 items-center gap-3 rounded-(--nb-radius) transition-colors hover:opacity-90"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-primary) shadow-[3px_3px_0_0_var(--nb-shadow)]">
            <Zap className="size-5" aria-hidden />
          </div>
          <Stack gap="none" className="min-w-0">
            <SidebarHeaderLabel className="font-heading text-base leading-tight font-black uppercase">
              {APP_NAME}
            </SidebarHeaderLabel>
            <Text size="xs" className="mt-0.5 block opacity-60">
              Admin Kit v0.1
            </Text>
          </Stack>
        </Link>
      )}
    </SidebarHeader>
  );
}

function SidebarNavFilter({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const { state } = useSidebar();
  if (state === 'collapsed') return null;

  return (
    <div className="shrink-0 border-b-2 border-(--nb-border) bg-(--nb-paper) px-4 py-3">
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 opacity-50" />
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Filter menu..."
          size="sm"
          className="h-9 w-full border-2 bg-(--nb-background) pl-9 text-sm shadow-none"
          aria-label="Filter navigation"
        />
      </div>
    </div>
  );
}

function NavLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const Icon = getNavIcon(item.icon);
  const isActive = isPathActive(pathname, item.path);

  return (
    <SidebarMenuItem>
      <SidebarMenuButton tooltip={item.label} isActive={isActive} asChild className="py-2.5">
        <Link to={item.path!}>
          {Icon ? <Icon className="size-4 shrink-0" aria-hidden /> : null}
          <SidebarMenuButtonLabel>{item.label}</SidebarMenuButtonLabel>
          {item.badge ? (
            <Badge
              tone={isActive ? 'primary' : 'secondary'}
              className="ml-auto shrink-0 text-[10px] group-data-[state=collapsed]/sidebar:sr-only"
            >
              {item.badge}
            </Badge>
          ) : null}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

function NestedNavItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const Icon = getNavIcon(item.icon);
  const isChildActive = item.children?.some((c) => isPathActive(pathname, c.path)) ?? false;

  return (
    <SidebarMenuItem>
      <Collapsible defaultOpen={isChildActive} className="w-full">
        <CollapsibleTrigger className="flex w-full items-center gap-3 rounded-(--nb-radius) border-2 border-transparent px-3 py-3 font-mono text-sm font-bold transition-colors hover:border-(--nb-border) hover:bg-(--nb-yellow) hover:shadow-[2px_2px_0_0_var(--nb-shadow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--nb-border) focus-visible:ring-offset-2 data-[state=open]:border-(--nb-border) data-[state=open]:bg-(--nb-cream) data-[state=open]:shadow-[2px_2px_0_0_var(--nb-shadow)] [&[data-state=open]_svg:last-child]:rotate-180">
          {Icon ? <Icon className="size-4 shrink-0" aria-hidden /> : null}
          <SidebarMenuButtonLabel>{item.label}</SidebarMenuButtonLabel>
          <ChevronDown className="ml-auto size-4 transition-transform" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenu className="mt-1 ml-3 border-l-2 border-(--nb-border) pl-2">
            {item.children?.map((child) => (
              <NavLink key={child.id} item={child} pathname={pathname} />
            ))}
          </SidebarMenu>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}

function renderNavItems(items: readonly NavItem[], pathname: string, nested: boolean) {
  return items.map((item) => {
    if (nested && item.children?.length) {
      return <NestedNavItem key={item.id} item={item} pathname={pathname} />;
    }
    return <NavLink key={item.id} item={item} pathname={pathname} />;
  });
}

function SidebarUserFooter({ profileHref = '/user/profile' }: { profileHref?: string }) {
  return (
    <SidebarFooter className="shrink-0 gap-0 p-3 group-data-[state=collapsed]/sidebar:p-2">
      <Link
        to={profileHref}
        className="sidebar-user-link flex items-center gap-3 rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-cream) p-2.5 shadow-[2px_2px_0_0_var(--nb-shadow)] transition-colors hover:bg-(--nb-yellow) group-data-[state=collapsed]/sidebar:justify-center group-data-[state=collapsed]/sidebar:gap-0 group-data-[state=collapsed]/sidebar:p-0"
      >
        <Avatar alt="Admin User" tone="primary" className="size-9 shrink-0 group-data-[state=collapsed]/sidebar:size-8" />
        <Stack gap="xs" className="min-w-0 flex-1 group-data-[state=collapsed]/sidebar:sr-only">
          <Text size="sm" weight="bold" className="truncate">
            Admin User
          </Text>
          <Text size="xs" className="truncate opacity-60">
            admin@neo.admin
          </Text>
        </Stack>
        <Settings
          className="size-4 shrink-0 opacity-50 group-data-[state=collapsed]/sidebar:sr-only"
          aria-hidden
        />
      </Link>
    </SidebarFooter>
  );
}

function MobileSidebarOverlay({ onClose }: { onClose: () => void }) {
  return (
    <button
      type="button"
      aria-label="Close navigation"
      className="fixed inset-0 z-20 bg-black/40 lg:hidden"
      onClick={onClose}
    />
  );
}

function getSidebarProps(variant: SidebarLayoutVariant) {
  switch (variant) {
    case 'classic':
      return { variant: 'sidebar' as const, collapsible: false as const };
    case 'floating':
      return { variant: 'floating' as const, collapsible: 'icon' as const };
    case 'documentation':
      return { variant: 'sidebar' as const, collapsible: false as const };
    case 'collapsible':
      return { variant: 'sidebar' as const, collapsible: 'icon' as const };
    default:
      return { variant: 'sidebar' as const, collapsible: 'icon' as const };
  }
}

export function AdminShell({
  children,
  variant = 'collapsible',
  navGroups = fullNav,
  showHeader = true,
  commandPaletteItems,
  searchPlaceholder,
  chromeLinks,
  breadcrumbOptions,
}: AdminShellProps) {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();
  const [navQuery, setNavQuery] = useState('');
  const sidebarProps = getSidebarProps(variant);
  const isSectioned = variant === 'sectioned' || variant === 'documentation';
  const isNested = variant === 'nested';
  const desktopDefaultOpen = variant !== 'documentation';

  const [open, setOpen] = useState(() => (isMobile ? false : desktopDefaultOpen));

  useEffect(() => {
    if (isMobile) setOpen(false);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) setOpen(false);
  }, [pathname, isMobile]);

  const filteredGroups = useMemo(
    () => filterNavGroups(navGroups, navQuery),
    [navGroups, navQuery],
  );

  const effectiveCollapsible = isMobile ? false : sidebarProps.collapsible;

  return (
    <SidebarProvider
      open={open}
      onOpenChange={setOpen}
      collapsible={effectiveCollapsible}
      className="h-svh overflow-hidden"
    >
      {isMobile && open ? <MobileSidebarOverlay onClose={() => setOpen(false)} /> : null}
      <Sidebar
        variant={sidebarProps.variant}
        className={
          isMobile
            ? `fixed inset-y-0 left-0 z-30 w-[min(100%,16rem)] transition-transform duration-200 ${open ? 'translate-x-0' : '-translate-x-full'}`
            : 'sticky top-0 shrink-0 self-start'
        }
      >
        <SidebarBrand brandHref={chromeLinks?.brand} />
        <SidebarNavFilter value={navQuery} onChange={setNavQuery} />
        <SidebarContent className="min-h-0 flex-1 gap-1 overflow-y-auto px-2 py-2 group-data-[state=collapsed]/sidebar:px-1.5">
          {filteredGroups.length === 0 ? (
            <Text size="sm" className="px-4 py-6 text-center opacity-50">
              No menu items match &ldquo;{navQuery}&rdquo;
            </Text>
          ) : isSectioned ? (
            filteredGroups.map((group) => (
              <SidebarGroup key={group.id}>
                {group.label ? (
                  <SidebarGroupLabel className="px-4 pt-1 pb-1 text-[11px] font-black tracking-widest text-(--nb-foreground) uppercase opacity-80">
                    {group.label}
                  </SidebarGroupLabel>
                ) : null}
                <SidebarGroupContent>
                  <SidebarMenu>{renderNavItems(group.items, pathname, isNested)}</SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))
          ) : (
            <SidebarMenu>
              {filteredGroups.flatMap((g) => renderNavItems(g.items, pathname, isNested))}
            </SidebarMenu>
          )}
        </SidebarContent>
        <SidebarUserFooter profileHref={chromeLinks?.profile} />
        <SidebarRail />
      </Sidebar>
      <SidebarInset className="min-h-0 min-w-0 flex-1 overflow-y-auto">
        {showHeader ? (
          <AppHeader
            commandPaletteItems={commandPaletteItems}
            searchPlaceholder={searchPlaceholder}
            chromeLinks={chromeLinks}
            breadcrumbOptions={breadcrumbOptions}
            mobileSidebarOpen={open}
            onMobileSidebarToggle={() => setOpen((prev) => !prev)}
          />
        ) : null}
        <Stack gap="lg" className="flex-1 gap-y-8 p-4 md:p-6 lg:p-8">
          {children}
        </Stack>
      </SidebarInset>
    </SidebarProvider>
  );
}

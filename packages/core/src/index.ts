export { AppProviders } from './providers/app-providers';
export type { AppProvidersProps } from './providers/app-providers';
export { initPopoverAnchoring } from './utils/popover-anchor';
export { CommandPaletteProvider, useCommandPaletteContext } from './providers/command-palette-provider';

export { useCommandPalette } from './hooks/use-command-palette';
export { useMediaQuery, useIsMobile } from './hooks/use-media-query';
export { useSimulatedLoading } from './hooks/use-simulated-loading';

export { AdminShell } from './layouts/admin-shell';
export type { AdminShellProps } from './layouts/admin-shell';
export { AuthLayout } from './layouts/auth-layout';
export type { AuthLayoutProps } from './layouts/auth-layout';
export { BlankLayout } from './layouts/blank-layout';
export type { BlankLayoutProps } from './layouts/blank-layout';

export { AppHeader } from './header/app-header';
export { AppCommandPalette } from './header/app-command-palette';
export type { AppCommandPaletteProps } from './header/app-command-palette';
export { PageHeader, FilterBar, PageActions } from './page/page-header';
export type { PageHeaderProps, FilterBarProps } from './page/page-header';

export { getNavIcon } from './icons/nav-icons';

export {
  APP_AUTHOR,
  APP_GITHUB_URL,
  APP_NAME,
  dashboardNav,
  appNav,
  uiNav,
  layoutNav,
  authNav,
  fullNav,
  nestedNav,
  routeMeta,
  commandItems,
  flattenNav,
} from './navigation/nav.config';
export { getPageTitle, getNavBreadcrumbs, filterNavGroups } from './navigation/route-utils';
export type {
  SidebarLayoutVariant,
  NavItem,
  NavGroup,
  RouteMeta,
  CommandItem,
  ShellChromeLinks,
  BreadcrumbOptions,
} from './navigation/types';

export * from './data/types';
export * from './data/mock-data';

export { KpiStatRow, EmptyState } from './widgets/kpi-stat-row';
export type { KpiItem, KpiTone } from './widgets/kpi-stat-row';
export {
  widgetCardBodyClassName,
  widgetCardBodyProps,
  widgetCardChartBodyClassName,
  widgetCardChartBodyProps,
  widgetCardChartShellClassName,
  widgetCardDescriptionClassName,
  widgetCardHeaderClassName,
  widgetCardHeaderTextClassName,
  widgetCardProps,
  widgetCardShellClassName,
  widgetCardTableContentClassName,
  widgetCardTitleClassName,
  widgetChartCardProps,
  widgetSectionClassName,
  widgetSectionDescriptionClassName,
  widgetSectionHeaderClassName,
  widgetSectionTitleClassName,
} from './widgets/widget-card-styles';
export { WidgetCardHeader } from './widgets/widget-card-header';
export type { WidgetCardHeaderProps } from './widgets/widget-card-header';
export { DashboardToolbar, DashboardSection } from './widgets/dashboard-toolbar';
export type { DashboardToolbarProps } from './widgets/dashboard-toolbar';
export { useDashboardPage } from './hooks/use-dashboard-page';
export {
  TrafficChart,
  BarChartCard,
  LineChartCard,
  PieChartCard,
  FunnelChartCard,
} from './widgets/chart-widgets';
export {
  RecentOrdersTable,
  TopPagesTable,
  ProductsTable,
  DealsTable,
  ActivityFeed,
  embeddedDataTableClassName,
} from './widgets/table-widgets';

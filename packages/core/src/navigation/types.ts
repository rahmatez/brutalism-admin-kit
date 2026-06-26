export type SidebarLayoutVariant =
  | 'classic'
  | 'sectioned'
  | 'collapsible'
  | 'nested'
  | 'floating'
  | 'documentation';

export interface NavItem {
  readonly id: string;
  readonly label: string;
  readonly path?: string;
  readonly icon?: string;
  readonly badge?: string;
  readonly children?: readonly NavItem[];
}

export interface NavGroup {
  readonly id: string;
  readonly label?: string;
  readonly items: readonly NavItem[];
}

export interface RouteMeta {
  readonly title: string;
  readonly description?: string;
  readonly breadcrumbs?: readonly { label: string; path?: string }[];
}

export interface CommandItem {
  readonly id: string;
  readonly label: string;
  readonly path: string;
  readonly group: string;
  readonly keywords?: readonly string[];
}

export interface ShellChromeLinks {
  readonly brand?: string;
  readonly profile?: string;
  readonly settings?: string;
  readonly signOut?: string;
}

export interface BreadcrumbOptions {
  readonly home?: { readonly label: string; readonly path: string };
  readonly navGroups?: readonly NavGroup[];
}

import { fullNav, routeMeta, authNav } from './nav.config';
import type { BreadcrumbOptions, NavGroup, NavItem } from './types';

function pathMatches(pathname: string, path?: string) {
  if (!path) return false;
  return pathname === path || pathname.startsWith(`${path}/`);
}

function findInGroups(
  groups: readonly NavGroup[],
  pathname: string,
): { group?: NavGroup; item: NavItem; parent?: NavItem } | undefined {
  let best: { group?: NavGroup; item: NavItem; parent?: NavItem; pathLen: number } | undefined;

  for (const group of groups) {
    for (const item of group.items) {
      if (pathMatches(pathname, item.path)) {
        const pathLen = item.path!.length;
        if (!best || pathLen > best.pathLen) {
          best = { group, item, pathLen };
        }
      }
      if (item.children) {
        for (const child of item.children) {
          if (pathMatches(pathname, child.path)) {
            const pathLen = child.path!.length;
            if (!best || pathLen > best.pathLen) {
              best = { group, item: child, parent: item, pathLen };
            }
          }
        }
      }
    }
  }

  return best ? { group: best.group, item: best.item, parent: best.parent } : undefined;
}

function findNavMatch(pathname: string) {
  return findInGroups(fullNav, pathname) ?? findInGroups(authNav, pathname);
}

export function getPageTitle(pathname: string): string {
  const match = findNavMatch(pathname);
  if (match) return match.item.label;
  const meta = routeMeta[pathname];
  if (meta?.title) return meta.title;
  const seg = pathname.split('/').filter(Boolean).pop();
  return seg ? seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Home';
}

export function getNavBreadcrumbs(
  pathname: string,
  options?: BreadcrumbOptions,
): { label: string; path?: string }[] {
  const home = options?.home ?? { label: 'Home', path: '/dashboards/analytics' };
  const crumbs: { label: string; path?: string }[] = [{ label: home.label, path: home.path }];
  const match =
    (options?.navGroups ? findInGroups(options.navGroups, pathname) : undefined) ?? findNavMatch(pathname);

  if (match) {
    if (match.parent) {
      crumbs.push({ label: match.parent.label });
    } else if (match.group?.label) {
      crumbs.push({ label: match.group.label });
    }
    crumbs.push({ label: match.item.label, path: match.item.path });
    return crumbs;
  }

  let current = '';
  for (const seg of pathname.split('/').filter(Boolean)) {
    current += `/${seg}`;
    crumbs.push({
      label: seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      path: current,
    });
  }
  return crumbs;
}

export function filterNavGroups(groups: readonly NavGroup[], query: string): readonly NavGroup[] {
  const q = query.trim().toLowerCase();
  if (!q) return groups;

  return groups
    .map((group) => {
      const items = group.items
        .map((item) => {
          if (item.children?.length) {
            const children = item.children.filter(
              (c) =>
                c.label.toLowerCase().includes(q) ||
                c.path?.toLowerCase().includes(q),
            );
            if (children.length) return { ...item, children };
            if (item.label.toLowerCase().includes(q)) return { ...item, children: [] };
            return null;
          }
          if (
            item.label.toLowerCase().includes(q) ||
            item.path?.toLowerCase().includes(q)
          ) {
            return item;
          }
          return null;
        })
        .filter(Boolean) as NavItem[];

      if (items.length === 0) return null;
      return { ...group, items };
    })
    .filter(Boolean) as NavGroup[];
}

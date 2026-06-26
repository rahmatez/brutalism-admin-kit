import type { CommandItem, NavGroup, RouteMeta } from './types';

export const APP_NAME = 'Brutalism Admin Kit';
export const APP_AUTHOR = 'rahmatez';
export const APP_GITHUB_URL = 'https://github.com/rahmatez';

export const dashboardNav: readonly NavGroup[] = [
  {
    id: 'dashboards',
    label: 'Dashboards',
    items: [
      { id: 'analytics', label: 'Analytics', path: '/dashboards/analytics', icon: 'BarChart3' },
      { id: 'ecommerce', label: 'E-Commerce', path: '/dashboards/ecommerce', icon: 'ShoppingCart' },
      { id: 'marketing', label: 'Marketing', path: '/dashboards/marketing', icon: 'Megaphone' },
      { id: 'crm', label: 'CRM', path: '/dashboards/crm', icon: 'Users' },
      { id: 'stocks', label: 'Stocks', path: '/dashboards/stocks', icon: 'TrendingUp' },
      { id: 'saas', label: 'SaaS', path: '/dashboards/saas', icon: 'Cloud' },
      { id: 'logistics', label: 'Logistics', path: '/dashboards/logistics', icon: 'Truck' },
      { id: 'ai', label: 'AI', path: '/dashboards/ai', icon: 'Sparkles' },
      { id: 'sales', label: 'Sales', path: '/dashboards/sales', icon: 'DollarSign' },
      { id: 'finance', label: 'Finance', path: '/dashboards/finance', icon: 'Wallet' },
    ],
  },
];

export const appNav: readonly NavGroup[] = [
  {
    id: 'applications',
    label: 'Applications',
    items: [
      { id: 'mail', label: 'Mail', path: '/apps/mail', icon: 'Mail', badge: '2' },
      { id: 'chat', label: 'Chat', path: '/apps/chat', icon: 'MessageSquare', badge: '1' },
      { id: 'invoice', label: 'Invoice', path: '/apps/invoice', icon: 'FileText' },
      { id: 'task', label: 'Task', path: '/apps/task', icon: 'CheckSquare' },
      { id: 'calendar', label: 'Calendar', path: '/apps/calendar', icon: 'Calendar' },
      { id: 'files', label: 'File Manager', path: '/apps/files', icon: 'FolderOpen' },
      { id: 'tables', label: 'Tables', path: '/apps/tables', icon: 'Table' },
      { id: 'charts', label: 'Charts', path: '/apps/charts', icon: 'PieChart' },
    ],
  },
  {
    id: 'user',
    label: 'User',
    items: [
      { id: 'profile', label: 'Profile', path: '/user/profile', icon: 'User' },
      { id: 'settings', label: 'Settings', path: '/user/settings', icon: 'Settings' },
    ],
  },
];

export const uiNav: readonly NavGroup[] = [
  {
    id: 'ui',
    label: 'UI Elements',
    items: [
      { id: 'buttons', label: 'Buttons', path: '/ui/buttons', icon: 'MousePointer' },
      { id: 'alerts', label: 'Alerts', path: '/ui/alerts', icon: 'AlertTriangle' },
      { id: 'badges', label: 'Badges', path: '/ui/badges', icon: 'Tag' },
      { id: 'cards', label: 'Cards', path: '/ui/cards', icon: 'LayoutGrid' },
      { id: 'forms', label: 'Forms', path: '/ui/forms', icon: 'FormInput' },
      { id: 'modals', label: 'Modals', path: '/ui/modals', icon: 'Square' },
      { id: 'tabs', label: 'Tabs', path: '/ui/tabs', icon: 'PanelTop' },
      { id: 'tooltips', label: 'Tooltips', path: '/ui/tooltips', icon: 'Info' },
      { id: 'progress', label: 'Progress', path: '/ui/progress', icon: 'Loader' },
      { id: 'avatars', label: 'Avatars', path: '/ui/avatars', icon: 'CircleUser' },
      { id: 'breadcrumbs', label: 'Breadcrumbs', path: '/ui/breadcrumbs', icon: 'ChevronRight' },
      { id: 'pagination', label: 'Pagination', path: '/ui/pagination', icon: 'MoreHorizontal' },
      { id: 'dropdowns', label: 'Dropdowns', path: '/ui/dropdowns', icon: 'ChevronDown' },
      { id: 'toasts', label: 'Toasts', path: '/ui/toasts', icon: 'Bell' },
    ],
  },
];

export const layoutNav: readonly NavGroup[] = [
  {
    id: 'layouts',
    label: 'Layouts',
    items: [
      { id: 'layout-classic', label: 'Classic', path: '/layouts/classic', icon: 'Layout' },
      { id: 'layout-sectioned', label: 'Sectioned', path: '/layouts/sectioned', icon: 'Layers' },
      { id: 'layout-collapsible', label: 'Collapsible', path: '/layouts/collapsible', icon: 'PanelLeft' },
      { id: 'layout-nested', label: 'Nested', path: '/layouts/nested', icon: 'GitBranch' },
      { id: 'layout-floating', label: 'Floating', path: '/layouts/floating', icon: 'Box' },
      { id: 'layout-docs', label: 'Documentation', path: '/layouts/documentation', icon: 'BookOpen' },
    ],
  },
];

export const authNav: readonly NavGroup[] = [
  {
    id: 'auth',
    label: 'Authentication',
    items: [
      { id: 'sign-in', label: 'Sign In', path: '/auth/sign-in', icon: 'LogIn' },
      { id: 'sign-up', label: 'Sign Up', path: '/auth/sign-up', icon: 'UserPlus' },
      { id: 'reset', label: 'Reset Password', path: '/auth/reset-password', icon: 'Key' },
      { id: 'two-step', label: 'Two Step', path: '/auth/two-step', icon: 'Shield' },
    ],
  },
];

export const fullNav: readonly NavGroup[] = [
  ...dashboardNav,
  ...appNav,
  ...uiNav,
  ...layoutNav,
];

export const routeMeta: Record<string, RouteMeta> = {
  '/dashboards/analytics': { title: 'Analytics Dashboard', description: 'Traffic, engagement, and growth metrics' },
  '/dashboards/ecommerce': { title: 'E-Commerce Dashboard', description: 'Revenue, orders, and product performance' },
  '/dashboards/marketing': { title: 'Marketing Dashboard', description: 'Campaign performance and channel analytics' },
  '/dashboards/crm': { title: 'CRM Dashboard', description: 'Pipeline, deals, and customer activity' },
  '/dashboards/stocks': { title: 'Stocks Dashboard', description: 'Portfolio performance and watchlist' },
  '/dashboards/saas': { title: 'SaaS Dashboard', description: 'MRR, churn, and subscription metrics' },
  '/dashboards/logistics': { title: 'Logistics Dashboard', description: 'Shipments, fleet, and delivery status' },
  '/dashboards/ai': { title: 'AI Dashboard', description: 'Prompt usage, generation history, and costs' },
  '/dashboards/sales': { title: 'Sales Dashboard', description: 'Quota, pipeline, and leaderboard' },
  '/dashboards/finance': { title: 'Finance Dashboard', description: 'Balance sheet, expenses, and transactions' },
};

export function flattenNav(groups: readonly NavGroup[]): CommandItem[] {
  const items: CommandItem[] = [];
  for (const group of groups) {
    for (const item of group.items) {
      if (item.path) {
        items.push({
          id: item.id,
          label: item.label,
          path: item.path,
          group: group.label ?? 'Navigation',
          keywords: [item.label, group.label ?? ''].filter(Boolean),
        });
      }
      if (item.children) {
        for (const child of item.children) {
          if (child.path) {
            items.push({
              id: child.id,
              label: child.label,
              path: child.path,
              group: item.label,
              keywords: [child.label, item.label],
            });
          }
        }
      }
    }
  }
  return items;
}

export const nestedNav: readonly NavGroup[] = [
  {
    id: 'main',
    items: [
      {
        id: 'dashboards-group',
        label: 'Dashboards',
        icon: 'BarChart3',
        children: dashboardNav[0]!.items,
      },
      {
        id: 'apps-group',
        label: 'Applications',
        icon: 'LayoutGrid',
        children: appNav[0]!.items,
      },
      {
        id: 'user-group',
        label: 'User',
        icon: 'User',
        children: appNav[1]!.items,
      },
    ],
  },
];

export const commandItems: readonly CommandItem[] = flattenNav([
  ...fullNav,
  ...authNav,
  {
    id: 'errors',
    label: 'Errors',
    items: [
      { id: '404', label: '404 Not Found', path: '/errors/404', icon: 'AlertCircle' },
      { id: '500', label: '500 Server Error', path: '/errors/500', icon: 'ServerCrash' },
      { id: 'maintenance', label: 'Maintenance', path: '/errors/maintenance', icon: 'Wrench' },
    ],
  },
]);

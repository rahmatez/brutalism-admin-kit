export interface DocsNavItem {
  readonly label: string;
  readonly path: string;
}

export interface DocsNavGroup {
  readonly label: string;
  readonly items: readonly DocsNavItem[];
}

export const docsNavGroups: readonly DocsNavGroup[] = [
  {
    label: 'Getting Started',
    items: [
      { label: 'Introduction', path: '/docs/introduction' },
      { label: 'Installation', path: '/docs/installation' },
      { label: 'Quick Start', path: '/docs/quick-start' },
      { label: 'FAQ', path: '/docs/faq' },
    ],
  },
  {
    label: 'Layout System',
    items: [
      { label: 'Admin Shell', path: '/docs/admin-shell' },
      { label: 'Sidebar Variants', path: '/docs/sidebar-variants' },
      { label: 'Header & Navigation', path: '/docs/header' },
      { label: 'Responsive Behavior', path: '/docs/responsive' },
    ],
  },
  {
    label: 'Dashboards',
    items: [
      { label: 'Analytics', path: '/docs/dashboards/analytics' },
      { label: 'E-Commerce', path: '/docs/dashboards/ecommerce' },
      { label: 'Marketing', path: '/docs/dashboards/marketing' },
      { label: 'CRM', path: '/docs/dashboards/crm' },
      { label: 'Stocks', path: '/docs/dashboards/stocks' },
      { label: 'SaaS', path: '/docs/dashboards/saas' },
      { label: 'Logistics', path: '/docs/dashboards/logistics' },
      { label: 'AI', path: '/docs/dashboards/ai' },
      { label: 'Sales', path: '/docs/dashboards/sales' },
      { label: 'Finance', path: '/docs/dashboards/finance' },
    ],
  },
  {
    label: 'Page Templates',
    items: [
      { label: 'Auth Flows', path: '/docs/templates/auth' },
      { label: 'CRUD Pattern', path: '/docs/templates/crud' },
      { label: 'List + Detail', path: '/docs/templates/list-detail' },
      { label: 'Settings Form', path: '/docs/templates/settings' },
    ],
  },
  {
    label: 'Patterns',
    items: [
      { label: 'Command Palette', path: '/docs/patterns/command-palette' },
      { label: 'DataTable', path: '/docs/patterns/data-table' },
      { label: 'Charts', path: '/docs/patterns/charts' },
      { label: 'Forms', path: '/docs/patterns/forms' },
      { label: 'Toasts', path: '/docs/patterns/toasts' },
    ],
  },
  {
    label: 'Customization',
    items: [
      { label: 'Theming', path: '/docs/customization/theming' },
      { label: 'CSS Variables', path: '/docs/customization/css-variables' },
    ],
  },
  {
    label: 'Reference',
    items: [
      { label: 'Component Library', path: '/docs/reference/components' },
      { label: 'Changelog', path: '/docs/reference/changelog' },
      { label: 'Roadmap', path: '/docs/reference/roadmap' },
    ],
  },
];

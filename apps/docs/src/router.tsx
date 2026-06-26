import { lazy, Suspense } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { DocsLayout } from '@/components/docs-layout';
import { Skeleton, Stack } from 'neobrutalism-ui-react';

const DocsHomePage = lazy(() => import('@/pages/home'));
const IntroductionPage = lazy(() => import('@/pages/introduction'));
const InstallationPage = lazy(() => import('@/pages/installation'));
const QuickStartPage = lazy(() => import('@/pages/quick-start'));
const FaqPage = lazy(() => import('@/pages/faq'));
const AdminShellPage = lazy(() => import('@/pages/admin-shell'));
const SidebarVariantsPage = lazy(() => import('@/pages/sidebar-variants'));
const HeaderPage = lazy(() => import('@/pages/header'));
const ResponsivePage = lazy(() => import('@/pages/responsive'));
const DashboardDocPage = lazy(() => import('@/pages/dashboard-doc'));
const AuthTemplatePage = lazy(() => import('@/pages/templates/auth'));
const CrudTemplatePage = lazy(() => import('@/pages/templates/crud'));
const ListDetailPage = lazy(() => import('@/pages/templates/list-detail'));
const SettingsTemplatePage = lazy(() => import('@/pages/templates/settings'));
const CommandPalettePage = lazy(() => import('@/pages/patterns/command-palette'));
const DataTablePatternPage = lazy(() => import('@/pages/patterns/data-table'));
const ChartsPatternPage = lazy(() => import('@/pages/patterns/charts'));
const FormsPatternPage = lazy(() => import('@/pages/patterns/forms'));
const ToastsPatternPage = lazy(() => import('@/pages/patterns/toasts'));
const ThemingPage = lazy(() => import('@/pages/customization/theming'));
const CssVariablesPage = lazy(() => import('@/pages/customization/css-variables'));
const ComponentsRefPage = lazy(() => import('@/pages/reference/components'));
const ChangelogPage = lazy(() => import('@/pages/reference/changelog'));
const RoadmapPage = lazy(() => import('@/pages/reference/roadmap'));

function Loader() {
  return (
    <Stack gap="sm">
      <Skeleton variant="block" className="h-8 w-48" />
      <Skeleton variant="block" className="h-32" />
    </Stack>
  );
}

function DocLayout() {
  return (
    <DocsLayout>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </DocsLayout>
  );
}

const dashboards = ['analytics', 'ecommerce', 'marketing', 'crm', 'stocks', 'saas', 'logistics', 'ai', 'sales', 'finance'] as const;

export function DocsRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <DocsHomePage />
          </Suspense>
        }
      />
      <Route element={<DocLayout />}>
        <Route path="/docs/introduction" element={<IntroductionPage />} />
        <Route path="/docs/installation" element={<InstallationPage />} />
        <Route path="/docs/quick-start" element={<QuickStartPage />} />
        <Route path="/docs/faq" element={<FaqPage />} />
        <Route path="/docs/admin-shell" element={<AdminShellPage />} />
        <Route path="/docs/sidebar-variants" element={<SidebarVariantsPage />} />
        <Route path="/docs/header" element={<HeaderPage />} />
        <Route path="/docs/responsive" element={<ResponsivePage />} />
        {dashboards.map((d) => (
          <Route key={d} path={`/docs/dashboards/${d}`} element={<DashboardDocPage dashboard={d} />} />
        ))}
        <Route path="/docs/templates/auth" element={<AuthTemplatePage />} />
        <Route path="/docs/templates/crud" element={<CrudTemplatePage />} />
        <Route path="/docs/templates/list-detail" element={<ListDetailPage />} />
        <Route path="/docs/templates/settings" element={<SettingsTemplatePage />} />
        <Route path="/docs/patterns/command-palette" element={<CommandPalettePage />} />
        <Route path="/docs/patterns/data-table" element={<DataTablePatternPage />} />
        <Route path="/docs/patterns/charts" element={<ChartsPatternPage />} />
        <Route path="/docs/patterns/forms" element={<FormsPatternPage />} />
        <Route path="/docs/patterns/toasts" element={<ToastsPatternPage />} />
        <Route path="/docs/customization/theming" element={<ThemingPage />} />
        <Route path="/docs/customization/css-variables" element={<CssVariablesPage />} />
        <Route path="/docs/reference/components" element={<ComponentsRefPage />} />
        <Route path="/docs/reference/changelog" element={<ChangelogPage />} />
        <Route path="/docs/reference/roadmap" element={<RoadmapPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

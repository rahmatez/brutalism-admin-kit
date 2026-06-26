import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Skeleton, Stack } from 'neobrutalism-ui-react';
import { ShellLayout } from './layouts/shell-layout';
import { BlankLayout } from '@neo-admin/core';

const AnalyticsDashboard = lazy(() => import('./pages/dashboards/analytics'));
const EcommerceDashboard = lazy(() => import('./pages/dashboards/ecommerce'));
const MarketingDashboard = lazy(() => import('./pages/dashboards/marketing'));
const CrmDashboard = lazy(() => import('./pages/dashboards/crm'));
const StocksDashboard = lazy(() => import('./pages/dashboards/stocks'));
const SaasDashboard = lazy(() => import('./pages/dashboards/saas'));
const LogisticsDashboard = lazy(() => import('./pages/dashboards/logistics'));
const AiDashboard = lazy(() => import('./pages/dashboards/ai'));
const SalesDashboard = lazy(() => import('./pages/dashboards/sales'));
const FinanceDashboard = lazy(() => import('./pages/dashboards/finance'));

const SignInPage = lazy(() => import('./pages/auth/sign-in'));
const SignUpPage = lazy(() => import('./pages/auth/sign-up'));
const ResetPasswordPage = lazy(() => import('./pages/auth/reset-password'));
const TwoStepPage = lazy(() => import('./pages/auth/two-step'));

const ProfilePage = lazy(() => import('./pages/user/profile'));
const SettingsPage = lazy(() => import('./pages/user/settings'));

const MailPage = lazy(() => import('./pages/apps/mail'));
const ChatPage = lazy(() => import('./pages/apps/chat'));
const InvoicePage = lazy(() => import('./pages/apps/invoice'));
const TaskPage = lazy(() => import('./pages/apps/task'));
const CalendarPage = lazy(() => import('./pages/apps/calendar'));
const FilesPage = lazy(() => import('./pages/apps/files'));
const TablesPage = lazy(() => import('./pages/apps/tables'));
const ChartsPage = lazy(() => import('./pages/apps/charts'));

const ButtonsPage = lazy(() => import('./pages/ui/buttons'));
const AlertsPage = lazy(() => import('./pages/ui/alerts'));
const BadgesPage = lazy(() => import('./pages/ui/badges'));
const CardsPage = lazy(() => import('./pages/ui/cards'));
const FormsPage = lazy(() => import('./pages/ui/forms'));
const ModalsPage = lazy(() => import('./pages/ui/modals'));
const TabsPage = lazy(() => import('./pages/ui/tabs'));
const TooltipsPage = lazy(() => import('./pages/ui/tooltips'));
const ProgressPage = lazy(() => import('./pages/ui/progress'));
const AvatarsPage = lazy(() => import('./pages/ui/avatars'));
const BreadcrumbsPage = lazy(() => import('./pages/ui/breadcrumbs'));
const PaginationPage = lazy(() => import('./pages/ui/pagination'));
const DropdownsPage = lazy(() => import('./pages/ui/dropdowns'));
const ToastsPage = lazy(() => import('./pages/ui/toasts'));

const Error404Page = lazy(() => import('./pages/errors/not-found'));
const Error500Page = lazy(() => import('./pages/errors/server-error'));
const MaintenancePage = lazy(() => import('./pages/errors/maintenance'));

const LayoutClassic = lazy(() => import('./pages/layouts/classic'));
const LayoutSectioned = lazy(() => import('./pages/layouts/sectioned'));
const LayoutCollapsible = lazy(() => import('./pages/layouts/collapsible'));
const LayoutNested = lazy(() => import('./pages/layouts/nested'));
const LayoutFloating = lazy(() => import('./pages/layouts/floating'));
const LayoutDocumentation = lazy(() => import('./pages/layouts/documentation'));

function PageLoader() {
  return (
    <Stack gap="md">
      <Skeleton variant="text" className="h-8 w-48" />
      <Skeleton variant="block" className="h-32" />
      <Skeleton variant="block" className="h-64" />
    </Stack>
  );
}

function Lazy({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboards/analytics" replace />} />

      <Route element={<ShellLayout variant="sectioned" />}>
        <Route path="/dashboards/analytics" element={<Lazy><AnalyticsDashboard /></Lazy>} />
        <Route path="/dashboards/ecommerce" element={<Lazy><EcommerceDashboard /></Lazy>} />
        <Route path="/dashboards/marketing" element={<Lazy><MarketingDashboard /></Lazy>} />
        <Route path="/dashboards/crm" element={<Lazy><CrmDashboard /></Lazy>} />
        <Route path="/dashboards/stocks" element={<Lazy><StocksDashboard /></Lazy>} />
        <Route path="/dashboards/saas" element={<Lazy><SaasDashboard /></Lazy>} />
        <Route path="/dashboards/logistics" element={<Lazy><LogisticsDashboard /></Lazy>} />
        <Route path="/dashboards/ai" element={<Lazy><AiDashboard /></Lazy>} />
        <Route path="/dashboards/sales" element={<Lazy><SalesDashboard /></Lazy>} />
        <Route path="/dashboards/finance" element={<Lazy><FinanceDashboard /></Lazy>} />

        <Route path="/apps/mail" element={<Lazy><MailPage /></Lazy>} />
        <Route path="/apps/chat" element={<Lazy><ChatPage /></Lazy>} />
        <Route path="/apps/invoice" element={<Lazy><InvoicePage /></Lazy>} />
        <Route path="/apps/task" element={<Lazy><TaskPage /></Lazy>} />
        <Route path="/apps/calendar" element={<Lazy><CalendarPage /></Lazy>} />
        <Route path="/apps/files" element={<Lazy><FilesPage /></Lazy>} />
        <Route path="/apps/tables" element={<Lazy><TablesPage /></Lazy>} />
        <Route path="/apps/charts" element={<Lazy><ChartsPage /></Lazy>} />

        <Route path="/user/profile" element={<Lazy><ProfilePage /></Lazy>} />
        <Route path="/user/settings" element={<Lazy><SettingsPage /></Lazy>} />

        <Route path="/ui/buttons" element={<Lazy><ButtonsPage /></Lazy>} />
        <Route path="/ui/alerts" element={<Lazy><AlertsPage /></Lazy>} />
        <Route path="/ui/badges" element={<Lazy><BadgesPage /></Lazy>} />
        <Route path="/ui/cards" element={<Lazy><CardsPage /></Lazy>} />
        <Route path="/ui/forms" element={<Lazy><FormsPage /></Lazy>} />
        <Route path="/ui/modals" element={<Lazy><ModalsPage /></Lazy>} />
        <Route path="/ui/tabs" element={<Lazy><TabsPage /></Lazy>} />
        <Route path="/ui/tooltips" element={<Lazy><TooltipsPage /></Lazy>} />
        <Route path="/ui/progress" element={<Lazy><ProgressPage /></Lazy>} />
        <Route path="/ui/avatars" element={<Lazy><AvatarsPage /></Lazy>} />
        <Route path="/ui/breadcrumbs" element={<Lazy><BreadcrumbsPage /></Lazy>} />
        <Route path="/ui/pagination" element={<Lazy><PaginationPage /></Lazy>} />
        <Route path="/ui/dropdowns" element={<Lazy><DropdownsPage /></Lazy>} />
        <Route path="/ui/toasts" element={<Lazy><ToastsPage /></Lazy>} />
      </Route>

      <Route path="/layouts/classic" element={<Lazy><LayoutClassic /></Lazy>} />
      <Route path="/layouts/sectioned" element={<Lazy><LayoutSectioned /></Lazy>} />
      <Route path="/layouts/collapsible" element={<Lazy><LayoutCollapsible /></Lazy>} />
      <Route path="/layouts/nested" element={<Lazy><LayoutNested /></Lazy>} />
      <Route path="/layouts/floating" element={<Lazy><LayoutFloating /></Lazy>} />
      <Route path="/layouts/documentation" element={<Lazy><LayoutDocumentation /></Lazy>} />

      <Route path="/auth/sign-in" element={<Lazy><SignInPage /></Lazy>} />
      <Route path="/auth/sign-up" element={<Lazy><SignUpPage /></Lazy>} />
      <Route path="/auth/reset-password" element={<Lazy><ResetPasswordPage /></Lazy>} />
      <Route path="/auth/two-step" element={<Lazy><TwoStepPage /></Lazy>} />

      <Route path="/errors/404" element={<BlankLayout><Lazy><Error404Page /></Lazy></BlankLayout>} />
      <Route path="/errors/500" element={<BlankLayout><Lazy><Error500Page /></Lazy></BlankLayout>} />
      <Route path="/errors/maintenance" element={<BlankLayout><Lazy><MaintenancePage /></Lazy></BlankLayout>} />

      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
  );
}

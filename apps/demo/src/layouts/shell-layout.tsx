import { AdminShell, type SidebarLayoutVariant } from '@neo-admin/core';
import { Outlet } from 'react-router-dom';

export function ShellLayout({ variant = 'sectioned' }: { variant?: SidebarLayoutVariant }) {
  return (
    <AdminShell variant={variant}>
      <div id="main-content">
        <Outlet />
      </div>
    </AdminShell>
  );
}

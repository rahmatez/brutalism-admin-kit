import type { ReactNode } from 'react';

export interface BlankLayoutProps {
  children: ReactNode;
}

export function BlankLayout({ children }: BlankLayoutProps) {
  return <div id="main-content" className="min-h-svh bg-(--nb-background)">{children}</div>;
}

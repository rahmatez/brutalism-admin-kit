import { AppProviders } from '@neo-admin/core';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';

export function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <a href="#main-content" className="sr-only-focusable fixed top-2 left-2 z-50 border-2 border-(--nb-border) bg-(--nb-yellow) px-3 py-2 font-bold">
          Skip to content
        </a>
        <AppRouter />
      </BrowserRouter>
    </AppProviders>
  );
}

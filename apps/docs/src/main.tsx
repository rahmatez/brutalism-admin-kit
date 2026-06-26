import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initPopoverAnchoring } from '@neo-admin/core';
import { App } from './App';
import './styles.css';

document.documentElement.classList.remove('dark');
localStorage.removeItem('neo-admin-theme');
initPopoverAnchoring();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

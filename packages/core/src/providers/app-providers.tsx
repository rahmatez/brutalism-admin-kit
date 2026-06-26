import { NeoBrutalismProvider, ToastProvider } from 'neobrutalism-ui-react';
import type { ReactNode } from 'react';
import { CommandPaletteProvider } from './command-palette-provider';

export interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <NeoBrutalismProvider>
      <CommandPaletteProvider>
        <ToastProvider>{children}</ToastProvider>
      </CommandPaletteProvider>
    </NeoBrutalismProvider>
  );
}

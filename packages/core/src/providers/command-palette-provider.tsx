import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useCommandPalette } from '../hooks/use-command-palette';

interface CommandPaletteContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
}

const CommandPaletteContext = createContext<CommandPaletteContextValue | null>(null);

export function CommandPaletteProvider({ children }: { children: ReactNode }) {
  const palette = useCommandPalette();
  const value = useMemo(
    () => ({ open: palette.open, setOpen: palette.setOpen, toggle: palette.toggle }),
    [palette.open, palette.setOpen, palette.toggle],
  );
  return <CommandPaletteContext.Provider value={value}>{children}</CommandPaletteContext.Provider>;
}

export function useCommandPaletteContext() {
  const ctx = useContext(CommandPaletteContext);
  if (!ctx) {
    throw new Error('useCommandPaletteContext must be used within CommandPaletteProvider');
  }
  return ctx;
}

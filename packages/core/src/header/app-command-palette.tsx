import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from 'neobrutalism-ui-react';
import { useNavigate } from 'react-router-dom';
import type { CommandItem as CommandPaletteItem } from '../navigation/types';

export interface AppCommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: readonly CommandPaletteItem[];
  placeholder?: string;
}

export function AppCommandPalette({
  open,
  onOpenChange,
  items,
  placeholder = 'Search pages, dashboards, and actions...',
}: AppCommandPaletteProps) {
  const navigate = useNavigate();

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange} className="app-command-palette">
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {items.map((item) => (
          <CommandItem
            key={item.id}
            value={[item.label, item.path, item.group, ...(item.keywords ?? [])].join(' ')}
            className="app-command-palette-item"
            onSelect={() => {
              navigate(item.path);
              onOpenChange(false);
            }}
          >
            <span className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="truncate font-black uppercase tracking-wide">{item.label}</span>
              <span className="truncate font-mono text-xs font-medium text-gray-500">{item.path}</span>
            </span>
            <span className="ms-3 hidden shrink-0 text-[10px] font-black tracking-widest text-gray-400 uppercase sm:inline">
              {item.group}
            </span>
          </CommandItem>
        ))}
      </CommandList>
    </CommandDialog>
  );
}

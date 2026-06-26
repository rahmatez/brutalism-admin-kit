import { Avatar, Stack, Text } from 'neobrutalism-ui-react';
import { LogOut, Settings, User } from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import type { ShellChromeLinks } from '../navigation/types';

const menuItemClass =
  'flex w-full items-center rounded-(--nb-radius) px-3 py-2 text-left text-sm font-bold transition-colors hover:bg-(--nb-yellow)';

type MenuPosition = {
  top: number;
  left: number;
  width: number;
};

function getMenuPosition(
  trigger: HTMLButtonElement,
  menuWidth: number,
  menuHeight: number,
): MenuPosition {
  const rect = trigger.getBoundingClientRect();
  const margin = 8;
  const viewportPadding = 12;
  const width = Math.min(menuWidth, window.innerWidth - viewportPadding * 2);

  let left = rect.right - width;
  left = Math.max(viewportPadding, Math.min(left, window.innerWidth - width - viewportPadding));

  let top = rect.bottom + margin;
  if (top + menuHeight > window.innerHeight - viewportPadding) {
    top = Math.max(viewportPadding, rect.top - margin - menuHeight);
  }

  return { top, left, width };
}

export function UserAccountMenu({ chromeLinks }: { chromeLinks?: ShellChromeLinks } = {}) {
  const navigate = useNavigate();
  const profilePath = chromeLinks?.profile ?? '/user/profile';
  const settingsPath = chromeLinks?.settings ?? '/user/settings';
  const signOutPath = chromeLinks?.signOut ?? '/auth/sign-in';
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<MenuPosition | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuId = 'user-account-menu';
  const updatePosition = () => {
    if (!triggerRef.current) return;
    const menuWidth = menuRef.current?.offsetWidth ?? 176;
    const menuHeight = menuRef.current?.offsetHeight ?? 200;
    setPosition(getMenuPosition(triggerRef.current, menuWidth, menuHeight));
  };

  const toggleMenu = () => {
    setOpen((value) => {
      const next = !value;
      if (next && triggerRef.current) {
        setPosition(getMenuPosition(triggerRef.current, 176, 200));
      }
      return next;
    });
  };

  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
    const menu = menuRef.current;
    if (!menu) return;

    const observer = new ResizeObserver(updatePosition);
    observer.observe(menu);
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        rootRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const go = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        ref={triggerRef}
        type="button"
        aria-label="Account menu"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={open ? menuId : undefined}
        onClick={toggleMenu}
        className="inline-flex size-9 items-center justify-center rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-secondary) shadow-[2px_2px_0_0_var(--nb-shadow)] transition-all hover:translate-x-(--nb-shadow-offset-x) hover:translate-y-(--nb-shadow-offset-y) hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--nb-border) focus-visible:ring-offset-2"
      >
        <Avatar alt="Admin User" tone="primary" className="size-7" />
      </button>

      {open
        ? createPortal(
            <div
              ref={menuRef}
              id={menuId}
              role="menu"
              style={{
                position: 'fixed',
                top: position?.top ?? 0,
                left: position?.left ?? 0,
                width: position?.width ?? 176,
                zIndex: 60,
              }}
              className="border-2 border-(--nb-border) bg-(--nb-cream) p-2 shadow-[4px_4px_0_0_var(--nb-shadow)]"
            >
              <Stack gap="xs" className="border-b-2 border-(--nb-border) px-3 py-2.5">
                <Text size="sm" weight="bold">
                  Admin User
                </Text>
                <Text size="xs" className="opacity-60">
                  admin@neo.admin
                </Text>
              </Stack>
              <button
                type="button"
                role="menuitem"
                className={menuItemClass}
                onClick={() => go(profilePath)}
              >
                <User className="mr-2 size-4 shrink-0" />
                Profile
              </button>
              <button
                type="button"
                role="menuitem"
                className={menuItemClass}
                onClick={() => go(settingsPath)}
              >
                <Settings className="mr-2 size-4 shrink-0" />
                Settings
              </button>
              <div role="separator" className="my-2 border-t-2 border-dashed border-(--nb-border)" />
              <button
                type="button"
                role="menuitem"
                className={menuItemClass}
                onClick={() => go(signOutPath)}
              >
                <LogOut className="mr-2 size-4 shrink-0" />
                Sign out
              </button>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}

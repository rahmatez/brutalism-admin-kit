const POPOVER_CONTAINER_SELECTOR = '[data-nb-dropdown-menu], [data-nb-popover]';

let initialized = false;

function getPopoverFromEventTarget(target: EventTarget | null): HTMLElement | null {
  if (!(target instanceof HTMLElement)) return null;

  if (target.hasAttribute('popover')) {
    return target;
  }

  if (target.hasAttribute('popovertarget')) {
    const id = target.getAttribute('popovertarget');
    return id ? document.getElementById(id) : null;
  }

  return null;
}

function positionPopover(popover: HTMLElement) {
  const container = popover.closest(POPOVER_CONTAINER_SELECTOR);
  const trigger = container?.querySelector<HTMLButtonElement>(':scope > button[popovertarget]');
  if (!trigger) return;

  const rect = trigger.getBoundingClientRect();
  const gap = 4;
  const side = popover.getAttribute('data-side');

  popover.style.setProperty('position', 'fixed', 'important');
  popover.style.setProperty('margin', '0', 'important');
  popover.style.setProperty('inset', 'auto', 'important');
  popover.style.setProperty('right', 'auto', 'important');
  popover.style.setProperty('bottom', 'auto', 'important');

  if (side === 'top') {
    popover.style.setProperty('top', `${rect.top - gap}px`, 'important');
    popover.style.setProperty('left', `${rect.left}px`, 'important');
    popover.style.setProperty('transform', 'translateY(-100%)', 'important');
    return;
  }

  popover.style.setProperty('top', `${rect.bottom + gap}px`, 'important');
  popover.style.setProperty('left', `${rect.left}px`, 'important');
  popover.style.setProperty('transform', 'none', 'important');
}

function schedulePosition(popover: HTMLElement) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (popover.matches(':popover-open')) {
        positionPopover(popover);
      }
    });
  });
}

function repositionOpenPopovers() {
  document
    .querySelectorAll<HTMLElement>(`${POPOVER_CONTAINER_SELECTOR} [popover]:popover-open`)
    .forEach(positionPopover);
}

function handlePopoverToggle(event: Event) {
  if ((event as ToggleEvent).newState !== 'open') return;

  const popover = getPopoverFromEventTarget(event.target);
  if (!popover?.closest(POPOVER_CONTAINER_SELECTOR)) return;

  schedulePosition(popover);
}

function handleTriggerClick(event: Event) {
  const container =
    event.target instanceof Element ? event.target.closest(POPOVER_CONTAINER_SELECTOR) : null;
  const trigger = container?.querySelector<HTMLButtonElement>(':scope > button[popovertarget]');
  if (!trigger) return;

  const popoverId = trigger.getAttribute('popovertarget');
  if (!popoverId) return;

  const popover = document.getElementById(popoverId);
  if (!popover) return;

  schedulePosition(popover);
}

export function initPopoverAnchoring() {
  if (initialized || typeof document === 'undefined') return () => undefined;
  initialized = true;

  document.addEventListener('beforetoggle', handlePopoverToggle, true);
  document.addEventListener('toggle', handlePopoverToggle, true);
  document.addEventListener('click', handleTriggerClick, true);
  window.addEventListener('resize', repositionOpenPopovers);
  document.addEventListener('scroll', repositionOpenPopovers, true);

  return () => {
    initialized = false;
    document.removeEventListener('beforetoggle', handlePopoverToggle, true);
    document.removeEventListener('toggle', handlePopoverToggle, true);
    document.removeEventListener('click', handleTriggerClick, true);
    window.removeEventListener('resize', repositionOpenPopovers);
    document.removeEventListener('scroll', repositionOpenPopovers, true);
  };
}

import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';

import './tooltip.css';

const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
tooltip.id = 'tooltip';
tooltip.setAttribute('role', 'tooltip');
tooltip.hidden = true;

const text = document.createElement('span');
const arrowEl = document.createElement('span');
arrowEl.className = 'tooltip-arrow';
tooltip.append(text, arrowEl);
document.body.append(tooltip);

let anchor: HTMLElement | null = null;
let stopUpdates: (() => void) | null = null;
let shownByTouch = false;

const textObserver = new MutationObserver(() => {
  text.textContent = anchor?.dataset.tooltip ?? '';
});

async function place() {
  if (anchor === null) {
    return;
  }

  if (!anchor.isConnected || anchor.getClientRects().length === 0) {
    hide();
    return;
  }

  const target = anchor;

  const { x, y, placement, middlewareData } = await computePosition(target, tooltip, {
    strategy: 'fixed',
    placement: 'top',
    middleware: [
      offset(8),
      flip(),
      shift({
        padding: 8,
      }),
      arrow({
        element: arrowEl,
        padding: 6,
      }),
    ],
  });

  if (anchor !== target) {
    return;
  }

  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
  tooltip.dataset.side = placement.split('-')[0];
  arrowEl.style.left = `${middlewareData.arrow?.x ?? 0}px`;
}

function show(target: HTMLElement) {
  if (anchor === target) {
    return;
  }

  hide();
  anchor = target;
  text.textContent = target.dataset.tooltip ?? '';
  tooltip.hidden = false;

  if (target.getAttribute('aria-label') !== target.dataset.tooltip) {
    target.setAttribute('aria-describedby', 'tooltip');
  }

  stopUpdates = autoUpdate(target, tooltip, () => void place());
  textObserver.observe(target, { attributes: true, attributeFilter: ['data-tooltip'] });
}

function hide() {
  if (anchor === null) {
    return;
  }

  stopUpdates?.();
  textObserver.disconnect();

  if (anchor.getAttribute('aria-describedby') === 'tooltip') {
    anchor.removeAttribute('aria-describedby');
  }

  anchor = null;
  shownByTouch = false;
  tooltip.hidden = true;
}

function getTarget(node: EventTarget | null): HTMLElement | null {
  return node instanceof Element ? node.closest<HTMLElement>('[data-tooltip]') : null;
}

document.addEventListener('pointerover', (event) => {
  const target = getTarget(event.target);

  if (event.pointerType !== 'touch' && target !== null) {
    show(target);
  }
});

document.addEventListener('pointerout', (event) => {
  if (event.pointerType === 'touch') {
    return;
  }

  const from = getTarget(event.target);

  if (from !== null && from === anchor && !from.contains(event.relatedTarget as Node | null)) {
    hide();
  }
});

let tapping = false;

document.addEventListener('pointerdown', (event) => {
  tapping = event.pointerType === 'touch';

  if (!tapping || getTarget(event.target) !== anchor) {
    hide();
  }
});

document.addEventListener('click', (event) => {
  const target = getTarget(event.target);

  if (!tapping || target === null || target.closest('a, button') !== null) {
    return;
  }

  if (target === anchor) {
    hide();
  } else {
    show(target);
    shownByTouch = true;
  }
});

document.addEventListener(
  'scroll',
  () => {
    if (shownByTouch) {
      hide();
    }
  },
  { capture: true, passive: true },
);

document.addEventListener('focusin', (event) => {
  if (!(event.target instanceof HTMLElement)) {
    return;
  }

  const target =
    getTarget(event.target) ?? event.target.querySelector<HTMLElement>('[data-tooltip]');

  if (target !== null && event.target.matches(':focus-visible')) {
    show(target);
  }
});

document.addEventListener('focusout', (event) => {
  if (
    anchor !== null &&
    event.target instanceof Node &&
    (anchor === event.target || event.target.contains(anchor))
  ) {
    hide();
  }
});

document.addEventListener(
  'keydown',
  (event) => {
    if (event.key === 'Escape') {
      hide();
    }
  },
  true,
);

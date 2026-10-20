/**
 * Every 1.5 s, shows the next child of each `.cofh-cycle` (or a random one for
 * `.cofh-cycle.random`), skipping cycles marked `.paused`.
 */
window.setInterval(() => {
  for (const current of document.querySelectorAll<HTMLElement>(
    '.cofh-cycle:not(.paused) > :not(.hidden)',
  )) {
    if (current.parentElement === null) {
      continue;
    }

    const others = [...current.parentElement.children].filter((child) => child !== current);
    if (others.length === 0) {
      continue;
    }

    const next = current.parentElement.classList.contains('random')
      ? others[Math.floor(Math.random() * others.length)]
      : (current.nextElementSibling ?? others[0]);

    current.classList.add('hidden');
    next.classList.remove('hidden');
  }
}, 1500);

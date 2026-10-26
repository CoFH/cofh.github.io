// Animate `.cofh-cycle` blocks by making each child visible in succession
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

// Switch images within a `.cofh-cycle` from lazy to eager loading when it
// enters the viewport, so they are loaded before becoming visible in the cycle
const observer = new IntersectionObserver(
  (entries) => {
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry) => {
        entry.target.querySelectorAll('img').forEach((image) => {
          image.loading = 'eager';
        });

        observer.unobserve(entry.target);
      });
  },
  { rootMargin: '200px' },
);

document.querySelectorAll('.cofh-cycle').forEach((cycle) => observer.observe(cycle));

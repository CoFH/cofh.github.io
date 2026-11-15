// Animate `.cycle` blocks by making each child visible in succession
window.setInterval(() => {
  document
    .querySelectorAll<HTMLElement>('.cycle:not(.paused) > :not(.hidden)')
    .forEach((current) => {
      if (current.parentElement === null) {
        return;
      }

      const others = [...current.parentElement.children].filter((child) => child !== current);
      if (others.length === 0) {
        return;
      }

      const next = current.parentElement.classList.contains('random')
        ? others[Math.floor(Math.random() * others.length)]
        : (current.nextElementSibling ?? others[0]);

      current.classList.add('hidden');
      next.classList.remove('hidden');
    });
}, 1500);

// Load all images within a `.cycle` when it enters the viewport, so they are
// loaded before becoming visible in the cycle
const observer = new IntersectionObserver(
  (entries) => {
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry) => {
        entry.target.querySelectorAll('img').forEach((image) => {
          image.loading = 'eager';
        });

        entry.target.querySelectorAll<HTMLElement>('[data-background-image]').forEach((element) => {
          new Image().src = element.dataset.backgroundImage!;
        });

        observer.unobserve(entry.target);
      });
  },
  { rootMargin: '200px' },
);

document.querySelectorAll('.cycle').forEach((cycle) => observer.observe(cycle));

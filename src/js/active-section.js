const navSectionNames = ['hero', 'products', 'made', 'reviews', 'locations'];
const navSections = navSectionNames.map(name => document.getElementById(name));
const navLinks = navSectionNames.flatMap(name =>
  Array.from(document.querySelectorAll(`a.nav-link[href="#${name}"]`))
);
let currentTimerId;

const sectionObserver = new IntersectionObserver(handleIntersection, {
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
});

function handleIntersection() {
  clearTimeout(currentTimerId);

  currentTimerId = setTimeout(() => {
    const currentSection = navSections.find(section => {
      const { top, bottom } = section.getBoundingClientRect();

      return (
        (bottom > innerHeight / 2 && bottom < innerHeight) ||
        (top < innerHeight / 2 && top > 0) ||
        (top <= 0 && bottom >= innerHeight)
      );
    });

    highlightNavLink(currentSection?.id);
  }, 200);
}

function highlightNavLink(name) {
  if (!name) return;

  const activeNavLinks = navLinks.filter(
    link => link.getAttribute('href') === `#${name}`
  );

  navLinks.forEach(link => link.classList.remove('active'));
  activeNavLinks.forEach(link => link.classList.add('active'));
}

export default function observeSections() {
  navLinks.forEach(link =>
    link.addEventListener('click', e =>
      highlightNavLink(e.target.getAttribute('href').slice(1))
    )
  );

  navSections.forEach(section => sectionObserver.observe(section));
}

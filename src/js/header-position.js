const header = document.querySelector('.header');
const headerPositionIndicator = document.querySelector(
  '.header-position-indicator'
);

const headerOberver = new IntersectionObserver(handleHeaderIntersection);

function handleHeaderIntersection(entries) {
  const { isIntersecting } = entries[0];

  if (isIntersecting) {
    header.classList.remove('header-sticky');
  } else {
    header.classList.add('header-sticky');
  }
}

export default function handleHeaderPosition() {
  headerOberver.observe(headerPositionIndicator);
}

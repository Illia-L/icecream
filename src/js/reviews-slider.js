const reviewsSection = document.getElementById('reviews');

function observerCallback([entry], observer) {
  if (!entry.isIntersecting) return;

  runReviewsSlider();
  observer.unobserve(entry.target);
}

const swiperObserver = new IntersectionObserver(observerCallback);

async function runReviewsSlider() {
  const { default: Swiper } = await import('swiper');
  const { Autoplay, Pagination } = await import('swiper/modules');

  await import('swiper/css');
  await import('swiper/css/pagination');

  Swiper.use([Autoplay, Pagination]);

  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 6000,
      pauseOnMouseEnter: true,
    },
    speed: 1200,
    grabCursor: true,
    pagination: {
      el: '.review-controls',
      bulletActiveClass: 'review-controls-active',
      bulletClass: 'review-controls-button',
      bulletElement: 'button',
      clickable: true,
    },
  });
}

export default function initReviewsSlider() {
  swiperObserver.observe(reviewsSection);
}

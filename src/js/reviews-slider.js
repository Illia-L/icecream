import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function initReviewsSlider() {
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

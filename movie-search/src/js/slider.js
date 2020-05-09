import Swiper from 'swiper';

let slides;

function setSlidesAmount() {
  const width = window.innerWidth;
  if (width > 1000) {
    slides = 4;
  } else if (width > 700) {
    slides = 3;
  } else if (width > 500) {
    slides = 2;
  } else {
    slides = 1;
  }
  return slides;
}

const swiper = new Swiper('.swiper-container', {
  slidesPerView: setSlidesAmount(),
  spaceBetween: 0,
  slidesPerGroup: setSlidesAmount(),
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const reGroup = () => {
  swiper.params.slidesPerView = setSlidesAmount();
  swiper.params.slidesPerGroup = setSlidesAmount();
};

window.addEventListener('resize', reGroup);

export { swiper as default };

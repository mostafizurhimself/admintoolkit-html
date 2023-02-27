import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const carousel = {
  init () {
    const swiperBasic                 = document.querySelectorAll('.swiper-basic');
    const swiperWithControl           = document.querySelectorAll('.swiper-with-control');
    const swiperWithPagination        = document.querySelectorAll('.swiper-with-pagination');    
    const swiperWithCustomPagination  = document.querySelectorAll('.swiper-with-custom-pagination');   
    const swiperWithContent           = document.querySelectorAll('.swiper-with-content');   
    const swiperWithProgress          = document.querySelectorAll('.swiper-with-progress');    
    const swiperWithAutoplay          = document.querySelectorAll('.swiper-with-autoplay');    
    const swiperMultiple              = document.querySelectorAll('.swiper-multiple');    
  
    if(swiperBasic.length) {
      [...swiperBasic].forEach(swiperElement => new Swiper(swiperElement));
    }

    if(swiperWithControl.length) {
      [...swiperWithControl].forEach(swiperElement => new Swiper(swiperElement, {
        modules: [Navigation],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }));
    }
    
    if(swiperWithPagination.length) {
      [...swiperWithPagination].forEach(swiperElement => new Swiper(swiperElement, {
        modules: [Pagination],
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      }));
    }

    if(swiperWithCustomPagination.length) {
      [...swiperWithCustomPagination].forEach(swiperElement => new Swiper(swiperElement, {
        modules: [Pagination],
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
          },
        }
      }));
    }

    if(swiperWithContent.length) {
      [...swiperWithContent].forEach(swiperElement => new Swiper(swiperElement, {
        modules: [Navigation, Pagination],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      }));
    }

    if(swiperWithProgress.length) {
      [...swiperWithProgress].forEach(swiperElement => new Swiper(swiperElement, {
        modules: [Pagination],
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        }
      }));
    }

    if(swiperWithAutoplay.length) {
      [...swiperWithAutoplay].forEach(swiperElement => new Swiper(swiperElement, {
        loop: true,
        modules: [Autoplay, Navigation, Pagination],
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
        }
      }));
    }

    if(swiperMultiple.length) {
      [...swiperMultiple].forEach(swiperElement => new Swiper(swiperElement, {
        centeredSlides: true,
        centeredSlidesBounds: true,
        grabCursor: true,
        centeredSlides: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 25
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        },
        modules: [Navigation],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }));
    }
  }
};


export default carousel;
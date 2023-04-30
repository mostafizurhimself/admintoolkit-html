import Swiper, { Navigation, Pagination, Autoplay, Thumbs, Scrollbar } from 'swiper';

const carousel = {
  init() {
    const swiperBasic = this.querySelectors('.swiper-basic');
    const swiperWithNavigation = this.querySelectors('.swiper-with-navigation');
    const swiperWithPagination = this.querySelectors('.swiper-with-pagination');
    const swiperWithCustomPagination = this.querySelectors('.swiper-with-custom-pagination');
    const swiperWithProgress = this.querySelectors('.swiper-with-progress');
    const swiperWithScrollbar = this.querySelectors('.swiper-with-scrollbar');
    const swiperWithThumbnailPreview = this.querySelectors('.swiper-with-thumbnail-preview');
    const swiperWithAutoplay = this.querySelectors('.swiper-with-autoplay');
    const swiperMultiple = this.querySelectors('.swiper-multiple');
    const swiperCustom = this.querySelectors('.swiper-custom');

    if (swiperBasic.length) {
      swiperBasic.forEach((swiperElement) => new Swiper(swiperElement));
    }

    if (swiperWithNavigation.length) {
      swiperWithNavigation.forEach(
        (swiperElement) =>
          new Swiper(swiperElement, {
            hideOnClick: true,
            modules: [Navigation],
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
      );
    }

    if (swiperWithPagination.length) {
      swiperWithPagination.forEach(
        (swiperElement) =>
          new Swiper(swiperElement, {
            modules: [Pagination],
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          })
      );
    }

    if (swiperWithCustomPagination.length) {
      swiperWithCustomPagination.forEach(
        (swiperElement) =>
          new Swiper(swiperElement, {
            modules: [Pagination],
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className}">${index + 1}</span>`;
              },
            },
          })
      );
    }

    if (swiperWithProgress.length) {
      swiperWithProgress.forEach(
        (swiperElement) =>
          new Swiper(swiperElement, {
            modules: [Pagination],
            pagination: {
              el: '.swiper-pagination',
              type: 'progressbar',
            },
          })
      );
    }

    if (swiperWithScrollbar.length) {
      swiperWithScrollbar.forEach(
        (swiperElement) =>
          new Swiper(swiperElement, {
            modules: [Scrollbar],
            scrollbar: {
              el: '.swiper-scrollbar',
              hide: true,
            },
          })
      );
    }

    if (swiperWithThumbnailPreview.length) {
      swiperWithThumbnailPreview.forEach((swiperElement) => {
        const swiperPreview = swiperElement.nextElementSibling;

        if (swiperPreview && swiperPreview.classList.contains('swiper-preview')) {
          const swiperPreviewInstance = new Swiper(swiperPreview, {
            spaceBetween: 16,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
            },
          });

          new Swiper(swiperElement, {
            modules: [Navigation, Thumbs],
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            thumbs: {
              swiper: swiperPreviewInstance,
            },
          });
        }
      });
    }

    if (swiperWithAutoplay.length) {
      swiperWithAutoplay.forEach(
        (swiperElement) =>
          new Swiper(swiperElement, {
            loop: true,
            modules: [Autoplay, Navigation, Pagination],
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination',
            },
          })
      );
    }

    if (swiperMultiple.length) {
      swiperMultiple.forEach(
        (swiperElement) =>
          new Swiper(swiperElement, {
            grabCursor: true,
            breakpoints: {
              320: {
                slidesPerView: 2,
                spaceBetween: 15,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            },
            modules: [Navigation],
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
      );
    }

    if (swiperCustom.length) {
      swiperCustom.forEach(
        (swiperElement) =>
          new Swiper(swiperElement, {
            loop: true,
            modules: [Pagination, Navigation],
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
      );
    }
  },

  querySelectors(selectors) {
    let output = [];

    if (selectors) {
      output = [...document.querySelectorAll(selectors)].filter((selectorElement) => {
        // Return all the elements except .code-viewer-source children elements
        return !selectorElement.parentElement.classList.contains('code-viewer-source');
      });
    }

    return output;
  },
};

export default carousel;

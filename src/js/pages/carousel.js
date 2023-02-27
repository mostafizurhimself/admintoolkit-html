const basicCarouselSourceCode = `
  <div class="swiper swiper-basic">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
    </div>
  </div>

  \<script\>
    import Swiper from 'swiper';
    const basic = new Swiper('.swiper-basic');
  \<\/script\>
`;
const carouselWithControlSourceCode = `
  <div class="swiper swiper-with-control">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    \<script\>
      import Swiper, { Navigation } from 'swiper';
      
      const control = new Swiper('.swiper-with-control', {
        modules: [Navigation],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
    \<\/script\>
  </div>
`;
const carouselWithPaginationSourceCode = `
  <div class="swiper swiper-with-pagination">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
    </div>
    
    <div class="swiper-pagination"></div>
  </div>

  \<script\>
    import Swiper, { Pagination } from 'swiper';
    const pagination = new Swiper('.swiper-with-pagination', {
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
        
      }
    });
  \<\/script\>
 
`;
const carouselWithCustomPaginationSourceCode = `
  <div class="swiper swiper-with-custom-pagination">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-custom"></div>
  </div>

  \<script\>
      import Swiper, { Pagination } from 'swiper';
      const customPagination = new Swiper('.swiper-with-custom-pagination', {
        modules: [Pagination],
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }
      });
  \<\/script\>
`;
const carouselWithContentSourceCode = `
  <div class="swiper swiper-with-content">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
    </div>

    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  
  \<script\>
      import Swiper, { Navigation, Pagination } from 'swiper';
      const content = new Swiper('.swiper-with-content', {
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
      });
\<\/script\>
`;
const carouselWithProgressSourceCode = `
  <div class="swiper swiper-with-progress">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  \<script\>
      import Swiper, { Pagination } from 'swiper';
      const progress = new Swiper('.swiper-with-progress', {
        modules: [Pagination],
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        }
      });
  \<\/script\>
`;
const carouselWithAutoplaySourceCode = `
  <div class="swiper swiper swiper-with-autoplay">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>

  \<script\>
      import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

      const autoplay = new Swiper('.swiper-with-autoplay', {
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
      });
  \<\/script\>
`;
const carouselWithMultipleItemsSourceCode = `
  <div class="swiper swiper-multiple">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-slide">
        <!-- ... -->
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
  \<script\>
      import Swiper, { Navigation, Pagination } from 'swiper';

      const autoplay = new Swiper('.swiper-multiple', {
        slidesPerView: 4,
        centeredSlides: true,
        centeredSlidesBounds: true,
        spaceBetween: 30,
        grabCursor: true,
        centeredSlides: true,
        modules: [Navigation],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
  \<\/script\>
`;

const basicCodeViewer = createCodeViewer('#basic-carousel-code-viewer', basicCarouselSourceCode);
const carouselWithControlCodeViewer = createCodeViewer('#carousel-with-control-code-viewer', carouselWithControlSourceCode);
const carouselWithPaginationCodeViewer = createCodeViewer('#carousel-with-pagination-code-viewer', carouselWithPaginationSourceCode);
const carouselWithCustomPaginationCodeViewer = createCodeViewer('#carousel-with-custom-pagination-code-viewer', carouselWithCustomPaginationSourceCode);
const carouselWithContentCodeViewer = createCodeViewer('#carousel-with-content-code-viewer', carouselWithContentSourceCode);
const carouselWithProgressCodeViewer = createCodeViewer('#carousel-with-progress-code-viewer', carouselWithProgressSourceCode);
const carouselWithAutoplayCodeViewer = createCodeViewer('#carousel-with-autoplay-code-viewer', carouselWithAutoplaySourceCode);
const carouselWithMultipleItemsCodeViewer = createCodeViewer('#carousel-with-multiple-items-code-viewer', carouselWithMultipleItemsSourceCode);

basicCodeViewer.render();
carouselWithControlCodeViewer.render();
carouselWithPaginationCodeViewer.render();
carouselWithCustomPaginationCodeViewer.render();
carouselWithContentCodeViewer.render();
carouselWithProgressCodeViewer.render();
carouselWithAutoplayCodeViewer.render();
carouselWithMultipleItemsCodeViewer.render();

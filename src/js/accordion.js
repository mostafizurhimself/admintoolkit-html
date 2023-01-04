const accordion = {
  init() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach((accordion) => {
      const accordionBtn = accordion.querySelector('.accordion-btn');

      accordionBtn.addEventListener('click', () => {
        const accordionContent = accordion.querySelector('.accordion-content');

        if (accordionContent) {
          if (!accordion.classList.contains('open')) {
            //open the accordion
            accordion.classList.add('open');

            accordionContent.style.height = 0;

            setTimeout(() => {
              accordionContent.style.height = accordionContent.scrollHeight + 'px';
            }, 10);
          } else {
            //close the accordion
            accordionContent.style.height = accordionContent.scrollHeight + 'px';

            setTimeout(() => {
              accordionContent.style.height = 0;
            }, 10);

            setTimeout(() => {
              accordion.classList.remove('open');

              accordionContent.removeAttribute('style');
            }, 10);
          }
        }
      });
    });
  },
};

export default accordion;

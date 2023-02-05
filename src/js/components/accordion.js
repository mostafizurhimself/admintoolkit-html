class Accordion {

  constructor(accordion) {
    this.accordionItems   = accordion.querySelectorAll('.accordion-item');

    [...this.accordionItems].forEach((accordionItem) => {
        const accordionBtn = accordionItem.querySelector('.accordion-btn');

        accordionBtn.addEventListener('click', () => {
          [...this.accordionItems].forEach((accordionItem) => {
            if(accordionItem.classList.contains('active')) {
              this.hide(accordionItem);
            }
          });

          this.toggle(accordionItem);
        })
    });

  }

  toggle(accordionItem) {

    if(!accordionItem.classList.contains('active')) {

      this.show(accordionItem);

    }else {

      this.hide(accordionItem);
    }
  }

  show(accordionItem) {
    const accordionContent = accordionItem.querySelector('.accordion-content');

    accordionItem.classList.add('active');
    accordionContent.style.height = '0px';

    setTimeout(() => {

      accordionContent.style.height = accordionContent.scrollHeight + 'px';

    }, 5);

    setTimeout(() => {

      accordionContent.removeAttribute('style');

    }, 300);
  }

  hide(accordionItem) {
    const accordionContent = accordionItem.querySelector('.accordion-content');

    accordionContent.style.height = accordionContent.scrollHeight + 'px';

    setTimeout(() => {

      accordionContent.style.height = '0px';

    }, 5)

    setTimeout(() => {
      
      accordionItem.classList.remove('active');
      accordionContent.removeAttribute('style');

    }, 300)
  }
}

const accordion = {
  init() {
    const accordions = document.querySelectorAll('.accordion');

    if(accordions.length) {
      [...accordions].forEach((accordion) => new Accordion(accordion));
    }
  }
}

export default accordion;
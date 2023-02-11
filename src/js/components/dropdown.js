import { computePosition, offset, flip, shift } from '@floating-ui/dom';

class Dropdown {
  constructor(target) {
    if (typeof target === 'string') {
      this.target = document.querySelector(target);
    }

    if (target instanceof HTMLElement) {
      this.target = target;
    }

    if (!this.target) {
      throw new Error('No target element found');
    }

    this.toggle = this.target.querySelector('.dropdown-toggle');
    this.content = this.target.querySelector('.dropdown-content');

    if (!this.toggle) {
      throw new Error('No toggle element found');
    }

    if (!this.content) {
      throw new Error('No content element found');
    }

    this.init();
  }

  init() {
    this.registerEvents();
  }

  computePosition() {
    computePosition(this.target, this.content, {
      placement: 'bottom-end',
      strategy: 'absolute',
      middleware: [flip(), shift(), offset(6)],
    }).then((position) => {
      Object.assign(this.content.style, {
        left: `${position.x}px`,
        top: `${position.y}px`,
      });
    });
  }

  registerEvents() {
    const outsideClickListener = (e) => {
      if (!this.target.contains(e.target)) {
        this.content.classList.remove('show');
        this.content.classList.remove('animate-fade-in-up');
        removeClickListener();
      }
    };

    const removeClickListener = () => {
      document.removeEventListener('click', outsideClickListener);
    };

    this.toggle.addEventListener('click', () => {
      this.computePosition();
      this.content.classList.toggle('show');
      this.content.classList.toggle('animate-fade-in-up');
      document.addEventListener('click', outsideClickListener);
    });
  }
}

const dropdown = {
  init() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((dropdown) => {
      new Dropdown(dropdown);

      // const toggle = dropdown.querySelector('.dropdown-toggle');
      // const content = dropdown.querySelector('.dropdown-content');

      // toggle.addEventListener('click', () => {
      //   content.classList.toggle('show');
      //   content.classList.toggle('animate-fade-in-up');
      // });

      // document.addEventListener('click', (e) => {
      //   if (!dropdown.contains(e.target)) {
      //     content.classList.remove('show');
      //     content.classList.remove('animate-fade-in-up');
      //   }
      // });
    });
  },
};

export default dropdown;

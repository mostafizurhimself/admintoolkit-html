import { computePosition, offset, flip, shift, autoUpdate, hide } from '@floating-ui/dom';

class Dropdown {
  constructor(target, options = {}) {
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

    this.options = options;
    this.init();
  }

  init() {
    const outsideClickListener = (e) => {
      if (!this.target.contains(e.target)) {
        this.content.classList.remove('show');
        this.content.classList.remove('animate-fade-in-up');
        removeClickListener();
      }
    };

    const removeClickListener = () => {
      this.cleanup();
      document.removeEventListener('click', outsideClickListener);
    };

    this.toggle.addEventListener('click', () => {
      this.updatePosition();
      this.content.classList.toggle('show');
      this.content.classList.toggle('animate-fade-in-up');
      document.addEventListener('click', outsideClickListener);
    });
  }

  computePosition() {
    if (this.options.strategy === 'absolute') {
      this.content.style.position = 'absolute';
    }
    computePosition(this.target, this.content, {
      placement: this.options.placement || 'bottom-start',
      strategy: this.options.strategy || 'fixed',
      middleware: [flip(), shift(), offset(6), hide()],
    }).then((position) => {
      const { referenceHidden } = position.middlewareData.hide;
      Object.assign(this.content.style, {
        visibility: referenceHidden ? 'hidden' : 'visible',
        left: `${position.x}px`,
        top: `${position.y}px`,
      });
    });
  }

  updatePosition() {
    const cleanup = autoUpdate(this.target, this.content, this.computePosition.bind(this));
    this.cleanup = cleanup;
  }
}

const dropdown = {
  init() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((dropdown) => {
      new Dropdown(dropdown, dropdown.dataset);
    });
  },
};

export default dropdown;

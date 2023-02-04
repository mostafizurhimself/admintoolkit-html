class ScrollSpy {
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

    // Set the default options
    this.options = {
      root: null,
      offset: 0,
      threshold: 0.5,
      ...options,
    };

    // Get the links
    this.links = this.target.querySelectorAll('a[href^="#"]');

    // Extract the ids from the links
    const ids = [...this.links].map((link) => link.getAttribute('href'));

    // Get the sections from the ids
    this.sections = ids.map((id) => document.querySelector(id));

    // Observe the sections
    this.observe();
  }

  observe() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const link = this.target.querySelector(`a[href="#${id}"]`);

        if (entry.isIntersecting) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }, this.options);

    this.sections.forEach((section) => {
      observer.observe(section);
    });
  }
}

const scrollSpy = {
  init: function () {
    const targets = document.querySelectorAll('.scroll-spy');
    targets.forEach((target) => {
      new ScrollSpy(target);
    });
  },
};

window.scrollSpy = function (target, options) {
  return new ScrollSpy(target, options);
};

export default scrollSpy;

class Drawer {
  constructor(target, options = {}) {
    //Store the target element
    this.target = null;

    //Store drawer element
    this.drawer = null;

    //Store drawer toggle
    this.toggle = null;

    //Store drawer transition in miliseconds.
    this.transition = 500;

    //Store drawer dismisses
    this.dismisses = null;

    //Store the drawer options
    this.options = {
      keyboard: true, //Boolean. Default is true
      backdrop: true, //Boolean | 'static'. Default is true
      ...options,
    };

    this.documentOnKeydown = (e) => this.hideOnKeydown({ e, drawer: this });

    if (typeof target === 'string') {
      this.target = document.querySelector(target);
    } else if (target instanceof HTMLElement) {
      this.target = target;
    } else {
      throw new Error('No target element found');
    }

    if (this.target.classList.contains('drawer')) {
      this.drawer = this.target;
    } else {
      this.toggle = this.target;
      this.drawer = document.querySelector(this.toggle.dataset.target);

      this.toggle.addEventListener('click', () => {
        const openDrawers = document.querySelectorAll('.drawer.show');

        if (openDrawers.length) {
          [...openDrawers].forEach((drawer) => this.hide(drawer));
        } else {
          this.show();
        }
      });
    }

    this.dismisses = this.drawer.querySelectorAll('[data-dismiss="drawer"]');

    if (this.dismisses.length) {
      [...this.dismisses].forEach((dismiss) => {
        dismiss.addEventListener('click', () => this.hide());
      });
    }
  }

  show(element = null) {
    const drawer = element ? element : this.drawer;

    if (!drawer.classList.contains('showing')) {
      drawer.classList.add('showing');

      if (this.options.backdrop) {
        document.body.appendChild(this.createBackdrop());
      }

      setTimeout(() => {
        const drawerBackdrop = document.querySelector('.drawer-backdrop');
        drawer.classList.replace('showing', 'show');

        if (drawerBackdrop) {
          drawerBackdrop.classList.add('show');

          drawerBackdrop.addEventListener('click', () => {
            if (this.options.backdrop !== 'static') {
              this.hide();
            }
          });
        }

        if (this.options.keyboard) {
          document.addEventListener('keydown', this.documentOnKeydown);
        }
      }, 15);
    }
  }

  hide(element = null) {
    const drawer = element ? element : this.drawer;

    if (drawer.classList.contains('show') && !drawer.classList.contains('hiding')) {
      const drawerBackdrop = document.querySelector('.drawer-backdrop');

      drawer.classList.add('hiding');

      if (drawerBackdrop) {
        drawerBackdrop.classList.remove('show');
      }

      setTimeout(() => {
        drawer.classList.remove('show');
        drawer.classList.remove('hiding');

        if (drawerBackdrop) {
          drawerBackdrop.remove();
        }

        if (this.options.keyboard) {
          document.removeEventListener('keydown', this.documentOnKeydown);
        }
      }, this.transition);
    }
  }

  hideOnKeydown(args) {
    const { e, drawer } = args;

    if (e.key === 'Escape' && drawer.options.keyboard) {
      drawer.hide();
    }
  }

  createBackdrop() {
    if (document.querySelector('.drawer-backdrop')) {
      document.querySelector('.drawer-backdrop').remove();
    }

    const backdrop = document.createElement('div');
    backdrop.setAttribute('class', 'drawer-backdrop');

    return backdrop;
  }
}

const drawer = {
  init() {
    const toggles = this.querySelectors('[data-toggle="drawer"]');

    if (toggles.length) {
      toggles.forEach((toggle) => {
        const targetId = toggle.dataset.target;

        if (targetId) {
          const target = document.querySelector(targetId);
          const options = {
            keyboard: target.dataset.keyboard === 'false' ? false : true,
            backdrop: (() => {
              let output = true;

              if (target.dataset.backdrop === 'static') {
                output = 'static';
              }

              if (target.dataset.backdrop === 'false') {
                output = false;
              }

              return output;
            })(),
          };

          new Drawer(toggle, options);
        }
      });
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

window.createDrawer = function (target, options = {}) {
  return new Drawer(target, options);
};

export default drawer;

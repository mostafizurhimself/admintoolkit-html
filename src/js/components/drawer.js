class Drawer {
  constructor(target, options = {}) {
    //Store the target element
    this.target = null;

    //Store drawer element
    this.drawer = null;
    
    //Store drawer toggle
    this.toggle = null;

    //Store drawer dismisses
    this.dismisses = null;

    // Store the function for calling on keydown
    this.documentOnKeydown = (e) => this.hideOnKeydown({e, drawer: this});

    //Store the modal options
    this.options  = {
      keyboard: true,
      backdrop: true, //Boolean | 'static'. Default is true
      ...options
    };

    if(typeof target === 'string') {

      this.target = document.querySelector(target);

    }else if(target instanceof HTMLElement) {

      this.target = target;

    }else { 

      throw new Error('No target element found');
    }

    if(!this.target.classList.contains('drawer')) {
      this.toggle = this.target;
      this.drawer = document.querySelector(this.toggle.dataset.target);

      if(this.drawer) {
        this.toggle.addEventListener('click', () => {
          // Store previously open drawers
          const openDrawers = document.querySelectorAll('.drawer.show');
          
          if(openDrawers.length) {
            // Hide previously open drawers
            [...openDrawers].forEach(openDrawer => this.hide(openDrawer));

          }else {

            this.show();
          }
        });
      }

    }else {
      this.drawer = this.target;
    }

    this.dismisses = this.drawer.querySelectorAll('[data-dismisss="drawer"]');

    if(this.dismisses.length) {
      [...this.dismisses].forEach(dismiss => dismiss.addEventListener('click', () => this.hide()));
    }
  }

  show(element = null) {
    const drawer = element ? element : this.drawer;
    
    if(!drawer.classList.contains('showing')) {

      drawer.classList.add('showing');

      if(this.options.backdrop) {
        let backdropOverlay = this.createBackdrop();

        backdropOverlay.addEventListener('click', () => {
          if(this.options.backdrop !== 'static') {
            this.hide();
          }
        });

        document.body.appendChild(backdropOverlay);
      }

      setTimeout(() => {
        drawer.classList.replace('showing', 'show');

        if(document.querySelector('.drawer-backdrop')) {
          document.querySelector('.drawer-backdrop').classList.add('show');
        }

        if(this.options.keyboard) {
          document.addEventListener('keydown', this.documentOnKeydown);
        }
      }, 15);
    }
  } 

  hide(element = null) {
    const drawer = element ? element : this.drawer;

    if(drawer.classList.contains('show') && !drawer.classList.contains('hiding')) {
      drawer.classList.add('hiding');

      if(document.querySelector('.drawer-backdrop')) {
        document.querySelector('.drawer-backdrop').classList.remove('show')
      }

      setTimeout(() => {
        drawer.classList.remove('show');

        drawer.classList.remove('hiding');

        if(document.querySelector('.drawer-backdrop')) {
          document.querySelector('.drawer-backdrop').remove();
        }

        if(this.options.keyboard) {
          document.removeEventListener('keydown', this.documentOnKeydown);
        }
      }, 500)
    }
  }

  hideOnKeydown(args) {
    //Store the event listener
    const e = args.e;

    // Store the Drawer instance
    const drawer = args.drawer;
    
    if(e.key === 'Escape' && drawer.options.keyboard) {
      // Hide the modal on keypress
      drawer.hide();
    }
  }

  createBackdrop() {
    // Remove overlay if it exists
    if (document.body.querySelector('.drawer-backdrop')) {
      document.body.querySelector('.drawer-backdrop').remove();
    }

    // Create overlay
    const overlay = document.createElement('div');
    overlay.setAttribute('class', 'drawer-backdrop');

    return overlay;
  }
}

const drawer = {
  init () {
    // Select all the targets except .code-viewer-source.
    const toggles = [...document.querySelectorAll('[data-toggle="drawer"]')].filter(toggle => {
      return !toggle.parentNode.classList.contains('code-viewer-source');
    });

    if(toggles.length) {
      toggles.forEach(toggle => {
        if(toggle.dataset.target) {
          const target = document.querySelector(toggle.dataset.target);
          const options = {
            keyboard: target.dataset.keyboard === 'false' ? false : true,
            backdrop: (() => {
              let output = true;

              if(target.dataset.backdrop === 'static') {
                output = 'static';
              }

              if(target.dataset.backdrop === 'false') {
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
};

window.createDrawer = function (target, options = {}) {
  return new Drawer(target, options);
}

export default drawer;
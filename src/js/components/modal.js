export class Modal {
  constructor(target, options = {}) {
    //Store the target element
    this.target = null;

    //Store modal element
    this.modal = null;

    //Store modal toggle
    this.toggle = null;

    //Store drawer dismisses
    this.dismisses = null;

    //Store modal transition in miliseconds.
    this.transition = 500;

    //Store the modal options
    this.options = {
      keyboard: true, //Boolean. Default is true
      backdrop: true, //Boolean | 'static'. Default is true
      autofucus: true, //Boolean. Default is true (focus the first input)
      ...options,
    };

    this.documentOnKeydown = (e) => this.hideOnKeydown({ e, modal: this });

    if (typeof target === 'string') {
      this.target = document.querySelector(target);
    } else if (target instanceof HTMLElement) {
      this.target = target;
    } else {
      throw new Error('No target element found');
    }

    if (this.target.classList.contains('modal')) {
      this.modal = this.target;
    } else {
      this.toggle = this.target;
      this.modal = document.querySelector(this.toggle.dataset.target);

      this.toggle.addEventListener('click', () => this.show());
    }

    this.dismisses = this.modal.querySelectorAll('[data-dismiss="modal"]');

    if (this.dismisses.length) {
      [...this.dismisses].forEach((dismiss) => {
        dismiss.addEventListener('click', () => this.hide());
      });
    }
  }

  show() {
    const modal = this.modal;

    if (!modal.classList.contains('show')) {
      modal.style.display = 'flex';

      modal.appendChild(this.createBackdrop());

      // Focus the first input
      if (this.options.autofucus) {
        const input = modal.querySelector('input');
        input && input.focus();
      }

      setTimeout(() => {
        const modalBackdrop = modal.querySelector('.modal-backdrop');
        modal.classList.add('show');

        if (modalBackdrop) {
          modalBackdrop.classList.add('show');

          modalBackdrop.addEventListener('click', () => {
            if (this.options.backdrop && this.options.backdrop !== 'static') {
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

  hide() {
    const modal = this.modal;

    if (modal.classList.contains('show')) {
      const modalBackdrop = modal.querySelector('.modal-backdrop');
      modal.classList.remove('show');

      if (modalBackdrop) {
        modalBackdrop.classList.remove('show');
      }

      setTimeout(() => {
        modal.removeAttribute('style');

        modalBackdrop.remove();

        document.removeEventListener('keydown', this.documentOnKeydown);
      }, this.transition);
    }
  }

  hideOnKeydown(args) {
    const { e, modal } = args;

    if (e.key === 'Escape' && modal.options.keyboard) {
      modal.hide();
    }
  }

  createBackdrop() {
    if (this.modal.querySelector('.modal-backdrop')) {
      this.modal.querySelector('.modal-backdrop').remove();
    }

    const backdrop = document.createElement('div');
    backdrop.setAttribute('class', 'modal-backdrop');

    return backdrop;
  }
}

const modal = {
  init() {
    const toggles = this.querySelectors('[data-toggle="modal"]');

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

          new Modal(toggle, options);
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

window.createModal = function (target, options = {}) {
  return new Modal(target, options);
};
export default modal;

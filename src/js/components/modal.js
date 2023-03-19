class Modal {

  constructor (target, options = {}) {
    //Store the target element
    this.target = null;

    //Store modal element
    this.modal = null;
    
    //Store modal toggle
    this.toggle  = null;

    //Store modal dismisses
    this.dismisses = null;

    // Store the function for calling on keydown
    this.documentOnKeydown = (e) => this.hideOnKeydown({e, modal: this});

    //Store the modal options
    this.options  = {
      backdrop: true,
      keyboard: true,
      ...options
    };

    if(typeof target === 'string') {

      this.target = document.querySelector(target);

    }else if(target instanceof HTMLElement) {

      this.target = target;

    }else { 

      throw new Error('No target element found');
    }

    if(!this.target.classList.contains('modal')) {
      /**
       * Passed a modal toggle instance
       */
      this.toggle = this.target;
      this.modal  = document.querySelector(this.toggle.dataset.target);

      if(this.modal) {
  
        if(Object.keys(options).length === 0) {
          this.options = { 
            ...this.options, 
            backdrop: this.modal.dataset.backdrop === 'false' ? false : true,
            keyboard: this.modal.dataset.keyboard === 'false' ? false : true,
          }
        }

        this.toggle.addEventListener('click', () => this.show());
      }
    
    }else {
      /**
       * Passed a modal instance
       */
      this.modal = this.target;
    }

    this.dismisses = this.modal.querySelectorAll('[data-dismisss="modal"]');

    if(this.dismisses.length) {
      [...this.dismisses].forEach((dismiss) => dismiss.addEventListener('click', () => this.hide()));
    }
  }

  show() {
    const modal = this.modal;

    if (!modal.classList.contains('show')) {
      // Change the display property none to flex
      modal.style.display = 'flex';

      // Create a modal overlay
      const overlay = this.createOverlay();

      setTimeout(() => {
        // Add the show class to the modal
        modal.classList.add('show');

        // Append the overlay
        modal.appendChild(overlay);
        
        // Add event listener to listen ESC keypress
        document.addEventListener('keydown', this.documentOnKeydown);
      }, 15);
    }
  }

  hide() {
    const modal = this.modal;

    if(modal.classList.contains('show')) {

      modal.classList.remove('show');

      setTimeout(() => {
        // Remove the style attribute to make display none
        modal.removeAttribute('style');

        // Remove the backdrop from modal
        modal.querySelector('.modal-backdrop').remove();

        // Remove keydown eventListener from document
        document.removeEventListener('keydown', this.documentOnKeydown);
      }, 300);
    }
  }

  hideOnKeydown(args) {
    // Store the event listener
    const e     = args.e;

    // Store the Modal instance
    const modal = args.modal;
    
    if(e.key === 'Escape' && modal.options.keyboard) {
      // Hide the modal on keypress
      modal.hide();
    }
  }

  createOverlay() {
    const modal = this.modal;

    // Remove overlay if it exists
    if (modal.querySelector('.modal-backdrop')) {
      modal.querySelector('.modal-backdrop').remove();
    }

    // Create overlay
    const overlay = document.createElement('div');
    overlay.setAttribute('class', 'modal-backdrop');

    // Add Event Listener to overlay
    overlay.addEventListener('click', () => {
      if(this.options.backdrop) {
        this.hide();
      }
    });

    return overlay;
  }
}

const modal = {
  init() {
  
    //Store modal element
    const targets = document.querySelectorAll('[data-toggle="modal"]');

    // Check if the page contains any modal component
    if(targets.length) {
      
      // Create instance for each modal
      [...targets].forEach(target => new Modal(target));
      
    }
  }
}

window.createModal = function (target, options = {}) {
  return new Modal(target, options);
}

export default modal
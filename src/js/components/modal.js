class Modal {

  constructor (target, options = {}) {
    //Store  modal element
    this.target = null;

    //Store  modal element
    this.modal = null;
    
    //Store modal toggle
    this.toggle  = null;

    //Store modal dismisses
    this.dismisses = null;

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

        this.toggle.addEventListener('click', () => this.open());
      }
    
    }else {
      /**
       * Passed a modal instance
       */
      this.modal = this.target;
    }

    this.dismisses = this.modal.querySelectorAll('[data-dismisss="modal"]');

    if(this.dismisses.length) {
      [...this.dismisses].forEach((dismiss) => dismiss.addEventListener('click', () => this.close()));
    }
  }

  open() {
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
        
        document.addEventListener('keydown', this.enableEscClose.bind(this));

      }, 15);
    }
  }

  close() {
    const modal = this.modal;

    if(modal.classList.contains('show')) {

      modal.classList.remove('show');

      setTimeout(() => {
        // Remove the style attribute to make display none
        modal.removeAttribute('style');

        // Remove the backdrop from modal
        modal.querySelector('.modal-backdrop').remove();

        // Remove keydown eventListener from document
        document.removeEventListener('keydown', this.enableEscClose);

      }, 300);
    }
  }

  enableEscClose(e) {
    console.log(this);
    if(this.options.keyboard && e.key === 'Escape') {
      this.close();
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
        this.close();
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
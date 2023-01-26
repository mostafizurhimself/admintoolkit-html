class Alert {
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

    this.dismissButton = this.target.querySelector('.alert-dismiss');

    if (this.dismissButton) {
      this.dismissButton.addEventListener('click', () => this.dismiss());
    }
  }

  dismiss() {
    this.target.classList.add('animate-fade-out');
    setTimeout(() => {
      this.target.remove();
    }, 250);
  }
}

const alert = {
  init: function () {
    const targets = document.querySelectorAll('.alert.alert-dismissible');

    targets.forEach((target) => {
      new Alert(target);
    });
  },
};

// Set up a global function for creating dismissable alerts
window.createDismissableAlert = function (target) {
  return new Alert(target);
};

export default alert;

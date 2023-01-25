class Alert {
  constructor(target) {
    if (!target) {
      throw new Error('No target element provided');
    }

    if (!target instanceof HTMLElement) {
      throw new Error('Invalid target element provided');
    }

    if (typeof target === 'string') {
      this.target = document.querySelector(target);
    }

    this.target = target;
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

export default alert;

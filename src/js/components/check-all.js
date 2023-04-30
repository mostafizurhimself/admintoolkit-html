export class CheckAll {
  constructor(trigger) {
    if (typeof trigger === 'string') {
      this.trigger = document.querySelector(trigger);
    }

    if (trigger instanceof HTMLElement) {
      this.trigger = trigger;
    }

    if (!this.trigger) {
      throw new Error('No target element found');
    }

    this.targets = document.querySelectorAll(this.trigger.dataset.checkAllTarget);

    if (!this.targets) {
      throw new Error('No target element found');
    }

    this.init();
  }

  handleCheck() {
    this.targets.forEach((target) => {
      target.checked = true;
    });
  }

  handleUncheck() {
    this.targets.forEach((target) => {
      target.checked = false;
    });
  }

  init() {
    this.trigger.addEventListener('click', () => {
      if (this.trigger.checked) {
        this.handleCheck();
      } else {
        this.handleUncheck();
      }
    });

    this.targets.forEach((target) => {
      target.addEventListener('click', () => {
        const isAllChecked = Array.from(this.targets).every((target) => target.checked);
        this.trigger.checked = isAllChecked;
      });
    });
  }
}

const checkAll = {
  init: function () {
    const triggers = document.querySelectorAll('[data-check-all');

    triggers.forEach((trigger) => {
      new CheckAll(trigger);
    });
  },
};

export default checkAll;

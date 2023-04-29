class ThemeSwitcher {
  constructor(target) {
    this.dropdown = null;
    this.dropdownBtns = null;

    if (typeof target === 'string') {
      this.dropdown = document.querySelector(target);
    }

    if (target instanceof HTMLElement) {
      this.dropdown = target;
    }

    if (!target) {
      throw new Error('No target element found');
    }

    if (this.dropdown) {
      this.dropdownBtns = this.dropdown.querySelectorAll('[data-theme-mode]');
    }

    if (this.dropdownBtns && this.dropdownBtns.length) {
      this.updateActiveClass();

      [...this.dropdownBtns].forEach((btn) => {
        btn.addEventListener('click', () => this.toggle(btn));
      });
    }
  }

  toggle(btn) {
    const themeMode = btn.dataset.themeMode;

    if (themeMode === 'light') {
      // Whenever the user explicitly chooses light mode
      localStorage.setItem('theme', 'light');
    }

    if (themeMode === 'dark') {
      // Whenever the user explicitly chooses dark mode
      localStorage.setItem('theme', 'dark');
    }

    if (themeMode === 'system') {
      // Whenever the user explicitly chooses to respect the OS preference
      localStorage.removeItem('theme');
    }

    window.location.reload();
  }

  updateActiveClass() {
    [...this.dropdownBtns].forEach((btn) => {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
      }

      if (!localStorage.theme && btn.dataset.themeMode === 'system') {
        btn.classList.add('active');
      }

      if (localStorage.theme === btn.dataset.themeMode) {
        btn.classList.add('active');
      }
    });
  }
}

const themeSwitcher = {
  init() {
    const dropdownThemeSwitcher = document.querySelector('#theme-switcher-dropdown');

    if (dropdownThemeSwitcher) {
      new ThemeSwitcher(dropdownThemeSwitcher);
    }
  },
};

export default themeSwitcher;

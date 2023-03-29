class ThemeSwitcher {
  constructor (target) {
    this.dropdown     = null;
    this.dropdownBtns = null;

    if(typeof target === 'string') {
      this.dropdown = document.querySelector(target);
    }

    if(target instanceof HTMLElement) {
      this.dropdown = target;
    }

    if(!target) {
      throw new Error('No target element found');
    }
    
    if(this.dropdown) {
      this.dropdownBtns = this.dropdown.querySelectorAll('[data-theme-mode]');
    }

    if(this.dropdownBtns && this.dropdownBtns.length) {
      this.updateActiveClass();

      [...this.dropdownBtns].forEach(btn => {
        btn.addEventListener('click', () => this.toggle(btn));
      });
    }
  }

  toggle(btn) {
    const themeMode = btn.dataset.themeMode;

    if(themeMode === 'light') {
      // Whenever the user explicitly chooses light mode
      localStorage.theme = 'light'
    }

    if(themeMode === 'dark') {
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = 'dark'
    }

    if(themeMode === 'system') {
      // Whenever the user explicitly chooses to respect the OS preference
      localStorage.removeItem('theme')
    }

    this.updateActiveClass();
    this.checkThemeMode();
  }

  updateActiveClass() {
    [...this.dropdownBtns].forEach(btn => {
      if(btn.classList.contains('active')) {
        btn.classList.remove('active');
      }

      if(!localStorage.theme && btn.dataset.themeMode === 'system') {
        btn.classList.add('active');
      }
      
      if(localStorage.theme === btn.dataset.themeMode) {
        btn.classList.add('active');
      }
    });
  }

  checkThemeMode() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}


const themeSwitcher = {
  init() {
    const dropdownThemeSwitcher = document.querySelector('#dropdown-theme-switcher');

    if(dropdownThemeSwitcher) {
      new ThemeSwitcher(dropdownThemeSwitcher).checkThemeMode();
    }
  }
} 

export default themeSwitcher;
// const themeSwitcher = {
//   init() {
//     this.toggleThemeMode();
//   },

//   toggleThemeMode() {
//     // Store the theme switcher button
//     const themeModeBtn = document.querySelector('#btn-theme-mode');

//     // Checkt if the themeModeBtn exists
//     if (themeModeBtn) {
//       themeModeBtn.addEventListener('click', () => {
//         if (document.documentElement.classList.contains('dark')) {
//           //switch to light mode
//           localStorage.setItem('theme-mode', 'light');
//           document.documentElement.classList.remove('dark');
//         } else {
//           //switch to dark mode
//           localStorage.setItem('theme-mode', 'dark');
//           document.documentElement.classList.add('dark');
//         }
//       });
//     }
//   },
// };

const themeSwitcher = {
  init() {
    this.checkThemeMode();
    this.toggleThemeMode();
  },

  checkThemeMode() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },

  toggleThemeMode() {
    const dropdownThemeSwitcher = document.querySelector('#dropdown-theme-switcher');
    
    if(dropdownThemeSwitcher) {
      const dropdownItems = dropdownThemeSwitcher.querySelectorAll('.dropdown-item');

      if(dropdownItems.length) {
        [...dropdownItems].forEach(item => {
          item.addEventListener('click', () => {
            const themeMode = item.dataset.themeMode;

            if(themeMode === 'light') {
              // Whenever the user explicitly chooses light mode
              localStorage.theme = 'light';
              this.checkThemeMode();
            }

            if (themeMode === 'dark') {
              // Whenever the user explicitly chooses dark mode
              localStorage.theme = 'dark';
              this.checkThemeMode();
            }

            if (themeMode === 'system') {
              // Whenever the user explicitly chooses to respect the OS preference
              localStorage.removeItem('theme');
              this.checkThemeMode();
            }
          });
        });
      }
    }

  },
};

export default themeSwitcher;

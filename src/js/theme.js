const themeMode = localStorage.getItem('theme-mode');

if (themeMode) {

     document.documentElement.classList.add(themeMode);
} 
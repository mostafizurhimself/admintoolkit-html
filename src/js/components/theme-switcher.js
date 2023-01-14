const themeSwitcher = {

     init() {

          this.toggleThemeMode();
     },

     toggleThemeMode() {

          // Store the theme switcher button
          const themeModeBtn = document.querySelector('#btn-theme-mode');

          // Checkt if the themeModeBtn exists
          if(themeModeBtn) {
               
               themeModeBtn.addEventListener('click', () => {
                    
                    if(document.documentElement.classList.contains('dark')) {
               
                         //switch to light mode 
                         localStorage.setItem('theme-mode', 'light');
                         document.documentElement.classList.remove('dark');
          
                    }else {
          
                         //switch to dark mode
                         localStorage.setItem('theme-mode', 'dark');
                         document.documentElement.classList.add('dark');
                    }
               });
          }
     }    

}

export default themeSwitcher;
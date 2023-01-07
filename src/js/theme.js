const theme = {

     themeModeBtn: document.querySelector('#btn-theme-mode'),

     init() {

          const themeMode = localStorage.getItem('theme-mode');
          const themeModeBtn = this.themeModeBtn;

          if (themeMode) {

               document.documentElement.classList.add(themeMode);
          } 

          themeModeBtn.addEventListener('click', this.toggle);
          
     },

     toggle() {

          if(document.documentElement.classList.contains('dark')) {
               
               //switch to light mode 
               localStorage.setItem('theme-mode', 'light');
               document.documentElement.classList.remove('dark');

          }else {

               //switch to dark mode
               localStorage.setItem('theme-mode', 'dark');
               document.documentElement.classList.add('dark');
          }
     
     }    

}

export default theme;
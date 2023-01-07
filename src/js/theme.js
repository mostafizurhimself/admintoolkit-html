const theme = {
     
     init() {
          
          const btnThemeMode = document.querySelector('#btn-theme-mode');

          btnThemeMode.addEventListener('click', () => {
     
               if(document.documentElement.classList.contains('dark')) {
                    //switch light mode
                    localStorage.theme = 'light';
                    document.documentElement.classList.remove('dark');
                    
               }else {
     
                    //switch dark mode
                    localStorage.theme = 'dark';
                    document.documentElement.classList.add('dark');
     
               }
          });
     }
}

export default theme;
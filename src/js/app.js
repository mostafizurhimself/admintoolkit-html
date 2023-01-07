import dropdown from './dropdown';
import accordion from './accordion';
import highlightCode from './highlight';
import feather from 'feather-icons';


const switchThemeMode  = () => {

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

highlightCode.init();
dropdown.init();
accordion.init();

//Initialize theme mode
switchThemeMode();

// Initialize feather icons
feather.replace();

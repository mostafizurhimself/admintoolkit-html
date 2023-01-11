import hljs from 'highlight.js';
import jsBeautify from 'js-beautify';
import feather from 'feather-icons';

const highlightCode = {

  init() {
    this.highlight();
  },

  highlight() {
    const codeViewers = document.querySelectorAll('.code-viewer');

    // Loop through all code viewers
    codeViewers.forEach((codeViewer) => {
      // Get the source code from the code viewer
      const sourceCode = jsBeautify.html(codeViewer.innerHTML).replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();      
      
      // Create a wrapper element
      const wrapper = document.createElement('div');
      wrapper.classList.add('code-viewer-content');
      wrapper.innerHTML = codeViewer.innerHTML;

      // Append the footer element
      codeViewer.innerHTML = '';
      codeViewer.appendChild(wrapper);
      codeViewer.appendChild(this.createFooterElement());

      // Highlight the code
      const code = codeViewer.querySelector('code');
      code.innerHTML = sourceCode;
      hljs.highlightBlock(code);

      // Add copy to clipboard functionality
      const copyBtn = codeViewer.querySelector('.code-viewer-btn-copy');

      copyBtn.addEventListener('click', () => {

        // Check if the browser supports Clipboard API
        if(navigator.clipboard) {

          // Replace entities
          const originalSourceCode = jsBeautify.html(jsBeautify.html(sourceCode).replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim());

          // Copy the source code to clipboard
          navigator.clipboard.writeText(originalSourceCode);
            
          // Change the icon copy to check
          copyBtn.innerHTML = feather.icons.check.toSvg();
          
          // Change the icon check to copy after 1000ms
          setTimeout(() => {

            copyBtn.innerHTML = feather.icons.copy.toSvg();
            
          }, 1000);
          
        }
        
      });
  
      // Add event listener to toggle button
      const toggle = codeViewer.querySelector('.toggle-input');
      toggle.addEventListener('change', () => {
        const pre = codeViewer.querySelector('pre');
        copyBtn.classList.toggle('invisible');
        pre.classList.toggle('hidden');
      });
      
    });
  },

  createToggleElement() {
    const toggle = document.createElement('label');
    toggle.classList.add('toggle');

    const input = document.createElement('input');
    input.classList.add('toggle-input', 'peer', 'sr-only');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('value', '');

    const toggleBody = document.createElement('div');
    toggleBody.classList.add('toggle-body');

    const span = document.createElement('span');
    span.classList.add('ml-3', 'text-sm', 'font-medium', 'text-slate-400', 'dark:text-slate-300');
    span.innerText = 'Show Code';

    toggle.appendChild(input);
    toggle.appendChild(toggleBody);
    toggle.appendChild(span);

    return toggle;
  },

  createCopyElement() {
    const button =  document.createElement('button');
    button.setAttribute('type','button');
    button.setAttribute('title','Copy to clipboard');
    button.classList.add('code-viewer-btn-copy', 'invisible');
    button.innerHTML = feather.icons.copy.toSvg();
    return button;
  },

  createPreElement() {
    const pre = document.createElement('pre');
    pre.classList.add('hidden');
    const code = document.createElement('code');
    code.classList.add('html');
    pre.appendChild(code);
    return pre;
  },

  createFooterElement() {
    const footer = document.createElement('div');
    const wrapper = document.createElement('div');
    footer.classList.add('code-viewer-footer');
    wrapper.classList.add('flex', 'items-center', 'justify-between');

    // Append toggle and copy element
    wrapper.appendChild(this.createToggleElement());
    wrapper.appendChild(this.createCopyElement());

    // Append wrapper and pre element
    footer.appendChild(wrapper);
    footer.appendChild(this.createPreElement());

    return footer;
  }
};

export default highlightCode;

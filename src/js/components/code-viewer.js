import hljs from 'highlight.js';
import jsBeautify from 'js-beautify';
import feather from 'feather-icons';

const codeViewer = {
  init() {
    this.highlight();
  },

  highlight() {
    const codeViewers = document.querySelectorAll('.code-viewer');

    if (!codeViewer) {
      return;
    }

    // Loop through all code viewers
    codeViewers.forEach((codeViewer) => {
      // Get the source code from the code viewer
      const sourceCode = this.getSourceCode(codeViewer);

      const content = codeViewer.querySelector('.code-viewer-content');

      if (!content) {
        // Create a wrapper element
        const wrapper = document.createElement('div');
        wrapper.classList.add('code-viewer-content');
        wrapper.innerHTML = codeViewer.innerHTML;
        codeViewer.innerHTML = '';
        codeViewer.appendChild(wrapper);
      }

      // Append the footer element
      codeViewer.appendChild(this.createFooterElement());

      // Highlight the code
      const code = codeViewer.querySelector('code');
      code.innerHTML = sourceCode;
      hljs.highlightBlock(code);

      // Add copy to clipboard functionality
      const copyBtn = codeViewer.querySelector('#btn-copy');

      copyBtn.addEventListener('click', () => {
        // Check if the browser supports Clipboard API
        if (navigator.clipboard) {
          // Replace entities
          const originalSourceCode = jsBeautify.html(
            jsBeautify.html(sourceCode).replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim()
          );

          // Copy the source code to clipboard
          navigator.clipboard.writeText(originalSourceCode);

          // Add success class
          copyBtn.classList.add('btn-copy-success');

          // Change button's default html
          copyBtn.innerHTML = `${feather.icons['check-circle'].toSvg({
            width: '1em',
            height: '1em',
          })} <span>Copied</span>`;

          // Change the icon check to copy after 1000ms
          setTimeout(() => {
            // Remove success class
            copyBtn.classList.remove('btn-copy-success');

            // Set button's default html
            copyBtn.innerHTML = `${feather.icons.copy.toSvg({ width: '1em', height: '1em' })} <span>Copy</span>`;
          }, 1200);
        }
      });

      // Add event listener to toggle button
      const toggle = codeViewer.querySelector('.code-viewer-footer').querySelector('.toggle-input');
      toggle.addEventListener('change', () => {
        const pre = codeViewer.querySelector('pre');
        copyBtn.classList.toggle('invisible');
        pre.classList.toggle('hidden');
      });
    });
  },

  getSourceCode(codeViewer) {
    const sourceElement = codeViewer.querySelector('.code-viewer-source');
    if (sourceElement) {
      return jsBeautify.html(sourceElement.innerHTML).replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
    }
    return jsBeautify.html(codeViewer.innerHTML).replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
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
    span.classList.add('label', '!text-slate-400');
    span.innerText = 'Show code';

    toggle.appendChild(input);
    toggle.appendChild(toggleBody);
    toggle.appendChild(span);

    return toggle;
  },

  createCopyElement() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('title', 'Copy to clipboard');
    button.setAttribute('id', 'btn-copy');
    button.classList.add('btn-copy', 'invisible');
    button.innerHTML = `${feather.icons.copy.toSvg({ width: '1em', height: '1em' })} <span>Copy</span>`;
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
  },
};

export default codeViewer;

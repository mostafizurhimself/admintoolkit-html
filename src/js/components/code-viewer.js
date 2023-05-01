import hljs from 'highlight.js';
import jsBeautify from 'js-beautify';
import feather from 'feather-icons';

class CodeViewer {
  constructor(target, sourceCode = null) {
    if (typeof target === 'string') {
      this.target = document.querySelector(target);
    }

    if (target instanceof HTMLElement) {
      this.target = target;
    }

    if (!this.target) {
      throw new Error('No target element found');
    }

    if (sourceCode) {
      this.sourceCode = sourceCode;
    }
  }

  render() {
    // Get the source code from the code viewer
    const sourceCode = this.getSourceCode();

    const content = this.target.querySelector('.code-viewer-content');

    if (!content) {
      // Create a wrapper element
      const wrapper = document.createElement('div');
      wrapper.classList.add('code-viewer-content');
      wrapper.innerHTML = this.target.innerHTML;
      this.target.innerHTML = '';
      this.target.appendChild(wrapper);
    }

    // Append the footer element
    this.target.appendChild(this.createFooterElement());

    // Highlight the code
    const code = this.target.querySelector('.code-viewer-footer code');
    code.innerHTML = sourceCode;
    hljs.highlightElement(code);

    // Add copy to clipboard functionality
    const copyBtn = this.target.querySelector('#btn-copy');

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
    const toggle = this.target.querySelector('.code-viewer-footer .toggle-input');
    toggle.addEventListener('change', () => {
      const pre = this.target.querySelector('.code-viewer-footer pre');
      copyBtn.classList.toggle('invisible');
      pre.classList.toggle('hidden');
    });
  }

  setSourceCode(sourceCode) {
    this.sourceCode = sourceCode;
  }

  getSourceCode() {
    // Get the source code from the sourceCode property
    if (this.sourceCode) {
      return this.beautify(this.sourceCode);
    }

    // Get the source code from the code-viewer-source element
    const sourceElement = this.target.querySelector('.code-viewer-source');
    if (sourceElement) {
      return this.beautify(sourceElement.innerHTML);
    }

    // Get the source code from the code-viewer-content element
    const contentElement = this.target.querySelector('.code-viewer-content');
    if (contentElement) {
      return this.beautify(contentElement.innerHTML);
    }

    // Get the source code from the code-viewer element
    return this.beautify(this.target.innerHTML);
  }

  beautify(code) {
    return jsBeautify.html(code).replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
  }

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
  }

  createCopyElement() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('title', 'Copy to clipboard');
    button.setAttribute('id', 'btn-copy');
    button.classList.add('btn-copy', 'invisible');
    button.innerHTML = `${feather.icons.copy.toSvg({ width: '1em', height: '1em' })} <span>Copy</span>`;
    return button;
  }

  createPreElement() {
    const pre = document.createElement('pre');
    pre.classList.add('hidden');
    const code = document.createElement('code');
    code.classList.add('html');
    pre.appendChild(code);
    return pre;
  }

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
}

const codeViewer = {
  init() {
    document.querySelectorAll('.code-viewer:not([data-render-source="false"])').forEach((target) => {
      new CodeViewer(target).render();
    });
  },
};

window.createCodeViewer = (target, sourceCode) => {
  return new CodeViewer(target, sourceCode);
};

export default codeViewer;

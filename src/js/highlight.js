import hljs from 'highlight.js';
import jsBeautify from 'js-beautify';

// Highlight the code
const highlightCode = () => {
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
    codeViewer.appendChild(createFooterElement());

    // Highlight the code
    const code = codeViewer.querySelector('code');
    code.innerHTML = sourceCode;
    hljs.highlightBlock(code);

    // Add event listener to toggle button
    const toggle = codeViewer.querySelector('.toggle-input');
    toggle.addEventListener('change', () => {
      const pre = codeViewer.querySelector('pre');
      pre.classList.toggle('hidden');
    });
  });
};

// Create the toggle element
const createToggleElement = () => {
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
};

// Create the pre element
const createPreElement = () => {
  const pre = document.createElement('pre');
  pre.classList.add('hidden');
  const code = document.createElement('code');
  code.classList.add('html');
  pre.appendChild(code);
  return pre;
};

// Create the footer element
const createFooterElement = () => {
  const footer = document.createElement('div');
  footer.classList.add('code-viewer-footer');
  footer.appendChild(createToggleElement());
  footer.appendChild(createPreElement());
  return footer;
};

export default highlightCode;

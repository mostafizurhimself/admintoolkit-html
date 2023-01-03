import highlightCode from './highlight';

highlightCode();

const initDropdown = () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const content = dropdown.querySelector('.dropdown-content');

    toggle.addEventListener('click', () => {
      content.classList.toggle('show');
    });
  });
};

initDropdown();

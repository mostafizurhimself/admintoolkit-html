const dropdown = {
  init() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector('.dropdown-toggle');
      const content = dropdown.querySelector('.dropdown-content');

      toggle.addEventListener('click', () => {
        content.classList.toggle('show');
        content.classList.toggle('animate-fade-in-up');
      });

      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
          content.classList.remove('show');
        }
      });
    });
  },
};

export default dropdown;

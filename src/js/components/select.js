import TomSelect from 'tom-select';

const select = {
  init() {
    const tomSelects = document.querySelectorAll('.tom-select');

    if (tomSelects.length) {
      [...tomSelects].forEach((select) => {
        new TomSelect(select, {
          plugins: ['dropdown_input'],
          highlight: false,
        });
      });
    }
  },
};

export default select;

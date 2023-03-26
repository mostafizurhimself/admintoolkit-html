const validation = {
  init() {
    const forms = document.querySelectorAll('.form-validation');

    if(forms.length) {
      [...forms].forEach(form => {
        form.addEventListener('submit', (e) => {
          if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
          }

          form.classList.add('form-validated')
        })
      })
    }
  }
};

export default validation;
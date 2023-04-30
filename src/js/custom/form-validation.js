const customFormValidationSourceCode = `
  <form id="form-custom-validation" class="max-w-lg p-4 mx-auto bg-white border border-slate-300 shadow rounded-primary dark:bg-slate-800 dark:border-slate-600" novalidate>
    <!-- Form Body -->
    <div class="flex flex-col gap-4">
      <!-- Form Row: Full name -->
      <div class="w-full">
        <label class="label label-required mb-1">Full name</label>
        <input class="input" name="full-name" type="text" placeholder="Full name" value="John Doe" required>
        <div class="success-message">Looks good</div>
      </div>
      <!-- Form Row: Company -->
      <div class="w-full">
        <label class="label label-required mb-1">Company</label>
        <input class="input" name="company" type="text" placeholder="Company" value="XYZ Compnay" required>
        <div class="success-message">Looks good</div>
      </div>
      <!-- Form Row: Email -->
      <div class="w-full">
        <label class="label label-required mb-1">Email</label>
        <input class="input" name="email" type="email" placeholder="Email" required>
        <div class="error-message">The email field is required</div>
      </div>
      <!-- Form Row: Phone -->
      <div class="w-full">
        <label class="label label-required mb-1">Phone</label>
        <input class="input" name="phone" type="text" placeholder="Phone" required>
        <div class="error-message">The phone field is required</div>
      </div>
      <!-- Form Row: Message -->
      <div class="w-full">
        <label class="label label-required mb-1">Message</label>
        <textarea class="textarea" name="message" placeholder="Message" required></textarea>
        <div class="error-message">The message field is required</div>
      </div>
      <!-- Form Row: TOS -->
      <div class="w-full">
        <div class="flex items-center gap-1.5">
          <input class="checkbox" type="checkbox" name="tos" required>
          <label class="label">
            I agree with the <a
              class="text-primary-500 transition-colors duration-150 hover:text-primary-600 hover:underline focus:outline-none focus:text-primary-600"
              href="#" target="_blank">term of services</a>
          </label>
        </div>
      </div>
    </div>
    <!-- Form Footer -->
    <div class="w-full flex items-center justify-end mt-6">
      <button class="btn btn-primary" type="submit">Submit</button>
    </div>
  </form>

  <script type="module">
    const formCustomValidation = document.querySelector('#form-custom-validation');

    if(formCustomValidation) {
      formCustomValidation.addEventListener('submit',  function (e) {
        if (!this.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }
        this.classList.add('form-validated')
      })
    }
  </script>
`;

const formCustomValidation = document.querySelector('#form-custom-validation');
const customFormValidationCodeViewer = createCodeViewer(
  '#custom-form-validation-code-viewer',
  customFormValidationSourceCode
);

if (formCustomValidation) {
  formCustomValidation.addEventListener('submit', function (e) {
    if (!this.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    this.classList.add('form-validated');
  });
}

// Render CodeViewer
customFormValidationCodeViewer.render();

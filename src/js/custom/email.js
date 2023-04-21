import Tagify from '@yaireo/tagify';
import Quill from 'quill';

const emailFilter = document.querySelector('#email-filter');
const emailFilterItems = document.querySelectorAll('#email-filter > li.group');
const emailComposeBtnCC = document.querySelector('#email-compose-btn-cc');
const emailComposeBtnBCC = document.querySelector('#email-compose-btn-bcc');
const emailComposeInputTo = document.querySelector('#email-compose-input-to');
const emailComposeInputCC = document.querySelector('#email-compose-input-cc');
const emailComposeInputBCC = document.querySelector('#email-compose-input-bcc');
const emailComposeEditor = document.querySelector('#email-compose-editor');
const emailOverlay = document.querySelector('#email-overlay');
const emailSidebar = document.querySelector('#email-sidebar');
const emailBtnShowSidebar = document.querySelector('#email-btn-show-sidebar');
const emailBtnHideSidebar = document.querySelector('#email-btn-hide-sidebar');

if (emailFilterItems.length) {
  [...emailFilterItems].forEach((filterItem) => {
    filterItem.addEventListener('click', function () {
      const filterItemActive = emailFilter.querySelector('li.active');

      if (!filterItem.classList.contains('active')) {
        filterItem.classList.add('active');

        if (filterItemActive) {
          filterItemActive.classList.remove('active');
        }
      }

      hideEmailSidebar(emailSidebar);
    });
  });
}

if (emailComposeInputTo) {
  new Tagify(emailComposeInputTo);
}

if (emailComposeInputCC) {
  new Tagify(emailComposeInputCC);
}

if (emailComposeInputBCC) {
  new Tagify(emailComposeInputBCC);
}

if (emailComposeEditor) {
  new Quill(emailComposeEditor, {
    theme: 'snow',
    bounds: emailComposeEditor,
    placeholder: 'Write your message',
  });
}

if (emailComposeBtnCC) {
  emailComposeBtnCC.addEventListener('click', () => {
    emailComposeInputCC.parentElement.classList.toggle('hidden');
  });
}

if (emailComposeBtnBCC) {
  emailComposeBtnBCC.addEventListener('click', () => {
    emailComposeInputBCC.parentElement.classList.toggle('hidden');
  });
}

if (emailBtnShowSidebar) {
  emailBtnShowSidebar.addEventListener('click', () => showEmailSidebar(emailSidebar));
}

if (emailBtnHideSidebar) {
  emailBtnHideSidebar.addEventListener('click', () => hideEmailSidebar(emailSidebar));
}

function showEmailSidebar(sidebar) {
  if (!sidebar) return;

  const sidebarComputedStyle = window.getComputedStyle(sidebar);
  const sidebarVisibility = sidebarComputedStyle.getPropertyValue('visibility');

  if (sidebarVisibility === 'hidden') {
    sidebar.classList.add('transform-none');
    sidebar.classList.replace('invisible', 'visible');

    if (emailOverlay) {
      emailOverlay.classList.remove('hidden');

      setTimeout(() => {
        if (emailOverlay) {
          emailOverlay.classList.add('bg-opacity-40');
          emailOverlay.addEventListener('click', () => hideEmailSidebar(emailSidebar));
        }
      }, 15);
    }
  }
}

function hideEmailSidebar(sidebar) {
  if (!sidebar) return;

  const sidebarComputedStyle = window.getComputedStyle(sidebar);
  const sidebarVisibility = sidebarComputedStyle.getPropertyValue('visibility');

  if (sidebarVisibility === 'visible') {
    sidebar.classList.remove('transform-none');

    if (emailOverlay) {
      emailOverlay.classList.remove('bg-opacity-40');

      setTimeout(() => {
        sidebar.classList.replace('visible', 'invisible');
        emailOverlay.classList.add('hidden');
      }, 300);
    }
  }
}

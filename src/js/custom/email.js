"use strict";

import Tagify from '@yaireo/tagify'
import Quill from 'quill';

document.addEventListener('DOMContentLoaded', function () {
  (function () {
    const emailFilter = document.querySelector("#email-filter");
    const emailFilterItems = document.querySelectorAll("#email-filter > li.group");
    const emailComposeBtnCC = document.querySelector('#email-compose-btn-cc');
    const emailComposeBtnBCC = document.querySelector('#email-compose-btn-bcc');
    const emailComposeInputTo = document.querySelector('#email-compose-input-to');
    const emailComposeInputCC = document.querySelector('#email-compose-input-cc');
    const emailComposeInputBCC = document.querySelector('#email-compose-input-bcc');
    const emailComposeEditor = document.querySelector('#email-compose-editor');
    const emailOverlay = document.querySelector('#overlay');
    const emailSidebarLeft = document.querySelector('#email-sidebar-left');
    const emailBtnShowSidebarLeft = document.querySelector('#email-btn-show-sidebar-left');
    const emailBtnHideSidebarLeft = document.querySelector('#email-btn-hide-sidebar-left');

    if (emailFilterItems.length) {
      [...emailFilterItems].forEach(filterItem => {
        filterItem.addEventListener('click', function () {
          const filter = this.dataset.filterBy;
          const filterItemActive = emailFilter.querySelector('li.active');

          if (!filterItem.classList.contains('active')) {
            filterItem.classList.add('active');

            if(filterItemActive) {
              filterItemActive.classList.remove('active');
            }
          }

          new EmailSidebar(emailSidebarLeft).hide();
        })
      })
    }

    if (emailBtnShowSidebarLeft) {
      emailBtnShowSidebarLeft.addEventListener('click', () => {
        new EmailSidebar(emailSidebarLeft).show();
      })
    }

    if (emailBtnHideSidebarLeft) {
      emailBtnHideSidebarLeft.addEventListener('click', () => {
        new EmailSidebar(emailSidebarLeft).hide();
      })
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

    if(emailComposeBtnCC) {
      emailComposeBtnCC.addEventListener('click', () => {
        emailComposeInputCC.parentElement.classList.toggle('hidden');
      });
    }

    if(emailComposeBtnBCC) {
      emailComposeBtnBCC.addEventListener('click', () => {
        emailComposeInputBCC.parentElement.classList.toggle('hidden');
      });
    }

    // Function Sidebar Toggles
    function EmailSidebar(sidebar, options = {}) {
      //Store sidebar element
      this.sidebar = null;

      //Store sidebar transition in miliseconds.
      this.transition = 300;

      //Store the drawer options
      this.options = {
        keyboard: true, //Boolean. Default is true
        backdrop: true, //Boolean | 'static'. Default is true
        ...options,
      };

      this.documentOnKeydown = (e) => this.hideOnKeydown({ e, sidebar: this });

      if (typeof sidebar === 'string') {

        this.sidebar = document.querySelector(sidebar);

      } else if (sidebar instanceof HTMLElement) {

        this.sidebar = sidebar;

      } else {

        throw new Error('No Sidebar element found');
      }

      this.show = function () {
        const sidebar = this.sidebar;
        const sidebarComputedStyle = window.getComputedStyle(sidebar);
        const sidebarVisibility = sidebarComputedStyle.getPropertyValue('visibility');

        if (sidebarVisibility === 'hidden') {
          sidebar.classList.add('transform-none');
          sidebar.classList.replace('invisible', 'visible');

          if (this.options.backdrop && emailOverlay) {
            emailOverlay.classList.remove('hidden');
          }

          setTimeout(() => {
            if (this.options.backdrop && emailOverlay) {
              emailOverlay.classList.add('bg-opacity-40');

              emailOverlay.addEventListener('click', () => {
                if (this.options.backdrop !== 'static') {
                  this.hide();
                }
              });
            }

            if (this.options.keyboard) {
              document.addEventListener('keydown', this.documentOnKeydown);
            }
          }, 15);
        }
      }

      this.hide = function () {
        const sidebar = this.sidebar;
        const sidebarComputedStyle = window.getComputedStyle(sidebar);
        const sidebarVisibility = sidebarComputedStyle.getPropertyValue('visibility');

        if (sidebarVisibility === 'visible') {
          sidebar.classList.remove('transform-none');

          if (this.options.backdrop && emailOverlay) {
            emailOverlay.classList.remove('bg-opacity-40');
          }

          setTimeout(() => {
            sidebar.classList.replace('visible', 'invisible');

            if (this.options.backdrop && emailOverlay) {
              emailOverlay.classList.add('hidden');
            }

            if (this.options.keyboard) {
              document.removeEventListener('keydown', this.documentOnKeydown);
            }

          }, this.transition)
        }
      }

      this.hideOnKeydown = function (args) {
        const { e, sidebar } = args;

        if (e.key === 'Escape' && sidebar.options.keyboard) {
          sidebar.hide();
        }
      }
    }
    
  })()

});
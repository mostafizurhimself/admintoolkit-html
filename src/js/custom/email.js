"use strict";

import Tagify from '@yaireo/tagify'
import Quill from 'quill';

document.addEventListener('DOMContentLoaded', function () {

  (function () {
    const emailFilter = document.querySelector("#email-filter");
    const emailFilterItems = document.querySelectorAll("#email-filter > li[data-filter-by]");
    const emailList = document.querySelector("#email-list");
    const emailListItems = document.querySelectorAll("#email-list > li");
    const emailCheckAll = document.querySelector('#email-check-all');
    const emailMarkAll = document.querySelector('#email-mark-all');
    const emailDeleteAll = document.querySelector('#email-delete-all');
    const emailReplayEditor = document.querySelector('#email-reply-editor');
    const emailComposeBtnCC = document.querySelector('#email-compose-btn-cc');
    const emailComposeBtnBCC = document.querySelector('#email-compose-btn-bcc');
    const emailComposeInputTo = document.querySelector('#email-compose-input-to');
    const emailComposeInputCC = document.querySelector('#email-compose-input-cc');
    const emailComposeInputBCC = document.querySelector('#email-compose-input-bcc');
    const emailComposeEditor = document.querySelector('#email-compose-editor');
    const emailBackdrop = document.querySelector('#email-backdrop');
    const emailBtnToggleSidebarLeft = document.querySelector('#email-btn-toggle-sidebar-left');
    const emailBtnToggleSidebarView = document.querySelector('#email-btn-toggle-sidebar-view');
    const emailSidebarLeft = document.querySelector('#email-sidebar-left');
    const emailSidebarView = document.querySelector('#email-sidebar-view');

    if (emailFilterItems.length) {
      [...emailFilterItems].forEach(filterItem => {
        filterItem.addEventListener('click', function () {
          const filter = this.dataset.filterBy;
          const filterItemActive = emailFilter.querySelector('li.active');
          
          if (!filterItem.classList.contains('active')) {
            filterItemActive.classList.remove('active', 'bg-slate-100', 'dark:bg-slate-700');
            filterItem.classList.add('active', 'bg-slate-100', 'dark:bg-slate-700');;
          }

          if (emailListItems.length) {
            if (filter !== 'inbox') {
              [...emailListItems].forEach(item => {
                if (item.getAttribute(`data-filter-by-${filter}`)) {
                  item.classList.remove('hidden');
                } else {
                  item.classList.add('hidden');
                }
              })
            } else {
              [...emailListItems].forEach(item => {
                item.classList.remove('hidden');
              })
            }
          }

          new EmailSidebar(emailSidebarLeft).hide();
        })
      })
    }

    if (emailListItems.length) {
      [...emailListItems].forEach(listItem => {
        const check = listItem.querySelector('input[type="checkbox"]');
        const btnBookmark = listItem.querySelector('button[data-btn="bookmark"]');
        const btnMark = listItem.querySelector('button[data-btn="mark"]');
        const btnDelete = listItem.querySelector('button[data-btn="delete"]');

        listItem.addEventListener('click', function () {
          const emailSidebarViewInstance = new EmailSidebar(emailSidebarView, {
            backdrop: false
          });
          emailSidebarViewInstance.show();
        });

        check.addEventListener('click', function (e) {
          const checks = emailList.querySelectorAll('input[type="checkbox"]');
          const selectedChecks = emailList.querySelectorAll('input[type="checkbox"]:checked');

          e.stopPropagation();

          if (checks.length === selectedChecks.length) {
            emailCheckAll.checked = true;
          }

          if (selectedChecks.length < checks.length) {
            emailCheckAll.checked = false;
          }
        });

        btnBookmark.addEventListener('click', function (e) {
          const item = this.parentElement.parentElement;
          e.stopPropagation();
          item.classList.toggle('mark-as-starred');
        });

        btnMark.addEventListener('click', function (e) {
          const item = this.parentElement.parentElement.parentElement;
          e.stopPropagation();

          if (!item.classList.contains('mark-as-read')) {
            item.classList.add('mark-as-read');
            item.classList.replace('bg-white', 'bg-slate-50');
            item.classList.replace('dark:bg-slate-800', 'dark:bg-slate-900');

          } else {
            item.classList.remove('mark-as-read');
            item.classList.replace('bg-slate-50', 'bg-white');
            item.classList.replace('dark:bg-slate-900', 'dark:bg-slate-800');
          }

        });

        btnDelete.addEventListener('click', function (e) {
          const item = this.parentElement.parentElement.parentElement;
          e.stopPropagation();

          item.remove();
        });
      })
    }

    if (emailCheckAll) {
      emailCheckAll.addEventListener('click', function (e) {
        if (emailListItems.length) {
          [...emailListItems].forEach(listItem => {
            const check = listItem.querySelector('input[type="checkbox"]');
            check.checked = this.checked;
          })
        }
      })
    }

    if (emailMarkAll) {
      emailMarkAll.addEventListener('click', function (e) {
        const selectedChecks = emailList.querySelectorAll('input[type="checkbox"]:checked');

        if (selectedChecks.length) {
          [...selectedChecks].forEach(check => {
            const selectedItem = check.parentElement.parentElement;

            if (!selectedItem.classList.contains('mark-as-read')) {
              selectedItem.classList.add('mark-as-read');
              selectedItem.classList.replace('bg-white', 'bg-slate-50');
              selectedItem.classList.replace('dark:bg-slate-800', 'dark:bg-slate-900');
            }

            check.checked = false;
            emailCheckAll.checked = false;
          })
        }

      })
    }

    if (emailDeleteAll) {
      emailDeleteAll.addEventListener('click', function (e) {
        const selectedChecks = emailList.querySelectorAll('input[type="checkbox"]:checked');

        if (selectedChecks.length) {
          [...selectedChecks].forEach(check => {
            const selectedItem = check.parentElement.parentElement;
            selectedItem.remove();
            emailCheckAll.checked = false;
          })
        }
      })
    }

    if(emailReplayEditor) {
      new Quill(emailReplayEditor, {
        theme: 'snow',
        bounds: emailReplayEditor,
        placeholder: 'Write your message',
      });
    }

    if (emailBtnToggleSidebarLeft) {
      emailBtnToggleSidebarLeft.addEventListener('click', () => {
        new EmailSidebar(emailSidebarLeft).show();
      })
    }

    if (emailBtnToggleSidebarView) {
      emailBtnToggleSidebarView.addEventListener('click', () => {
        new EmailSidebar(emailSidebarView).hide();
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

          if (this.options.backdrop && emailBackdrop) {
            emailBackdrop.classList.remove('hidden');
          }

          setTimeout(() => {
            if (this.options.backdrop && emailBackdrop) {
              emailBackdrop.classList.add('bg-opacity-40');

              emailBackdrop.addEventListener('click', () => {
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

          if (this.options.backdrop && emailBackdrop) {
            emailBackdrop.classList.remove('bg-opacity-40');
          }

          setTimeout(() => {
            sidebar.classList.replace('visible', 'invisible');

            if (this.options.backdrop && emailBackdrop) {
              emailBackdrop.classList.add('hidden');
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
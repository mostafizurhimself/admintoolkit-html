"use strict";

import Tagify from '@yaireo/tagify'
import Quill from 'quill';

document.addEventListener('DOMContentLoaded', function () {
  (function () {
    const emailUIMailSelectAll = document.querySelector('#email-ui-mail-select-all');
    const emailUIMailMARAll = document.querySelector('#email-ui-mail-mar-all');
    const emailUIMailDeleteAll = document.querySelector('#email-ui-mail-delete-all');
    const emailUIMailList = document.querySelector('.email-ui-mail-list');
    const emailUIMailListItems = emailUIMailList.querySelectorAll('.email-ui-mail-list-item');
    const emailUIFilter = document.querySelector('.email-ui-filter');
    const emailUIFilterItems = emailUIFilter.querySelectorAll('.email-ui-filter-item');
    const emailUIReplyEditor = document.querySelector('#email-ui-reply-editor');
    const emailComposeBtnCC = document.querySelector('#email-compose-btn-cc');
    const emailComposeBtnBCC = document.querySelector('#email-compose-btn-bcc');
    const emailComposeInputTo = document.querySelector('#email-compose-input-to');
    const emailComposeInputCC = document.querySelector('#email-compose-input-cc');
    const emailComposeInputBCC = document.querySelector('#email-compose-input-bcc');
    const emailComposeEditor = document.querySelector('#email-compose-editor');
    const sidebarToggles = document.querySelectorAll('[data-toggle="sidebar"]');

    // Initialize Mail Select All
    if (emailUIMailSelectAll) {
      emailUIMailSelectAll.addEventListener('click', function (e) {
        const itemSelects = document.querySelectorAll('.email-ui-mail-list-item-select');
        [...itemSelects].forEach(select => {
          select.checked = this.checked;
        })
      })
    }

    // Initialize Mail MAR(Mark as read) All
    if (emailUIMailMARAll) {
      emailUIMailMARAll.addEventListener('click', function (e) {
        const checkedItemSelects = document.querySelectorAll('.email-ui-mail-list-item-select:checked');

        if (checkedItemSelects.length) {
          [...checkedItemSelects].forEach(select => {
            const checkedItem = select.parentElement.parentElement;
            const checkedItemMark = checkedItem.querySelector('.email-ui-mail-list-item-mark');

            if (!checkedItem.classList.contains('mark-as-read')) {
              checkedItem.classList.add('mark-as-read');
              checkedItemMark.querySelector('i').classList.replace('ti-mail-opened', 'ti-mail');
            }

            select.checked = false;
            emailUIMailSelectAll.checked = false;
          })
        }
      })
    }

    // Initialize Mail Delete All
    if (emailUIMailDeleteAll) {
      emailUIMailDeleteAll.addEventListener('click', function (e) {
        const checkedItemSelects = document.querySelectorAll('.email-ui-mail-list-item-select:checked');

        if (checkedItemSelects.length) {
          [...checkedItemSelects].forEach(select => {
            const checkedItem = select.parentElement.parentElement;
            checkedItem.remove();
            emailUIMailSelectAll.checked = false;
          })
        }
      })
    }

    // Initialize Mail List Items
    if (emailUIMailListItems.length) {
      [...emailUIMailListItems].forEach(item => {
        const itemClass = '.email-ui-mail-list-item';
        const select = item.querySelector(`${itemClass}-select`);
        const btnBookmark = item.querySelector(`${itemClass}-bookmark`);
        const btnMark = item.querySelector(`${itemClass}-mark`);
        const btnDelete = item.querySelector(`${itemClass}-delete`);

        select.addEventListener('click', function (e) {
          e.stopPropagation();

          const selects = document.querySelectorAll('.email-ui-mail-list-item-select');
          const checkedSelects = document.querySelectorAll('.email-ui-mail-list-item-select:checked');

          if (selects.length === checkedSelects.length) {
            emailUIMailSelectAll.checked = true;
          }

          if (checkedSelects.length < selects.length) {
            emailUIMailSelectAll.checked = false;
          }
        })

        btnBookmark.addEventListener('click', function (e) {
          e.stopPropagation();
          const item = this.parentElement.parentElement;
          if (item.getAttribute('data-starred')) {
            item.removeAttribute('data-starred');
          } else {
            item.setAttribute('data-starred', 'true');
          }
        })

        btnMark.addEventListener('click', function (e) {
          e.stopPropagation();
          const item = this.parentElement.parentElement.parentElement;

          if (!item.classList.contains('mark-as-read')) {
            item.classList.add('mark-as-read');
            this.querySelector('i').classList.replace('ti-mail-opened', 'ti-mail');
          } else {
            item.classList.remove('mark-as-read');
            this.querySelector('i').classList.replace('ti-mail', 'ti-mail-opened');
          }
        })

        btnDelete.addEventListener('click', function (e) {
          e.stopPropagation();
          const item = this.parentElement.parentElement.parentElement;
          item.remove();
        })
      })
    }

    // Initialize Filtering
    if (emailUIFilterItems.length) {
      [...emailUIFilterItems].forEach((filterItem) => {

        filterItem.addEventListener('click', function () {
          const filter = this.dataset.filterBy;
          const filterItemActive = emailUIFilter.querySelector('.email-ui-filter-item.active');

          if (!filterItem.classList.contains('active')) {
            filterItemActive.classList.remove('active');
            filterItem.classList.add('active');
          }

          if (emailUIMailListItems.length) {
            if (filter !== 'inbox') {
              [...emailUIMailListItems].forEach(item => {
                if (item.getAttribute(`data-filter-by-${filter}`)) {
                  item.classList.remove('hidden');
                } else {
                  item.classList.add('hidden');
                }
              })
            } else {
              [...emailUIMailListItems].forEach(item => {
                item.classList.remove('hidden');
              })
            }
          }
        })
      });
    }

    // Initialize Filtering
    if(emailUIReplyEditor) {
      new Quill(emailUIReplyEditor, {
        theme: 'snow',
        bounds: emailUIReplyEditor,
        placeholder: 'Write your message',
      });
    }
    
    // Initialize Sidebar Toggle
    if (sidebarToggles.length) {
      [...sidebarToggles].forEach(toggle => {
        const targetId = toggle.dataset.target;

        if (targetId) {
          const target = document.querySelector(targetId);
          const options = {
            keyboard: target.dataset.keyboard === 'false' ? false : true,
            backdrop: (() => {
              let output = true;

              if (target.dataset.backdrop === 'static') {
                output = 'static';
              }

              if (target.dataset.backdrop === 'false') {
                output = false;
              }

              return output;
            })(),
          }

          new EmailUISidebar(toggle, options)
        }
      })
    }

    // Initialize Tagify in Compose To Input
    if (emailComposeInputTo) {
      new Tagify(emailComposeInputTo);
    }

    // Initialize Tagify in Compose CC Input
    if (emailComposeInputCC) {
      new Tagify(emailComposeInputCC);
    }

    // Initialize Tagify in Compose BCC Input
    if (emailComposeInputBCC) {
      new Tagify(emailComposeInputBCC);
    }

    // Initialize Quill Editor for composing email
    if (emailComposeEditor) {
      new Quill(emailComposeEditor, {
        theme: 'snow',
        bounds: emailComposeEditor,
        placeholder: 'Write your message',
      });
    }
    
    // Initialize Email Compose CC Button
    if(emailComposeBtnCC) {
      emailComposeBtnCC.addEventListener('click', () => {
        emailComposeInputCC.parentElement.classList.toggle('hidden');
      });
    }

    // Initialize Email Compose BCC Button
    if(emailComposeBtnBCC) {
      emailComposeBtnBCC.addEventListener('click', () => {
        emailComposeInputBCC.parentElement.classList.toggle('hidden');
      });
    }
    
    // Define the funciton to toggle Email Sidebars (Primary, Secondary)
    function EmailUISidebar(target, options = {}) {
      //Store the target element
      this.target = null;

      //Store sidebar element
      this.sidebar = null;

      //Store sidebar toggle
      this.toggle = null;

      //Store sidebar transition in miliseconds.
      this.transition = 300;

      //Store drawer dismisses
      this.dismisses = null;

      //Store the drawer options
      this.options = {
        keyboard: true, //Boolean. Default is true
        backdrop: true, //Boolean | 'static'. Default is true
        ...options,
      };

      this.documentOnKeydown = (e) => this.hideOnKeydown({ e, sidebar: this });

      if (typeof target === 'string') {

        this.target = document.querySelector(target);

      } else if (target instanceof HTMLElement) {

        this.target = target;

      } else {

        throw new Error('No target element found');
      }

      if (this.target.classList.contains('email-ui-sidebar')) {

        this.sidebar = this.target;

      } else {

        this.toggle = this.target;
        this.sidebar = document.querySelector(this.toggle.dataset.target);

        this.toggle.addEventListener('click', () => {

          const openSidebars = document.querySelectorAll('.email-ui-sidebar.show');

          if (openSidebars.length) {

            [...openSidebars].forEach((sidebar) => this.hide(sidebar));

          } else {

            this.show();
          }
        });
      }

      this.dismisses = this.sidebar.querySelectorAll('[data-dismiss="sidebar"]');
      if (this.dismisses.length) {
        [...this.dismisses].forEach((dismiss) => {
          dismiss.addEventListener('click', () => this.hide());
        });
      }

      this.show = function (element = null) {
        const sidebar = element ? element : this.sidebar;
        const sidebarParentEl = sidebar.parentElement;

        if (!sidebar.classList.contains('showing')) {
          sidebar.classList.add('showing');

          if (this.options.backdrop) {
            if (sidebarParentEl.querySelector('email-ui-backdrop')) {
              sidebarParentEl.querySelector('email-ui-backdrop').remove();
            }

            sidebarParentEl.appendChild(this.createBackdrop());
          }

          setTimeout(() => {
            const emailUIBackdrop = document.querySelector('.email-ui-backdrop');
            sidebar.classList.replace('showing', 'show');

            if (emailUIBackdrop) {
              emailUIBackdrop.classList.add('show');

              emailUIBackdrop.addEventListener('click', () => {
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

      this.hide = function (element = null) {
        const sidebar = element ? element : this.sidebar;
        const sidebarParentEl = sidebar.parentElement;

        if (sidebar.classList.contains('show') && !sidebar.classList.contains('hiding')) {
          const emailUIBackdrop = sidebarParentEl.querySelector('.email-ui-backdrop');

          sidebar.classList.add('hiding');

          if (emailUIBackdrop) {
            emailUIBackdrop.classList.remove('show');
          }

          setTimeout(() => {
            sidebar.classList.remove('show');
            sidebar.classList.remove('hiding');

            if (emailUIBackdrop) {
              emailUIBackdrop.remove();
            }

            if (this.options.keyboard) {
              document.removeEventListener('keydown', this.documentOnKeydown);
            }
          }, this.transition);
        }
      }

      this.hideOnKeydown = function (args) {
        const { e, sidebar } = args;

        if (e.key === 'Escape' && sidebar.options.keyboard) {
          sidebar.hide();
        }
      }

      this.createBackdrop = function () {
        const backdrop = document.createElement('div');
        backdrop.setAttribute('class', 'email-ui-backdrop');

        return backdrop;
      }
    }
  })()
});
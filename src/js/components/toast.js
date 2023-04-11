import Toastify from 'toastify-js';
import feather from 'feather-icons';

const toast = (() => {
  // Constructor for toast
  const toast = (text, options = {}) => {
    return Toastify({
      text: `<div>${text}</div>`,
      escapeMarkup: false,
      ...options,
    }).showToast();
  };

  toast.success = (text, options = {}) => {
    return Toastify({
      text: `
        <div class="flex items-center gap-2">
          ${options.icon || feather.icons['check'].toSvg({ width: '16', height: '16' })}
          <div>${text}</div>
        </div>
      `,
      escapeMarkup: false,
      className: 'toastify-success',
      ...options,
    }).showToast();
  };

  toast.danger = (text, options = {}) => {
    return Toastify({
      text: `
        <div class="flex items-center gap-2">
          ${options.icon || feather.icons['x'].toSvg({ width: '16', height: '16' })}
          <div>${text}</div>
        </div>
      `,
      escapeMarkup: false,
      className: 'toastify-danger',
      ...options,
    }).showToast();
  };

  toast.warning = (text, options = {}) => {
    return Toastify({
      text: `
        <div class="flex items-center gap-2">
          ${options.icon || feather.icons['alert-triangle'].toSvg({ width: '16', height: '16' })}
          <div>${text}</div>
        </div>
      `,
      escapeMarkup: false,
      className: 'toastify-warning',
      ...options,
    }).showToast();
  };

  toast.info = (text, options = {}) => {
    return Toastify({
      text: `
        <div class="flex items-center gap-2">
          ${options.icon || feather.icons['info'].toSvg({ width: '16', height: '16' })}
          <div>${text}</div>
        </div>
      `,
      escapeMarkup: false,
      className: 'toastify-info',
      ...options,
    }).showToast();
  };

  return toast;
})();

export default toast;

import Dropzone from 'dropzone';

const uploader = {
  init() {
    const dropzoneBasic = document.querySelectorAll('.dropzone-basic');
    const dropzoneMultiple = document.querySelectorAll('.dropzone-multiple');
    const dropzoneDisabled = document.querySelectorAll('.dropzone-disabled');
    const dropzoneCustom = document.querySelectorAll('.dropzone-custom');

    const defaultOptions = {
      url: '/uploader.html',
      parallelUploads: 1,
      maxFilesize: 5,
      addRemoveLinks: true,
    };

    if (dropzoneBasic.length) {
      [...dropzoneBasic].forEach(
        (dropzone) =>
          new Dropzone(dropzone, {
            ...defaultOptions,
            maxFiles: 1,
            hiddenInputContainer: dropzone,
          })
      );
    }

    if (dropzoneMultiple.length) {
      [...dropzoneMultiple].forEach(
        (dropzone) =>
          new Dropzone(dropzone, {
            ...defaultOptions,
            hiddenInputContainer: dropzone,
          })
      );
    }

    if (dropzoneDisabled.length) {
      [...dropzoneDisabled].forEach(
        (dropzone) =>
          new Dropzone(dropzone, {
            ...defaultOptions,
            clickable: false,
            hiddenInputContainer: dropzone,
          })
      );
    }

    if (dropzoneCustom.length) {
      [...dropzoneCustom].forEach(
        (dropzone) =>
          new Dropzone(dropzone, {
            ...defaultOptions,
            maxFiles: 1,
            hiddenInputContainer: dropzone,
          })
      );
    }
  },
};

export default uploader;

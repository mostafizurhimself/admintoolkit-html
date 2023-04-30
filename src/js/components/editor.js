import Quill from 'quill';

const editor = {
  theme: {
    snow: {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ header: 1 }, { header: 2 }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ direction: 'rtl' }],
          [{ size: ['small', false, 'large', 'huge'] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],
          ['clean'],
        ],
      },
    },
    bubble: {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ header: 1 }, { header: 2 }],
          [{ list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }],
          [{ direction: 'rtl' }],
        ],
      },
    },
  },

  init() {
    const editors = document.querySelectorAll('.editor');
    const popupEditors = document.querySelectorAll('.editor-popup');

    // Default editor
    if (editors.length) {
      [...editors].forEach(
        (editor) =>
          new Quill(editor, {
            theme: 'snow',
            bounds: editor,
            modules: this.theme.snow.modules,
          })
      );
    }

    // Default editor
    if (popupEditors.length) {
      [...popupEditors].forEach(
        (editor) =>
          new Quill(editor, {
            theme: 'bubble',
            bounds: editor,
            modules: this.theme.bubble.modules,
          })
      );
    }
  },
};

window.createEditor = function (target, options = {}) {
  return new Quill(target, options);
};

export default editor;

const editorControlled = createEditor('#editor-controlled', {
  theme: 'snow',
  placeholder: 'Write Something...',
});

editorControlled.on('text-change', () => {
  console.log('Text changed')
});

const controlledEditorSource = `
  <div id="editor-controlled"></div>
  
  <script>
    const editorControlled = createEditor('#editor-controlled', {
      theme: 'snow'
      placeholder: 'Write Something...',
    });

    editorControlled.on('text-change', () => {
      console.log('Text changed')
    });
  </script>
`;

const controlledCodeViewer = createCodeViewer('#controled-text-editor', controlledEditorSource);
controlledCodeViewer.render();

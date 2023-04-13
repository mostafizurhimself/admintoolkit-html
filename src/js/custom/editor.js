const editorControlled = createEditor('#editor-controlled', {
  theme: 'snow',
});

const controlledEditorSource = `
  <div id="editor-controlled">
    <h3>Quill Controled Text Editor</h3>
    <p>
      Admin Toolkit dashboard template based on TailwindCSS and Vanilla JavaScript is a sleek and
      functional web-based interface designed for administrators and developers to manage and monitor
      various aspects of their web application
    </p>
  </div>
  
  <script>
    const editorControlled = createEditor('#editor-controlled', {
      theme: 'snow'
    });
  </script>
`;

const controlledCodeViewer = createCodeViewer('#controled-text-editor', controlledEditorSource);
controlledCodeViewer.render();

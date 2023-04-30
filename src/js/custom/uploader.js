const customDragAndDropSourceCode = `
  <div class="dropzone dropzone-custom">
    <div class="dz-message">                        
      <i width="2.5rem" height="2.5rem" data-feather="upload"></i>
      <h5>Choose a file or drag  & drop here</h5>
      <p class="text-sm text-slate-400">
        This is just a demo dropzone. Selected files are not actually uploaded.
      </p>
    </div>
    <!-- Fallback for no JavaScript -->
    <div class="fallback">
      <input name="file" type="file" />
    </div>
  </div>

  <script>
    import Dropzone from "dropzone";

    const dropzoneCustom = new Dropzone('.dropzone-custom', {
      url: '/uploader.html',
      parallelUploads: 1,
      maxFilesize: 5,
      addRemoveLinks: true,
      maxFiles: 1,
      hiddenInputContainer: '.dropzone-custom',
    })
  </script>
`;

// Create CodeViewer
const customDragAndDropCodeViewer = createCodeViewer('#custom-drag-and-drop-code-viewer', customDragAndDropSourceCode);

// Render CodeViewer
customDragAndDropCodeViewer.render();

const controlledModalSourceCode = `
  <button type="button" class="btn btn-primary" id="btn-controlled-modal">
    Open Controlled Modal
  </button>

  <div class="modal" id="modal-controlled">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <!-- ..... -->
        </div>
        <div class="modal-body">
          <!-- ..... -->
        </div>
        <div class="modal-footer">
          <!-- ..... -->
        </div>
      </div>
    </div>
  </div>
  
  <script>
    const btnControlledModal = document.querySelector('#btn-controlled-modal')

    btnControlledModal.addEventListener('click', () => {
      const controlledModal = createModal('#modal-controlled', {
        keyboard: true, //Boolean. Default is true
        backdrop: true, //Boolean | 'static'. Default is true
      });
      
      controlledModal.show();
    });
  </script>
`;
const controlledModalCodeViewer = createCodeViewer('#controlled-modal-code-viewer', controlledModalSourceCode);
controlledModalCodeViewer.render();

const btnControlledModal = document.querySelector('#btn-controlled-modal');

btnControlledModal.addEventListener('click', () => {
  const controlledModal = createModal('#modal-controlled', {
    keyboard: true, //Boolean. Default is true
    backdrop: true, //Boolean | 'static'. Default is true
  });

  controlledModal.show();
});

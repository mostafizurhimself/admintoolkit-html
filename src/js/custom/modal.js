function openControlledModal() {
  const controlledModal = createModal('#modal-controlled');
  controlledModal.show();
}

const controlledModalSourceCode =`
  <button type="button" class="btn btn-primary" onclick="openControlledModal()">
    Open Controlled Modal
  </button>

  <div class="modal" id="modal-controlled">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="flex items-center justify-between">
            <h6>Controlled Modal</h6>
            <button
              type="button"
              class="inline-block rounded-primary p-1 text-slate-500 outline-none transition-colors duration-150 hover:text-slate-700 focus:outline-none dark:text-slate-400 dark:hover:text-slate-300"
              data-dismisss="modal"
            >
              <i data-feather="x" width="1em" height="1em"></i>
            </button>
          </div>
        </div>
        <div class="modal-body">
          <p class="text-sm text-slate-500 dark:text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae possimus nam,
            eaque omnis voluptates, doloremque explicabo aspernatur magnam veniam dolorum dolore id
            tenetur laudantium ex obcaecati, porro doloribus cumque.
          </p>
        </div>
        <div class="modal-footer">
          <div class="flex items-center justify-end gap-2">
            <button type="button" class="btn btn-plain-secondary" data-dismisss="modal">
              Cancel
            </button>
            <button type="button" class="btn btn-primary" data-dismisss="modal">Done</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <script>
    function openControlledModal() {
      const controlledModal = createModal('#modal-controlled', {
        keyboard: true, //Boolean. Default is true.
        backdrop: true, //Boolean | 'static'. Default is true.
      });
      controlledModal.show();
    }
  </script>
`;
const controlledModalCodeViewer = createCodeViewer('#controlled-modal-code-viewer', controlledModalSourceCode);       
controlledModalCodeViewer.render();
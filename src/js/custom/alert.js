const controlledAlertSourceCode = `
  <div class="flex flex-col gap-4">
    <div class="alert alert-success" role="alert" id="controlled-alert">
      <i width="1em" height="1em" data-feather="check-circle"></i>
      <p>This is a success alert with addtional information and content.</p>
    </div> 
    <div>
      <button class="btn btn-primary" type="button" id="btn-hide-alert">
        Hide dismissable alert
      </button>
    </div>
  </div>

  <script>
    const btnHideAlert = document.querySelector('#btn-hide-alert');

    btnHideAlert.addEventListener('click', () => {
      createDismissableAlert('#controlled-alert').dismiss();
    })
  </script>
`;

const controlledAlertCodeViewer = createCodeViewer('#controlled-alert-code-viewer', controlledAlertSourceCode);
controlledAlertCodeViewer.render();

const btnHideAlert = document.querySelector('#btn-hide-alert');
btnHideAlert.addEventListener('click', () => {
  createDismissableAlert('#controlled-alert').dismiss();
});

const controlledAlertSource = `
  <div class="flex flex-col gap-4">
    <div class="alert alert-success" role="alert" id="controlled-alert">
      <span class="alert-icon"><i width="1em" height="1em" data-feather="check-circle"></i></span>
      <p class="alert-text">This is a success alert with addtional information and content.</p>
    </div>
    <div>
      <button class="btn btn-primary" type="button" onclick="dismissControlledAlert()">
        Hide dismissable alert
      </button>
    </div>
  </div>

  <script>
    const controlledAlert = createDismissableAlert('#controlled-alert');

    function dismissControlledAlert() {
      controlledAlert.dismiss();
    }
  </script>
`;

const controlledCodeViewer = createCodeViewer('#controlled-code-viewer', controlledAlertSource);

function dismissControlledAlert() {
  createDismissableAlert('#controlled-alert').dismiss();
}

controlledCodeViewer.render();
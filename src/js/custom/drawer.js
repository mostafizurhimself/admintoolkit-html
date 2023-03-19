function openControlledDrawer() {
  const controlledDrawer = createDrawer('#controlled-drawer');
  controlledDrawer.show();
}

const controlledDrawerSourceCode = `
  <button type="button" class="btn btn-primary" data-toggle="drawer" onclick="openControlledDrawer()">
    Controlled Drawer
  </button>

  <div id="controlled-drawer" class="drawer">
    <div class="drawer-header">
      <!-- ..... -->
    </div>
    <div class="drawer-body">
      <!-- ..... -->
    </div>
    <div class="drawer-footer">
      <!-- ..... -->                       
    </div>
  </div>

  \<script\>
    function openControlledDrawer() {
      const controlledDrawer = createDrawer('#controlled-drawer', {
        keyboard: true, //Boolean. Default is true.
        backdrop: true, //Boolean | 'static'. Default is true.
      });
      controlledDrawer.show();
    }
  \<\/script\>
`;
const controlledDrawerCodeViewer = createCodeViewer('#controlled-drawer-code-viewer', controlledDrawerSourceCode);


controlledDrawerCodeViewer.render();
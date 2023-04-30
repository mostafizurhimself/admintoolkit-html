const controlledDrawerSourceCode = `
  <button class="btn btn-primary" type="button" id="btn-drawer-controlled">
    Controlled Drawer
  </button>

  <div id="drawer-controlled" class="drawer">
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

  <script>
    const btnDrawerControlled = document.querySelector('#btn-drawer-controlled');

    btnDrawerControlled.addEventListener('click', () => {
      const drawerControlled = createDrawer('#drawer-controlled', {
        keyboard: true, //Boolean. Default is true.
        backdrop: true //Boolean | 'static'. Default is true.
      });

      drawerControlled.show();
    });
  </script>
`;
const controlledDrawerCodeViewer = createCodeViewer('#controlled-drawer-code-viewer', controlledDrawerSourceCode);
controlledDrawerCodeViewer.render();

const btnDrawerControlled = document.querySelector('#btn-drawer-controlled');
btnDrawerControlled.addEventListener('click', () => {
  const drawerControlled = createDrawer('#drawer-controlled', {
    keyboard: true,
    backdrop: true,
  });

  drawerControlled.show();
});

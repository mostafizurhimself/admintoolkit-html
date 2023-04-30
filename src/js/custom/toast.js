import Toastify from 'toastify-js';
import toast from '../components/toast';

const btnTriggerToast = document.querySelector('#btn-trigger-toast');
const btnTriggerToastSuccess = document.querySelector('#btn-trigger-toast-success');
const btnTriggerToastDanger = document.querySelector('#btn-trigger-toast-danger');
const btnTriggerToastWarning = document.querySelector('#btn-trigger-toast-warning');
const btnTriggerToastInfo = document.querySelector('#btn-trigger-toast-info');
const btnTriggerToastTR = document.querySelector('#btn-trigger-toast-tr');
const btnTriggerToastTL = document.querySelector('#btn-trigger-toast-tl');
const btnTriggerToastTC = document.querySelector('#btn-trigger-toast-tc');
const btnTriggerToastBR = document.querySelector('#btn-trigger-toast-br');
const btnTriggerToastBL = document.querySelector('#btn-trigger-toast-bl');
const btnTriggerToastBC = document.querySelector('#btn-trigger-toast-bc');
const btnTriggerToastCloseable = document.querySelector('#btn-trigger-toast-closeable');
const btnTriggerToastCustom = document.querySelector('#btn-trigger-custom-toast');

const toastBasicSourceCode = `
  <button id="btn-trigger-toast" class="btn btn-primary" type="button">
    Show Toast
  </button>

  <script type="module">
    import toast from "./js/components/toast";
    const btnTriggerToast = document.querySelector('#btn-trigger-toast');

    if(btnTriggerToast) {
      btnTriggerToast.addEventListener('click', () => toast('Hello, I am a Toast'));
    }
  </script>
`;
const toastTypeSourceCode = `
  <button id="btn-trigger-toast-success" class="btn btn-success" type="button">Toast Success</button>
  <button id="btn-trigger-toast-danger" class="btn btn-danger" type="button">Toast Danger</button>
  <button id="btn-trigger-toast-warning" class="btn btn-warning" type="button">Toast Warning</button>
  <button id="btn-trigger-toast-info" class="btn btn-info" type="button">Toast Info</button>

  <script type="module">
    import toast from "./js/components/toast";

    const btnTriggerToastSuccess = document.querySelector('#btn-trigger-toast-success');
    const btnTriggerToastDanger  = document.querySelector('#btn-trigger-toast-danger');
    const btnTriggerToastWarning = document.querySelector('#btn-trigger-toast-warning');
    const btnTriggerToastInfo    = document.querySelector('#btn-trigger-toast-info');

    if(btnTriggerToastSuccess) {
      btnTriggerToastSuccess.addEventListener('click', () => toast.success('Hello, I am a Success Toast'));
    }

    if(btnTriggerToastDanger) {
      btnTriggerToastDanger.addEventListener('click', () => toast.danger('Hello, I am a Danger Toast'));
    }

    if(btnTriggerToastWarning) {
      btnTriggerToastWarning.addEventListener('click', () => toast.warning('Hello, I am a Warning Toast'));
    }

    if(btnTriggerToastInfo) {
      btnTriggerToastInfo.addEventListener('click', () => toast.info('Hello, I am an Info Toast'));
    }
  </script>
`;
const toastPlacementSourceCode = `
  <button id="btn-trigger-toast-tr" class="btn btn-primary" type="button">Top Right</button>
  <button id="btn-trigger-toast-tc" class="btn btn-primary" type="button">Top Center</button>
  <button id="btn-trigger-toast-tl" class="btn btn-primary" type="button">Top Left</button>
  <button id="btn-trigger-toast-br" class="btn btn-primary" type="button">Bottom Right</button>
  <button id="btn-trigger-toast-bc" class="btn btn-primary" type="button">Bottom Center</button>
  <button id="btn-trigger-toast-bl" class="btn btn-primary" type="button">Bottom Left</button>

  <script type="module">
    import toast from "./js/components/toast";

    const btnTriggerToastTR = document.querySelector('#btn-trigger-toast-tr');
    const btnTriggerToastTL = document.querySelector('#btn-trigger-toast-tl');
    const btnTriggerToastTC = document.querySelector('#btn-trigger-toast-tc');
    const btnTriggerToastBR = document.querySelector('#btn-trigger-toast-br');
    const btnTriggerToastBL = document.querySelector('#btn-trigger-toast-bl');
    const btnTriggerToastBC = document.querySelector('#btn-trigger-toast-bc');

    if(btnTriggerToastTR) {
      btnTriggerToastTR.addEventListener('click', () => {
        toast('Hello, I am a Toast', {
          gravity: 'top',
          position: 'right'
        })
      });
    }

    if(btnTriggerToastTC) {
      btnTriggerToastTC.addEventListener('click', () => {
        toast('Hello, I am a Toast', {
          gravity: 'top',
          position: 'center'
        })
      });
    }

    if(btnTriggerToastTL) {
      btnTriggerToastTL.addEventListener('click', () => {
        toast('Hello, I am a Toast', {
          gravity: 'top',
          position: 'left'
        })
      });
    }

    if(btnTriggerToastBR) {
      btnTriggerToastBR.addEventListener('click', () => {
        toast('Hello, I am a Toast', {
          gravity: 'bottom',
          position: 'right'
        })
      });
    }
    
    if(btnTriggerToastBC) {
      btnTriggerToastBC.addEventListener('click', () => {
        toast('Hello, I am a Toast', {
          gravity: 'bottom',
          position: 'center'
        })
      });
    }
    
    if(btnTriggerToastBL) {
      btnTriggerToastBL.addEventListener('click', () => {
        toast('Hello, I am a Toast', {
          gravity: 'bottom',
          position: 'left'
        })
      });
    }
  </script>
`;
const toastCloseableSourceCode = `
  <button id="btn-trigger-toast-closeable" class="btn btn-primary" type="button">
    Show Toast
  </button>

  <script type="module">
    import toast from "./js/components/toast";

    const btnTriggerToastCloseable = document.querySelector('#btn-trigger-toast-closeable');
    if(btnTriggerToastCloseable) {
      btnTriggerToastCloseable.addEventListener('click', () => {
        toast('Hello, I am a Toast', {
          close: true
        })
      });
    }
  </script>
`;
const toastCustomSourceCode = `
  <button id="btn-trigger-custom-toast" class="btn btn-primary" type="button">
    Show Toast
  </button>

  <script type="module">
    import toast from "./js/components/toast";

    const btnTriggerToastCustom    = document.querySelector('#btn-trigger-custom-toast');
    if(btnTriggerToastCustom) {
      btnTriggerToastCustom.addEventListener('click', () => {
        toast('Hello, I am a <strong>Custom Toast</strong>', {
          style: {
            background: '#a855f7',
            color: '#fff'
          }
        });
      });
    }
  </script>
`;

const toastBasicCodeViewer = createCodeViewer('#toast-basic-code-viewer', toastBasicSourceCode);
const toastTypeCodeViewer = createCodeViewer('#toast-type-code-viewer', toastTypeSourceCode);
const toastPlacementCodeViewer = createCodeViewer('#toast-placement-code-viewer', toastPlacementSourceCode);
const toastCloseableCodeViewer = createCodeViewer('#toast-closeable-code-viewer', toastCloseableSourceCode);
const toastCustomCodeViewer = createCodeViewer('#toast-custom-code-viewer', toastCustomSourceCode);

// Toast Basic
if (btnTriggerToast) {
  btnTriggerToast.addEventListener('click', () => toast('Hello, I am a Toast'));
}

// Toast Type
if (btnTriggerToastSuccess) {
  btnTriggerToastSuccess.addEventListener('click', () => {
    toast.success('Hello, I am a Success Toast');
  });
}

if (btnTriggerToastDanger) {
  btnTriggerToastDanger.addEventListener('click', () => {
    toast.danger('Hello, I am a Danger Toast');
  });
}

if (btnTriggerToastWarning) {
  btnTriggerToastWarning.addEventListener('click', () => {
    toast.warning('Hello, I am a Warning Toast');
  });
}

if (btnTriggerToastInfo) {
  btnTriggerToastInfo.addEventListener('click', () => {
    toast.info('Hello, I am an Info Toast');
  });
}

// Toast Placements
if (btnTriggerToastTR) {
  btnTriggerToastTR.addEventListener('click', () => {
    toast('Hello, I am a Toast', {
      gravity: 'top',
      position: 'right',
    });
  });
}

if (btnTriggerToastTC) {
  btnTriggerToastTC.addEventListener('click', () => {
    toast('Hello, I am a Toast', {
      gravity: 'top',
      position: 'center',
    });
  });
}

if (btnTriggerToastTL) {
  btnTriggerToastTL.addEventListener('click', () => {
    toast('Hello, I am a Toast', {
      gravity: 'top',
      position: 'left',
    });
  });
}

if (btnTriggerToastBR) {
  btnTriggerToastBR.addEventListener('click', () => {
    toast('Hello, I am a Toast', {
      gravity: 'bottom',
      position: 'right',
    });
  });
}

if (btnTriggerToastBC) {
  btnTriggerToastBC.addEventListener('click', () => {
    toast('Hello, I am a Toast', {
      gravity: 'bottom',
      position: 'center',
    });
  });
}

if (btnTriggerToastBL) {
  btnTriggerToastBL.addEventListener('click', () => {
    toast('Hello, I am a Toast', {
      gravity: 'bottom',
      position: 'left',
    });
  });
}

// Toast Closeable
if (btnTriggerToastCloseable) {
  btnTriggerToastCloseable.addEventListener('click', () => {
    toast('Hello, I am a Toast', {
      close: true,
    });
  });
}

// Toast Custom
if (btnTriggerToastCustom) {
  btnTriggerToastCustom.addEventListener('click', () => {
    toast('Hello, I am a <strong>Custom Toast</strong>', {
      style: {
        background: '#a855f7',
        color: '#fff',
      },
    });
  });
}

toastBasicCodeViewer.render();
toastTypeCodeViewer.render();
toastPlacementCodeViewer.render();
toastCloseableCodeViewer.render();
toastCustomCodeViewer.render();

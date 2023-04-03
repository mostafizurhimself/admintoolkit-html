import Toastify from 'toastify-js';
import toast from "../components/toast";

const btnTriggerToast          = document.querySelector('#btn-trigger-toast');
const btnTriggerToastSuccess   = document.querySelector('#btn-trigger-toast-success');
const btnTriggerToastDanger    = document.querySelector('#btn-trigger-toast-danger');
const btnTriggerToastWarning   = document.querySelector('#btn-trigger-toast-warning');
const btnTriggerToastInfo      = document.querySelector('#btn-trigger-toast-info');
const btnTriggerToastTR        = document.querySelector('#btn-trigger-toast-tr');
const btnTriggerToastTL        = document.querySelector('#btn-trigger-toast-tl');
const btnTriggerToastTC        = document.querySelector('#btn-trigger-toast-tc');
const btnTriggerToastBR        = document.querySelector('#btn-trigger-toast-br');
const btnTriggerToastBL        = document.querySelector('#btn-trigger-toast-bl');
const btnTriggerToastBC        = document.querySelector('#btn-trigger-toast-bc');
const btnTriggerToastCloseable = document.querySelector('#btn-trigger-toast-closeable');
const btnTriggerToastCustom    = document.querySelector('#btn-trigger-custom-toast');

const toastBasicSourceCode     = `
  <button id="btn-trigger-toast" class="btn btn-primary" type="button">
    Show Toast
  </button>

  <script>
    import toast from "./js/components/toast";
    const btnTriggerToast = document.querySelector('#btn-trigger-toast');

    if(btnTriggerToast) {
      btnTriggerToast.addEventListener('click', () => toast('Hello, I am a Toast'));
    }t
  </script>
`;
const toastTypeSourceCode      = `
  <button id="btn-trigger-toast-primary" class="btn btn-primary" type="buton">
    Toast Primary
  </button>

  <script>
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
  <script>
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
  <script>
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
const toastCustomSourceCode    = `
  <button id="btn-trigger-custom-toast" class="btn btn-primary" type="button">
    Show Toast
  </button>

  <script>
    import toast from "./js/components/toast";
    
    const btnTriggerToastCustom    = document.querySelector('#btn-trigger-custom-toast');
    if(btnTriggerToastCustom) {
      btnTriggerToastCustom.addEventListener('click', () => {
        Toastify({
          text: 'Hello, I am a <strong>Custom Toast</strong>',
          escapeMarkup: false
        }).showToast();
      });
    }
  </script>
`;

const toastBasicCodeViewer     = createCodeViewer('#toast-basic-code-viewer', toastBasicSourceCode);
const toastTypeCodeViewer      = createCodeViewer('#toast-type-code-viewer', toastTypeSourceCode);
const toastPlacementCodeViewer = createCodeViewer('#toast-placement-code-viewer', toastPlacementSourceCode);
const toastCloseableCodeViewer = createCodeViewer('#toast-closeable-code-viewer', toastCloseableSourceCode);
const toastCustomCodeViewer    = createCodeViewer('#toast-custom-code-viewer', toastCustomSourceCode);

// Toast Basic
if(btnTriggerToast) {
  btnTriggerToast.addEventListener('click', () => toast('Hello, I am a Toast'))
}

// Toast Type
if(btnTriggerToastSuccess) {
  btnTriggerToastSuccess.addEventListener('click', () => {
    toast.success('Hello, I am a Success Toast');
  });
}

if(btnTriggerToastDanger) {
  btnTriggerToastDanger.addEventListener('click', () => {
    toast.danger('Hello, I am a Danger Toast');
  });
}

if(btnTriggerToastWarning) {
  btnTriggerToastWarning.addEventListener('click', () => {
    toast.warning('Hello, I am a Warning Toast');
  });
}

if(btnTriggerToastInfo) {
  btnTriggerToastInfo.addEventListener('click', () => {
    toast.info('Hello, I am an Info Toast');
  });
}

// Toast Placements
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

// Toast Closeable
if(btnTriggerToastCloseable) {
  btnTriggerToastCloseable.addEventListener('click', () => {
    toast('Hello, I am a Toast', {
      close: true
    })
  });
}

// Toast Custom
if(btnTriggerToastCustom) {
  btnTriggerToastCustom.addEventListener('click', () => {
    Toastify({
      text: 'Hello, I am a <strong>Custom Toast</strong>',
      escapeMarkup: false
    }).showToast();
  });
}

toastBasicCodeViewer.render();
toastTypeCodeViewer.render();
toastPlacementCodeViewer.render();
toastCloseableCodeViewer.render();
toastCustomCodeViewer.render();
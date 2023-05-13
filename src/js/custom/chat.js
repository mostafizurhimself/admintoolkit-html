const chatOverlay = document.querySelector('#chat-overlay');
const chatSidebar = document.querySelector('#chat-sidebar');
const chatList = document.querySelector('#chat-list');
const chatListItems = document.querySelectorAll('#chat-list > li');
const chatBtnShowSidebar = document.querySelector('#chat-btn-show-sidebar');
const chatBtnHideSidebar = document.querySelector('#chat-btn-hide-sidebar');
const btnUploadMedia = document.querySelector('#btn-upload-media');
const inputUploadMedia = document.querySelector('#input-upload-media');
const chatScrollView = document.querySelector('#chat-scroll-view');

// Default Scroll To Bottom
window.addEventListener('load', () => {
  if (chatScrollView) {
    chatScrollView.scrollIntoView(true);
  }
});

if (chatListItems.length) {
  [...chatListItems].forEach((chatItem) => {
    chatItem.addEventListener('click', () => {
      const chatItemActive = chatList.querySelector('li.active');

      if (!chatItem.classList.contains('active')) {
        chatItem.classList.add('active');

        if (chatItemActive) {
          chatItemActive.classList.remove('active');
        }
      }

      hideChatSidebar(chatSidebar);
    });
  });
}

if (chatBtnShowSidebar) {
  chatBtnShowSidebar.addEventListener('click', () => showChatSidebar(chatSidebar));
}

if (chatBtnHideSidebar) {
  chatBtnHideSidebar.addEventListener('click', () => hideChatSidebar(chatSidebar));
}

if (btnUploadMedia) {
  btnUploadMedia.addEventListener('click', () => {
    if (inputUploadMedia) {
      inputUploadMedia.click();
    }
  });
}

function showChatSidebar(sidebar) {
  if (!sidebar) return;

  const sidebarComputedStyle = window.getComputedStyle(sidebar);
  const sidebarVisibility = sidebarComputedStyle.getPropertyValue('visibility');

  if (sidebarVisibility === 'hidden') {
    sidebar.classList.add('transform-none');
    sidebar.classList.replace('invisible', 'visible');

    if (chatOverlay) {
      chatOverlay.classList.remove('hidden');

      setTimeout(() => {
        if (chatOverlay) {
          chatOverlay.classList.add('bg-opacity-40');
          chatOverlay.addEventListener('click', () => hideChatSidebar(chatSidebar));
        }
      }, 15);
    }
  }
}

function hideChatSidebar(sidebar) {
  if (!sidebar) return;

  const sidebarComputedStyle = window.getComputedStyle(sidebar);
  const sidebarVisibility = sidebarComputedStyle.getPropertyValue('visibility');

  if (sidebarVisibility === 'visible') {
    sidebar.classList.remove('transform-none');

    if (chatOverlay) {
      chatOverlay.classList.remove('bg-opacity-40');

      setTimeout(() => {
        sidebar.classList.replace('visible', 'invisible');
        chatOverlay.classList.add('hidden');
      }, 300);
    }
  }
}

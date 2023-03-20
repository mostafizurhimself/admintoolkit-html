// Default Scroll To Bottom
window.addEventListener('load', () => {
  const chats = document.getElementById('chats');
  let chatScrollHeight = chats.scrollHeight;
  chats.scrollTo({ top: chatScrollHeight, left: 0 });
});
//  Chat List Toggle
const chatList = document.getElementById('chat-list');
const hideChatList = document.getElementById('hide-chat-list');
const openChatList = document.getElementById('open-chat-list');
const overlay = document.getElementById('overlay');
// Open Chat List
const getOpenChatList = () => {
  chatList.classList.remove('-translate-x-full');
  chatList.classList.add('translate-x-0');
  overlay.classList.remove('invisible', 'opacity-0');
  overlay.classList.add('visible', 'opacity-100');
};

// Hide Chat List
const getHideChatList = () => {
  overlay.classList.remove('opacity-100');
  overlay.classList.add('opacity-0');
  overlay.classList.remove('visible');
  setTimeout(() => {
    chatList.classList.remove('translate-x-0');
    chatList.classList.add('-translate-x-full');
    overlay.classList.add('invisible');
  }, 100);
};

//  EventListeners
openChatList.addEventListener('click', getOpenChatList);
hideChatList.addEventListener('click', getHideChatList);
chatList.addEventListener('click', (event) => {
  if (event.target === chatList) getHideChatList();
});

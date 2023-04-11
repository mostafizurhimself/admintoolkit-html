import Quill from 'quill';
//  Chat List Toggle
const emailList = document.getElementById('email-list');
const hideEmailList = document.getElementById('hide-email-list');
const openEmailList = document.getElementById('open-email-list');
const overlay = document.getElementById('overlay');
// Open Email List
const getOpenEmailList = () => {
  emailList.classList.remove('-translate-x-[350px]');
  emailList.classList.add('translate-x-0');
  overlay.classList.remove('invisible', 'opacity-0');
  overlay.classList.add('visible', 'opacity-100');
};

// Hide Email List
const getHideEmailList = () => {
  overlay.classList.remove('opacity-100');
  overlay.classList.add('opacity-0');
  overlay.classList.remove('visible');
  setTimeout(() => {
    emailList.classList.remove('translate-x-0');
    emailList.classList.add('-translate-x-[350px]');
    overlay.classList.add('invisible');
  }, 100);
};

//  EventListeners
openEmailList.addEventListener('click', getOpenEmailList);
overlay.addEventListener('click', getHideEmailList);
hideEmailList.addEventListener('click', getHideEmailList);
emailList.addEventListener('click', (event) => {
  if (event.target === emailList) getHideEmailList();
});

// Email Compose
const emailEditor = document.getElementById('email-editor');
const ccToggle = document.getElementById('cc-toggle');
const bccToggle = document.getElementById('bcc-toggle');
bccToggle.addEventListener('click', () => {
  document.getElementById('bcc-input').classList.toggle('hidden');
});
ccToggle.addEventListener('click', () => {
  document.getElementById('cc-input').classList.toggle('hidden');
});
// Email Editor
const editor = new Quill(emailEditor, {
  theme: 'snow',
  bounds: emailEditor,
  placeholder: 'write your message',
});

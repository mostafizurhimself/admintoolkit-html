//  Chat List Toggle
const emailList = document.getElementById('email-list');
const hideEmailList = document.getElementById('hide-email-list');
const openEmailList = document.getElementById('open-email-list');
const overlay = document.getElementById('overlay');
// Open Email List
const getOpenEmailList = () => {
  emailList.classList.remove('-translate-x-full');
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
    emailList.classList.add('-translate-x-full');
    overlay.classList.add('invisible');
  }, 100);
};

//  EventListeners
openEmailList.addEventListener('click', getOpenEmailList);
hideEmailList.addEventListener('click', getHideEmailList);
emailList.addEventListener('click', (event) => {
  if (event.target === emailList) getHideEmailList();
});

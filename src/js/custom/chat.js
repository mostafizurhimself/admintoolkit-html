// Default Scroll To Bottom
window.addEventListener('load',()=>{
    const chats = document.getElementById('chats');
    chatScrollHeight = chats.scrollHeight;
    chats.scrollTo({top: chatScrollHeight, left:0});
})
//  Chat List Toggle
const chatList = document.getElementById('chat-list');
const hideChatList = document.getElementById('hide-chat-list');
const openChatList = document.getElementById('open-chat-list');

// Open Chat List
const getOpenChatList = () => {
    chatList.classList.remove("-translate-x-full","bg-opacity-0");
    chatList.classList.add("translate-x-0","bg-opacity-70");
}

// Hide Chat List
const getHideChatList = () => {
    chatList.classList.remove("translate-x-0","bg-opacity-70");
    chatList.classList.add("-translate-x-full","bg-opacity-0");
} 

//  EventListeners 
openChatList.addEventListener('click', getOpenChatList) 
hideChatList.addEventListener('click', getHideChatList)
chatList.addEventListener('click',(event)=>{
    if(event.target === chatList) getHideChatList();
})

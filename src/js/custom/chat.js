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
const chatListContainer = chatList.parentNode;
// Open Chat List
const getOpenChatList = () => {
    console.log(chatListContainer);
    chatListContainer.classList.add("block")
    chatListContainer.classList.remove("hidden")
    setTimeout(()=>{
        chatList.classList.remove("-translate-x-full");
        chatList.classList.add("translate-x-0");
    },0)
}

// Hide Chat List
const getHideChatList = () => {
    chatList.classList.remove("translate-x-0");
    chatList.classList.add("-translate-x-full");
    setTimeout(() => {
        chatListContainer.classList.add("hidden")
        chatListContainer.classList.remove("block")
    },100);
} 

//  EventListeners 
openChatList.addEventListener('click', getOpenChatList) 
hideChatList.addEventListener('click', getHideChatList)
chatList.addEventListener('click',(event)=>{
    if(event.target === chatList) getHideChatList();
})

window.addEventListener('load',()=>{
    const chats = document.getElementById('chats');
    chatScrollHeight = chats.scrollHeight;
    chats.scrollTo({top:chatScrollHeight, left:0, behavior: "smooth"});
})
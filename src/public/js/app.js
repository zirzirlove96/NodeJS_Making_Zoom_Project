//alert("Welcome To My Chatting");

// frontend에서는 통신하는 url만 지정하면 된다.
// frontend에서 backend로 메세지를 보낼 수 있음
// socket은 서버와의 연결을 뜻함
const socket = new WebSocket(`ws://${window.location.host}`);


const ul = document.querySelector("ul");
const form = document.querySelector("form");

socket.addEventListener("open", ()=> 
{
    console.log("Connect this Server");
});

socket.addEventListener("message", (message)=> 
{
    console.log("New message : ", message.data);
});

socket.addEventListener("close", ()=>
{
    console.log("DisConnected this Server");
});

function handleSubmit(event) {
    event.preventDefault();
    const input = form.querySelector("input");
    console.log(input.value);
    socket.send(input.value);// front에서 backend로 메세지 내용을 보낸다.
    input.value="";
}

form.addEventListener("submit", handleSubmit);
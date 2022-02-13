//alert("Welcome To My Chatting");

// frontend에서는 통신하는 url만 지정하면 된다.
// frontend에서 backend로 메세지를 보낼 수 있음
// socket은 서버와의 연결을 뜻함
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", ()=> 
{
    console.log("Connect this Server");
});

socket.addEventListener("message", (message)=> 
{
    console.log(message);
});

socket.addEventListener("close", ()=>
{
    console.log("DisConnected this Server");
});

setTimeout(()=>
{
    socket.send("Hello from the browser");
},10000);
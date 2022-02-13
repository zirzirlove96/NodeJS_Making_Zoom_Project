import http from "http"; //http모듈 (node.js에 내장되어 있음)
import WebSocket from "ws";
import express from "express";
import { Socket } from "dgram";

const app = express();

app.set("view engine", "pug");  // express 세팅에 뷰 엔진을 pug로 설정
app.set("views", __dirname+"/views"); // html 파일을 저장할 수 있는 폴더의 기본 명칭은 views html확장자 대신 pug로 하면 된다.
// pug는 html을 조금 더 세련되게 쓸 수 있는 템플릿으로 html과 js의 결합한 형태이다

// 특정 미들웨어를 지정하고자 할 때 use를 사용
// public/js/app.js는 유저한테만 보여지는 frontend화면이다.
app.use("/public", express.static(__dirname + "/public"));


app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log("Listening on http://localhost:3000");

// 여기에서 express서버와 ws서버를 만들어서 둘 다 통신한다고 생각
// 먼저 express 서버
// 꼭 두개의 서버를 만들필요는 없지만 2개가 같은 port에 있길 원하기 때문에 만듬
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

// 서버와 브라우저 통신
// socket은 연결된 브라우저를 뜻함
wss.on("connection", (socket)=> {
    //console.log(socket);
    socket.send("Hello!!");
    socket.on("message", (message) => 
    {
        console.log(message);
    });
    socket.on("close", ()=>console.log("DisConnected this Browser"));
});

// http 서버위에 webSocket 서버를 만듦
server.listen(3000, handleListen);

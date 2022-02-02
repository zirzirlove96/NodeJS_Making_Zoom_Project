import express from "express";

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

app.listen(3000, handleListen);

// express 설정 
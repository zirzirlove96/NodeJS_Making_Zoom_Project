# NodeJS_Making_Zoom_Project
Zoom Clone using NodeJS, WebRTC and Websockets
================================================

> ws : websoket 통신을 구현하기 위한 모듈
* exrpess(http통신)모듈과 ws을 합쳐서 채팅방을 구현 (http 서버위에 ws 서버를 만듦)
* express서버와 ws서버 둘 다 있지 않아도 되지만 여기에서는 같은 port를 타게 하기 위해 일부러 두개를 만듦
* http://localhost:3000 || ws://localhost:3000

**server.js에 있는 socket은 브라우저와의 연결을 뜻하며, app.js의 socket은 서버와의 연결을 뜻함**

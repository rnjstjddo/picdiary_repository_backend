const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const passportConfig = require("./passport");
//const nunjucks = require("nunjucks");
const session = require("express-session");

const dotenv = require("dotenv");
const path = require("path");
//cors설정
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config();

//소켓
//const { Server } = require("socket.io");
//const { createServer } = require("http");
const { sequelize } = require("./models");
const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

const Socket = require("./socket");

//세션저장소 mysql
// const MySQLStoreSession = require("express-mysql-session")(session);
// var options = {
//   host: "127.0.0.1",
//   port: 3306,
//   user: process.env.SESSIONMYSQL,
//   password: process.env.SESSIONMYSQL,
//   database: process.env.SESSIONMYSQL,
// };
// var sessionStore = new MySQLStoreSession(options);

//분기라우터
//const indexRouter = require("./routes");
const memberRouter = require("./routes/memberRouter");
const diaryRouter = require("./routes/diaryRouter");
const dietRouter = require("./routes/dietRouter");
const exerciseRouter = require("./routes/exerciseRouter");
const moneyRouter = require("./routes/moneyRouter");
const mainRouter = require("./routes/mainRouter");

const app = express();

//const httpServer = http.createServer(app);
passportConfig();

sequelize
  .sync({ force: false })
  .then(() => console.log("시퀄라이저연결성공"))
  .catch((err) => console.log("시퀄라이저연결실패", err));

app.set("port", process.env.PORT || 8001);

// app.set("view engine", "html");
// nunjucks.configure("views", {
//   express: app,
//   watch: true,
// });
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(morgan("dev"));
//app.use(express.static(path.join(__dirname, "views", "build")));
app.use("/img", express.static(path.join(__dirname, "uploads")));
// app.use(
//   "/img",
//   express.static(path.join(__dirname, "views", "public", "uploads"))
// );
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true, //false에서 변경 리액트와 연결시
//     secret: process.env.COOKIE_SECRET,
//     cookie: {
//       httpOnly: true,
//       secure: false,
//     },
//     //name:''
//     store: sessionStore,
//   })
// );

// sessionStore
//   .onReady()
//   .then(() => {
//     // MySQL session store ready for use.
//     console.log("MySQLStore 세션저장소 준비완료!");
//   })
//   .catch((error) => {
//     // Something went wrong.
//     console.error("MySQLStore 세션저장소 준비에러발생 ", error);
//   });

app.use(passport.initialize()); //req.passport
//jwt대체
//app.use(passport.session()); //req.session

//분기라우터
// app.use("/", indexRouter);
app.use("/api/member", memberRouter);
app.use("/api/diary", diaryRouter);
app.use("/api/diet", dietRouter);
app.use("/api/exercise", exerciseRouter);
app.use("/api/money", moneyRouter);
app.use("/api/main", mainRouter);

//이미지
app.get("/img/:imageName", function (req, res) {
  res.sendFile(__dirname + "uploads" + req.params.imageName); // __dirname: 현재 파일경로
});

// const io = new Server(httpServer, {
//   cors: {
//     origin: "http://localhost:3000",
//   },
// });

// io.on("connection", (socket) => {
//   socket.on("message", (data) => {
//     console.log("message 이벤트 노드로 전달온 데이터 -> ", data);
//     //io.sockets.emit("sm", data);
//     socket.broadcast.emit("sm", data);
//   });
//   socket.emit("welcome", "안녕 노드에서 보내");

//   socket.on("disconnect", () => {
//     console.log("disconnect 이벤트");
//   });
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "build", "index.html"));
}); //리액트로 지정

app.use((req, res, next) => {
  const error = new Error(`${req.url} ${req.method} 라우터 없음`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.log("에러 미들웨어 ", err);
  res.locals.message = err.message;
  res.locals.error = err;
  res.status(err.status || 500);
  return res.json(err);
});

const server = app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 picdiary 실행중");
});

Socket(server);

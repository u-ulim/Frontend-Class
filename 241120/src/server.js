import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
// 미들웨어 작성 대신에 morgan을 사용할 수 있다.
// const morganMiddleware = morgan("dev");
const morganMiddleware = morgan("combined");
app.use(morganMiddleware);

// Global Router
const globalRouter = express.Router();
const handleHome = (req, res) => {
  return res.send("Home");
};
// /에 도착을 하면 globalRouter가 실행이 된다. 그리고 그 안에 있는 get이 실행이 된다.
globalRouter.get("/", handleHome);

// User Router
const userRouter = express.Router();
const handleEditUser = (req, res) => {
  return res.send("Edit User");
};
userRouter.get("/edit", handleEditUser);

// Video Router
const videoRouter = express.Router();
const handleWatchVideo = (req, res) => {
  return res.send("Watch Video");
};
videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter); // => 이렇게 하면 /로 들어오는 모든 요청은 globalRouter로 가게 된다.
app.use("/users", userRouter); // => 이렇게 하면 /users로 들어오는 모든 요청은 userRouter로 가게 된다.
app.use("/video", videoRouter); // => 이렇게 하면 /videos로 들어오는 모든 요청은 videoRouter로 가게 된다.
// => 그리고 파이널로 보내자

// const handleLogin = (req, res) => {
//   return res.send("Login Here");
// };

// app.use(middleWare); // => 이렇게 app.get에서 qpp.use로 바꿔줄 수 있음 => 이게 만약 get에 있다면 실행이 되지 않는다. get은 종결이다. 그래서 app.use가 app.get보다 먼저 실행되어야 한다.

const handleListening = () =>
  console.log(`Server Listning on Port http://localhost:${PORT} ☃`);

app.listen(4000, handleListening);

import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
// 미들웨어 작성 대신에 morgan을 사용할 수 있다.
// const morganMiddleware = morgan("dev");
const morganMiddleware = morgan("combined");

// 미드웨어가 들어옴
const middleWare = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, You may continue");
  next();
};

const handleHome = (req, res) => {
  return res.end();
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the Pirvate Lounge");
};
// const handleLogin = (req, res) => {
//   return res.send("Login Here");
// };

app.use(morganMiddleware);
// app.use(middleWare); // => 이렇게 app.get에서 qpp.use로 바꿔줄 수 있음 => 이게 만약 get에 있다면 실행이 되지 않는다. get은 종결이다. 그래서 app.use가 app.get보다 먼저 실행되어야 한다.
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);
// app.get("/login", handleHome);

const handleListening = () =>
  console.log(`Server Listning on Port http://localhost:${PORT} ☃`);

app.listen(4000, handleListening);

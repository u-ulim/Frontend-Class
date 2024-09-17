const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const app = express();

const PORT = process.env.PORT || 5001;

const router = require("./router");

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("we have a new connection!!!");
  socket.on("disconnect", () => {
    console.log("user had left!!!!!");
  });
});

app.use(router);
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

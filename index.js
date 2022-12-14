const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "https://venerable-moxie-202209.netlify.app/",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  socket.on("disconnect", () => {
    console.log(`User disconnected ${socket.id}`);
  });
});
server.listen(port, () => {
  console.log(`Listening *${port}`);
});

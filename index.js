const express = require("express"); // Access
 const socket = require("socket.io");
 const app = express(); //Initialized and server ready
 app.use(express.static("public"));
 app.use(require("cors")({ origin: "*" }));
 let port = process.env.PORT || 5001;
 let server = app.listen(port, () => {
   console.log("Listening to port" + port);
 });
 let io = socket(server);
 io.on("connection", (socket) => {
   console.log("Made socket connection");
   socket.on("beginPath", (data) => {
     io.sockets.emit("beginPath", data);
   });
   socket.on("drawPath", (data) => {
     io.sockets.emit("drawPath", data);
   });
   socket.on("undoRedoCanvas", (data) => {
     io.sockets.emit("undoRedoCanvas", data);
   });
 });


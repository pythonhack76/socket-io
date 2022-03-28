//inizializzazione con express
const express = require('express');
const app = express();
const http = require("http");
const {Server} = require('socket.io');
const cors = require("cors");

app.use(cors()); 

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        method: ["GET", "POST"],
    },
});


io.on("connection", (socket) => {
    console.log(`User Connects: ${socket.id}`);

    socket.on("send_message", (data) => {
                console.log(data);
    })
})


server.listen(3001, () => {
    console.log("SERVER RUNNING AGAIN!");
})



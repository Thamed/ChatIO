"use strict";
exports.__esModule = true;
const express = require("express");
const path = require("path");
const dotenv = require('dotenv');
const mongoose = require('./database/connection');
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
//routes
const users = require('./routes/users.routes');
const auth = require('./routes/auth.route');
//.env
dotenv.config();
if(!process.env.JWT_KEY){
    console.log("FATAL ERROR: JTWkey is not defined.");
    process.exit(1);
}
//app settings
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);

app.get("/", function (req, res) {
    res.sendFile(path.resolve("./client/index.html"));
});

io.on("connection", function (socket) {
    console.log("a user connected");
    socket.on("message", function (message) {
        socket.se;
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
var server = http.listen(3000, function () {
    console.log("listening on port:" + app.get("port"));
});

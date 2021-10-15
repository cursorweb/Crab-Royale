const path = require("path");

const express = require("express");
const app = express();

const http = require("http").createServer(app);
const io = require("socket.io")(http);


app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules", "p5"))); // hacky, i know

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (_, res) => {
    res.render("index");
});


http.listen(8080);


io.on("connection", socket => {
    console.log(socket.id, "connected");

    socket.on("disconnect", () => {
        console.log(socket.id, "disconnected");
    });
});

console.log("Ready on http://localhost:8080");

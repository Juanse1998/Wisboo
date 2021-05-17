const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const imagesRouter = require("./routes/images");

const server = express();
server.use(express.json());
server.use(bodyParser.json());

server.name = "API";

server.use(cookieParser());

server.use(imagesRouter);


module.exports = server;

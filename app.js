const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const app = express();

const server = http.createServer();

sequelize.sync();

server.listen(3000);

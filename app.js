const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("/util/database");

const app = express();

const server = http.createServer();

sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

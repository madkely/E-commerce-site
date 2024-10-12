const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const http = require("http");

const app = express();

app.use(bodyParser.json());

app.get("/", function (req, res, next) {
  try {
    res.send("welcome to my E-commerce site!");
  } catch (error) {
    next(error);
  }
});

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const PORT = 3000;

http.createServer(app).listen(PORT, function (req, res) {
  console.log(`Server running at http://localhost:${PORT}/`);
});

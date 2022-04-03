const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.listen(PORT);

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("Levantando servidor en el puerto: ", PORT);
});

app.get("/", (req, res) => {
  let route = path.resolve(__dirname, "./views/home.html");
  res.sendFile(route);
});

app.get("/register", (req, res) => {
  let route = path.resolve(__dirname, "./views/registro.html");
  res.sendFile(route);
});

app.get("/login", (req, res) => {
  let route = path.resolve(__dirname, "./views/login.html");
  res.sendFile(route);
});

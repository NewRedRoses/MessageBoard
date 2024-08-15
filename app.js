const express = require("express");
const app = express();
const path = require("node:path");

const PORT = 3000;

// Views setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Data
const messages = [
  {
    text: "Hello!",
    user: "Armand",
    added: new Date(),
  },
  {
    text: "How are you doing, Armand?",
    user: "Gwyn",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Message-board", messages: messages });
});
app.get("/new", (req, res) => {
  res.render("form");
});

app.listen(PORT, () => {
  console.log(`Launched on port: ${PORT}`);
});

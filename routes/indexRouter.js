const { Router } = require("express");
const indexRouter = Router();

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

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message-board", messages: messages });
});

indexRouter.get("/messages/:id", (req, res) => {
  res.render("msgContent", { message: messages[req.params.id] });
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});
module.exports = indexRouter;

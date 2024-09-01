const db = require("../db/queries");

// Data
const messages = [];

async function displayAllMessages(req, res) {
  res.render("index", { title: "Mini Message Board", messages: messages });
  const allMessages = await db.getAllMessages;
}

async function expandMessage(req, res) {
  res.render("msgContent", { message: messages[req.params.id] });
}

async function addMessage(req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
}

module.exports = {
  displayAllMessages,
  expandMessage,
  addMessage,
};

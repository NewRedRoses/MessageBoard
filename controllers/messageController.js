const db = require("../db/queries");

// Data
const messages = [];

async function displayAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message Board", messages: messages });
}

async function expandMessage(req, res) {
  res.render("msgContent", { message: messages[req.params.id] });
}

async function addMessage(req, res) {
  const { message, name } = req.body;
  await db.addMessageToDb(message, name, new Date());
  res.redirect("/");
}

module.exports = {
  displayAllMessages,
  expandMessage,
  addMessage,
};

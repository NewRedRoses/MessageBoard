const { Router } = require("express");
const indexRouter = Router();
const db = require("../db/queries");
const {
  displayAllMessages,
  expandMessage,
  addMessage,
} = require("../controllers/messageController");

indexRouter.get("/", displayAllMessages);

indexRouter.get("/messages/:id", expandMessage);

indexRouter.post("/new", addMessage);

module.exports = indexRouter;

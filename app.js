const express = require("express");
const app = express();
const path = require("node:path");

// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("sample");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Launched on port: ${PORT}`);
});

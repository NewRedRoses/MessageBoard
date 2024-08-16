const express = require("express");
const app = express();
const path = require("node:path");

const PORT = 3000;

// Views setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Allowing express to retrieve data from forms
app.use(express.urlencoded({ extended: true }));

// Routers
const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

app.get("/new", (req, res) => {
  res.render("form");
});

app.listen(PORT, () => {
  console.log(`Launched on port: ${PORT}`);
});

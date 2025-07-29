const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form", {});
});
app.post("/new", (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  messages.push({ text: message, user: name, added: new Date() });
  res.redirect("/");
});
//app.post("/new", router);

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});

module.exports = messages;

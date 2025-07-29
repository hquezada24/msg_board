const { Router } = require("express");
const router = Router();
const messages = require("../app");

router.get("/", (req, res) => {
  res.render("form", {});
});
router.post("/", (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  messages.push({ text: message, user: name, added: new Date() });
  res.redirect("/");
});

module.exports = router;

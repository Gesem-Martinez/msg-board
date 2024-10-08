const { Router } = require("express");
const messages = require("../models/messages");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  //res.send('Hello World from index route');
  res.render("form");
});

newRouter.post("/", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = newRouter;

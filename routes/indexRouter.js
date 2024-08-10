const { Router } = require('express');
const messages = require('../models/messages');

const indexRouter = Router();


indexRouter.get('/', (req, res) => {
  //res.send('Hello World from index route');
  res.render("index", { messages: messages });
});

module.exports = indexRouter;

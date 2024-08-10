const express = require('express');
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT, () => {
  console.log(`Messaging Board app listening on port ${PORT}...`);
});

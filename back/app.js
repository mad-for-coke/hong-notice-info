const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgam = require('morgan');
const session = require('express-session');
const indexRouter = require('./routes/index');
const sequelize = require('./models').sequelize;

const app = express();
sequelize.sync();

app.use('/', indexRouter);

app.use((req, res, next) => {
  const err = new Error('404 Not Found');
  err.status = 404;
  next(err);
});

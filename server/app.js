const express = require('express');
const compression = require('compression');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const router = require('./router');
const { clientError, serverError } = require('./controllers/errors');

require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 3000);

app.disable('x-powered-by');

app.use([
  express.json(),
  express.urlencoded({ extended: false }),
  compression(),
  cookieParser(),
  express.static(join(__dirname, '..', 'public')),
  router,
  serverError,
  clientError
]);

module.exports = { app };

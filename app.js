const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// set up express app
const app = express();

// log requests
app.use(logger('dev'));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// default catch-all route
app.get('*', (req, res) => res.status(200).send({
  message: 'Flexbudget API!',
}));

module.exports = app;

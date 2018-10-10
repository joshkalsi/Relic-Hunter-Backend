'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const
  express = require('express'),
  app = express(),
  { Model } = require('objection'),
  apiRouter = require('./routes/api');

let knexConfig;

if (process.env.NODE_ENV === 'production') {
  knexConfig = {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  };
} else {
  knexConfig = require('./knexfile')[process.env.NODE_ENV];
};

// Initialise knex and bind models to knex instance
const Knex = require('knex')(knexConfig);
Model.knex(Knex);

// Parsing
app.use(express.json({ 'limit': '5mb' }));

// Log Requests in Dev
if (process.env.NODE_ENV === 'development') {
  app.all('/*', (req, res, next) => {
    console.log(`${req.method} request was made to: ${req.originalUrl}`);
    return next();
  });
}

// Routes
app.get('/', (req, res) => {
  res.redirect('/api');
});
app.use('/api', apiRouter);

// 404
app.use('/*', (req, res) => {
  res.status(404).send({ error: 'Not Found' });
});

// Custom Errors
app.use((err, req, res, next) => {

  if (err.name === 'CastError') {
    err.status = 400;
    err.message = 'Invalid ID';
  };
  if (err.name === 'ValidationError') {
    err.status = 400;
    // err.message = err.message;
  };
  if (err.status) res.status(err.status).send({ message: err.message });
  else next(err);
});

// 500
app.use((err, req, res) => {
  console.log(err, ' <<< error object');
  console.log(err.code, ' <<< error code');
  res.status(500).send({ error: `Internal Server Error ${err.message || err.msg}` });
});

module.exports = app;

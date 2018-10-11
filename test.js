const Question = require('./models/Question');
const
  { Model } = require('objection'),
  host = process.env.DB_HOST || require('./config/db').host,
  user = process.env.DB_USER || require('./config/db').user,
  password = process.env.DB_PASSWORD || require('./config/db').password,
  database = process.env.DB_DATABASE || require('./config/db').database;

// Setup DB Connection
const connection = {
  host,
  user,
  password,
  database
};

// Initialise knex
const Knex = require('knex')({
  client: 'postgres', // pg
  connection: connection
});

// Bind Models to knex instance
Model.knex(Knex);

Question.query()
  .patchAndFetchById(1, { is_published: false })
  .then((question) => {
    console.log(typeof question.is_published);
    console.log(question);
  });

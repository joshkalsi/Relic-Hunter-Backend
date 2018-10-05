'use strict';

const
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

module.exports = {

  development: {
    client: 'postgresql',
    connection: connection,
    pool: {
      min: 2,
      max: 10
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

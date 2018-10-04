'use strict';

const dbConfig = require('./config/db.js');

// Setup DB Connection
const connection = {
  host: process.env.DB_HOST || dbConfig.host,
  user: process.env.DB_USER || dbConfig.user,
  password: process.env.DB_PASSWORD || dbConfig.password,
  database: process.env.DB_DATABASE || dbConfig.database
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

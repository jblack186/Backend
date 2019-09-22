require('dotenv').config();

module.exports = {
  development: {
      client: 'postgresql',
      connection: {
         
         
          database: './database/vacations.db3'
      },
      migrations: {
          directory: __dirname + '/database/migrations',
      },
      seeds: {
          directory: __dirname + '/database/seeds',
      },
  },
  production: {
      client: 'postgresql',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/database/migrations',
      },
      seeds: {
          directory: __dirname + '/database/seeds',
      },
  },
};



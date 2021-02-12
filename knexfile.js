// Update with your config settings.

const Environment = require("./src/config/Environments/Environments")

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: Environment.dbName,
      user: Environment.dbUser,
      password: Environment.dbPass
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
};

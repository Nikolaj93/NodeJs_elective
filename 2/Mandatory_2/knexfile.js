const credentials = require("./config/mysqlCredentials.js");
module.exports = {
  development: {
    client: credentials.development.client,
    connection: {
      database: credentials.development.connection.database,
      user: credentials.development.connection.user, 
      password: credentials.development.connection.password
    }
  }
};

/*
const credentials = require("./config/mysqlCredentials.js");
const { knexSnakeCaseMappers } = require('objection');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: credentials.database,
      user:     credentials.user,
      password: credentials.password
    },
    ...knexSnakeCaseMappers()
  }
};*/

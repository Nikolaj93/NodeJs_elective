/*
module.exports = {
    database: 'mandatory2',
    user:     'root',
    password: 'Nikolaj1234',
};
*/

const credentials = require("./config/mysqlCredentials.js")

module.exports = {
    development: {
        client: 'myysql',
        connection: {
          database: 'MY_DB',
          user: 'user', 
          password: 'password'
        }
      }
};
const path = require("path");
module.exports = {

  development: {
    client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : 'passroot',
    database : 'foodexplorer'
  },
    migrations: {
      directory: path.join(__dirname, 'src', 'database', "knex", "migrations")
    },
    useNullAsDefault: true
  },
};
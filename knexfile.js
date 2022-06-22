const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;


module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      direcotry: path.join(__dirname, "src", "db", "migrations"),
      // Setting directory: path.join(__dirname, "src", "db", "migrations") within the migrations object will tell Knex to store migration files in the migrations folder at src/db/migrations.
    }
  },
};
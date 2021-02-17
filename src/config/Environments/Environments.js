require("dotenv").config();

module.exports = {
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    port: process.env.PORT,
    dbTestDialect: process.env.DB_DIALECT
}

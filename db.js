const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: '',
    database: process.env.DATABASE_NAME
});

module.exports = pool;

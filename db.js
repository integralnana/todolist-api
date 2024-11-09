const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost', 
    user: 'root', 
    password: '',
    database: 'todo_app'
});

module.exports = pool;

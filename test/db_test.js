const mysql = require('mysql2');

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'techevents_users',
    password: 'test',
    port: 3308
});

module.exports = pool.promise();
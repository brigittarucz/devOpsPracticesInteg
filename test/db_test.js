const mysql = require('mysql2');

const pool = mysql.createConnection({
    host: 'mariadb_dummy',
    user: 'root',
    database: 'techevents_users',
    password: 'test',
    port: 3308
});

pool.connect(function (err) {
    if (err !== null) {
        if (err.errno === 'ENOTFOUND') {
            pool.host = 'localhost';
        }
    }
})

module.exports = pool.promise();
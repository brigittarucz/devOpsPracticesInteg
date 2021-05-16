const mysql = require('mysql2');

// REDUCE TIME SPENT CONNECTING TO SQL BY 
// REUSING PREVIOUS CONNECTIONS FROM THE POOL

const pool = mysql.createConnection({
    host: 'mariadb',    // Docker
    // host: 'localhost',  // Testing
    user: 'root',
    database: 'techevents_users',
    password: 'password',
    port: 3306
});

module.exports = pool.promise();
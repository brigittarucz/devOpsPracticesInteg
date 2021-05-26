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


pool.connect(function(err) {
    if(err !== null) {
        if(err.errno === 'ENOTFOUND') {
            pool.host = 'localhost';
        }
    }
})

module.exports = pool.promise();


// module.exports = pool.promise();
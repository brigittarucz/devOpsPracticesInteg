const mysql = require('mysql2');

// REDUCE TIME SPENT CONNECTING TO SQL BY 
// REUSING PREVIOUS CONNECTIONS FROM THE POOL
var os = require("os");
console.log(os.hostname());
const pool = mysql.createConnection({
    host: 'mariadb',    // Docker
    // host: 'localhost',  // Testing
    user: 'root',
    database: 'techevents_users',
    password: 'password',
    port: 3306
});

pool.connect(function(err) {
    if(!err) {
        module.exports = pool.promise();
    } 
})

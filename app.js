const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/routes');
const db = require('./util/database'); // CONNECTION POOL
const compression = require('compression');
const morgan = require('morgan');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

// App compression with compression
app.use(compression());

// Logging with morgan
const fs = require('fs');
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'accesss.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }));

// TEST THE DB
// db.execute('SELECT * FROM users WHERE email = ?', ['brigitt1a121@yahoo.com']).then(result =>{
//     console.log(result[0]);
// }).catch(err => {
//     console.log(err);
// });
console.log("Running on port 3000");
app.listen(3000);


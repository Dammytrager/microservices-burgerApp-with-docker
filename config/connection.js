const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect({}, (err) => {
    if(err) {
        console.log(err)
    }
});

module.exports = connection;

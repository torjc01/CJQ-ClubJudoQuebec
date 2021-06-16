const dotenv  = require('dotenv').config();

module.exports  = {
    database    : "CJQ", //process.env.MYSQL_DATABASE,
    host        : "localhost", // process.env.MYSQL_HOST,
    port        : "3306", // process.env.MYSQL_PORT_LOCAL,
    user        : "root", // process.env.MYSQL_USER,
    password    : "changemenow", // process.env.MYSQL_PASSWORD
};
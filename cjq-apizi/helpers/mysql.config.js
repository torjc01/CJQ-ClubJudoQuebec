const dotenv  = require('dotenv').config();

module.exports  = {
    database    : "CJQ", //process.env.MYSQL_DATABASE,
    host        : "db", // process.env.MYSQL_HOST,
    port        : "3308", // process.env.MYSQL_PORT_LOCAL,
    user        : "cjqweb", // process.env.MYSQL_USER,
    password    : "123456", // process.env.MYSQL_PASSWORD
};
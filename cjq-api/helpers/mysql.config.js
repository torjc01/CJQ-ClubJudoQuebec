const dotenv  = require('dotenv').config();

module.exports  = {
    database    : process.env.MYSQL_DATABASE,
    host        : process.env.MYSQL_HOST,
    user        : process.env.MYSQL_USER,
    password    : process.env.MYSQL_PASSWORD
};
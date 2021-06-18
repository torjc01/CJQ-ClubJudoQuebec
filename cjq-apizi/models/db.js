const mysql = require('mysql'); 

let { database, host, user, password, port } = require('../helpers/mysql.config');
let CONN_LIMIT = 5;

console.log("CREATE POOL ")
console.log(`host: ${host}`); 
console.log(`port: ${port}`); 
console.log(`database: ${database}`);
console.log(`user: ${user}`); 
console.log(`password: ${password}`);

/*let pool = mysql.createPool({
    connectionLimit: CONN_LIMIT, 
    host: host, 
    port: port,
    user: user, 
    password: password, 
    database: database
});


const connection = pool.getConnection(function(err, connection){
    if(err){
        connection.release(); 
        return console.error(err.message);
    }
}); */ 


const connection = mysql.createConnection({
    database    : "CJQ", //process.env.MYSQL_DATABASE,
    host        : "db", // process.env.MYSQL_HOST,
    port        : "3306", // process.env.MYSQL_PORT_LOCAL,
    user        : "cjqweb", // process.env.MYSQL_USER,
    password    : "123456" // process.env.MYSQL_PASSWORD
});


connection.connect(error => {
    if(error) throw error; 
    console.log(`Successfully connected to db ${database}`);
})

module.exports = connection; 
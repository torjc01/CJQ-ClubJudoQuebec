let mysql = require('mysql'); 
let { database, host, user, password, port } = require('../helpers/mysql.config');
let contacts = require('../models/Contact');

let CONN_LIMIT = 5;

console.log("CREATE POOL ")
console.log(`host: ${host}`); 
console.log(`port: ${port}`); 
console.log(`database: ${database}`);
console.log(`user: ${user}`); 
console.log(`password: ${password}`);

let pool = mysql.createPool({
    connectionLimit: CONN_LIMIT, 
    host: host, 
    port: port,
    user: user, 
    password: password, 
    database: database
});

/*
*
*/
exports.getContacts = async (req, res) => {
    console.log(`GET /users - Lists all contacts`); 
    let tiguidou = contacts.getAll; 
    console.log("AQUI!!!! ", tiguidou);
    res.status(200).send(`GET /contacts - Lists all contacts ${tiguidou}`); 
};

/*
*
*/
exports.getContactById = async(req, res) => {
    let id = req.params.id; 
    console.log(`GET /contacts/:id - get a specific contact ${id}`); 
    res.status(200).send(`GET /contacts/:id - get a specific contact ${id}`); 
}

/*
*
*/
exports.createContact = async(req, res) => {
    console.log(`POST /contacts - creates a new contact`); 
    /*let nom = req.body.nom; 
    let prenom = req.body.prenom;
    await maio(nom, prenom); */
    res.status(201).send(`POST /contact - creates a new contact`); 
}

/*
*
*/
exports.patchContact = async(req, res) => {
    let id = req.params.id; 
    console.log(`PATCH /contacts/:id - update the data for a specific contact ${id}`); 
    res.status(200).send(`PATCH /contacts/:id - update the data for a specific contact ${id}`); 
}

/*
*
*/
exports.deleteContact = async(req, res) => {
    let id = req.params.id; 
    console.log(`DELETE /contacts/:id - update the data for a specific contact ${id}`); 
    res.status(200).send(`DELETE /contacts/:id - update the data for a specific contact ${id}`); 
}

let getContactsSQL = "SELECT * FROM CONTACT"; 

/*
*
*/
async function execQuery(sql, data){
    pool.getConnection(function(err, connection){
        if(err){
            connection.release(); 
            return console.error(err.message);
        }
        // execute query
        connection.query(sql, (err, results, fields)=> {
            if(err){
                data(null, err)
                return console.error(err.message); 
            }
            data(null, results);
            console.log(data);
            connection.release();  // release the connection to the pool 
        })
    });
}



/*
*
*/
function endPool(){
    pool.end(function(err){
        if(err){
            return console.log(err.message);
        }
        // close all connections
    });
}

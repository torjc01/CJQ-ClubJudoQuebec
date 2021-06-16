let mysql = require('mysql'); 
let { database, host, user, password } = require('../helpers/mysql.config');

let CONN_LIMIT = 5;

let pool = mysql.createPool({
    connectionLimit: CONN_LIMIT, 
    host: host, 
    user: user, 
    password: password, 
    database: database
});

/*
*
*/
exports.getContacts = (req, res) => {
    console.log(`GET /users - Lists all contacts`); 
    res.status(200).send(`GET /contacts - Lists all contacts`); 
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

/*
*
*/
function execQuery(){
    pool.getConnection(function(err, connection){
        if(err){
            return console.err(err.message);
        }
        // execute query
        

        // release the connection to the pool 
        connection.release(); 
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

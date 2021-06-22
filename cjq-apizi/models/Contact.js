const sql = require('./db'); 

// constructor
const Contact = function(contact){
    this.nom                    = contact.nom;
    this.prenom                 = contact.prenom; 
    this.courriel               = contact.courriel; 
    this.telephone              = contact.telephone;
    this.messageContact         = contact.messageContact; 
    this.statusMessage          = contact.statusMessage; 
    this.tokenReponse           = contact.tokenReponse; 
    this.codeMembre             = contact.codeMembre;
}; 

Contact.getAll = result => {
    sql.query("SELECT * FROM CONTACT", (err, res) => {
        if(err){
            console.log("error: ", err);
            result(null, err);
            return; 
        }
        console.log(`customers: ${res}`); 
        result(null, res);
    });
};

module.exports = Contact;
const sql = require('./db'); 

const Contact = function(contact) {
    this.nom                    = contact.nom; 
    this.prenom                 = contact.prenom; 
    this.courriel               = contact.courriel; 
    this.telephone              = contact.telephone; 
    this.messageContact         = contact.messageContact; 
    this.indicateurEtatMessage  = contact.indicateurEtatMessage;
    this.tokenReponse           = contact.tokenReponse; 
    this.codeMembre             = contact.codeMembre;
}

let getAllSQL = "SELECT * FROM CONTACT"; 
let findByIDSQL = "SELECT * FROM CONTACT WHERE codeContact = ?";

Contact.create = (newContact, result) => {
    sql.query("INSERT INTO CONTACT SET ?", newContact, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        console.log("created customer: ", { id: res.insertId, ...newContact });
        result(null, { id: res.insertId, ...newContact });
    });
};

Contact.findById = (codeContact, result) => {
    sql.query(`SELECT * FROM CONTACT WHERE codeContact = ${codeContact}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found contact: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found contact with the id
        result({ kind: "not_found" }, null);
        });
};

Contact.getAll = result => {
    sql.query(getAllSQL, (err, res) =>{
        if(err){
            console.error(`Error ${err}`); 
            result(null, err); 
            return;
        }
        console.log("contacts: ", res); 
        result(null, res);
    });
};

Contact.updateById = (codeContact, contact, result) => {

}

Contact.remove = (id, result) => {

};

Contact.removeAll = result => {

}; 

module.exports = Contact;
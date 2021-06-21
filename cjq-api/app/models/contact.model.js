const sql = require('./db'); 

const Contact = function(contact) {
    this.nom                    = contact.nom; 
    this.prenom                 = contact.prenom; 
    this.courriel               = contact.courriel; 
    this.telephone              = contact.telephone; 
    this.messageContact         = contact.messageContact; 
    this.dateReceptionMessage   = contact.dateReceptionMessage;
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
    
        console.log("created contact: ", { id: res.insertId, ...newContact });
        result(null, { id: res.insertId, ...newContact });
    });
};

Contact.findById = (codeContact, result) => {
    sql.query(`SELECT * FROM CONTACT WHERE codeContact = ?`, codeContact, (err, res) => {
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
    sql.query(
        "UPDATE CONTACT SET nom = ?, prenom = ?, courriel = ?, telephone = ?, messageContact = ?, dateReceptionMessage = ?, indicateurEtatMessage = ?, tokenReponse = ?, codeMembre = ? WHERE codeContact = ?",
        [
         contact.nom, 
         contact.prenom, 
         contact.courriel, 
         contact.telephone, 
         contact.messageContact, 
         contact.dateReceptionMessage, 
         contact.indicateurEtatMessage, 
         contact.tokenReponse, 
         contact.codeMembre, 
         codeContact
        ],
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
    
          if (res.affectedRows == 0) {
            // not found contact with the id
            result({ kind: "not_found" }, null);
            return;
          }
    
          console.log("updated contact: ", { codeContact: codeContact, ...contact });
          result(null, { codeContact: codeContact, ...contact });
        }
      );
}


Contact.remove = (codeContact, result) => {
    sql.query("DELETE FROM CONTACT WHERE codeContact = ?", codeContact, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
    
        if (res.affectedRows == 0) {
          // not found contact with the codeContact
          result({ kind: "not_found" }, null);
          return;
        }
    
        console.log("deleted contact with codeContact: ", codeContact);
        result(null, res);
      });
};

Contact.removeAll = result => {
    sql.query("DELETE FROM CONTACT", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
    
        console.log(`deleted ${res.affectedRows} contacts`);
        result(null, res);
      });
}; 

module.exports = Contact;
const sql = require('./db');

const User = function(user){
    this.username           = user.username; 
    this.codeMembre         = user.codeMembre; 
    this.motPasse           = user.motPasse; 
    this.statusUser         = user.statusUser; 
    this.niveauPermission   = user.niveauPermission;
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO USER SET ?", newUser, (err, res) =>{
        if(err){
            console.log("error: ", err); 
            result(err, null); 
            return; 
        }

        console.log("User created: ", { id: res.insertId, ...newUser });
        result(null, {id: res.insertId, ...newUser}); 
    });
};

User.getAll = result => {
    sql.query("SELECT * FROM USER", (err, res) => {
        if(err){
            console.error(`Error: ${err}`); 
            result(null, err); 
            return;
        }
        console.log(`Users: ${res}`); 
        result(null, res); 
    });
}; 

User.findById = (codeUser, result) => {
    sql.query("SELECT * FROM USER WHERE codeUser = ?", codeUser, (err, res) =>{
        if(err){
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found user with the id
        result({ kind: "not_found" }, null);
    });
};

User.updateById = (codeUser, user, result) => {
    sql.query("UPDATE USER SET username=?, codeMembre=?, motPasse=?, statusUser=?, niveauPermission=? WHERE codeUser=?",
        [
         user.username, 
         user.codeMembre, 
         user.motPasse, 
         user.statusUser, 
         user.niveauPermission,
         codeUser
        ],
        (err, res) => {
            if (err) {
                console.log("Error: ", err);
                result(null, err);
                return;
            }
    
            if (res.affectedRows == 0) {
            // not found contact with the id
            result({ kind: "not_found" }, null);
            return;
            }
    
            console.log("updated user: ", { codeUser: codeUser, ...user });
            result(null, { codeUser: codeUser, ...user });
        }
    ); 

};

User.remove = (codeUser, result) => {
    sql.query("DELETE FROM USER WHERE codeUser = ?", codeUser, (err, res) => {
        if (err) {
          console.log("Error: ", err);
          result(null, err);
          return;
        }
    
        if (res.affectedRows == 0) {
          // not found contact with the codeContact
          result({ kind: "not_found" }, null);
          return;
        }
    
        console.log("deleted user with codeContact: ", codeUser);
        result(null, res);
      });
}

module.exports = User;
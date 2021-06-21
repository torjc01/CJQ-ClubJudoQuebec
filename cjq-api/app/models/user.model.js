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

module.exports = User;
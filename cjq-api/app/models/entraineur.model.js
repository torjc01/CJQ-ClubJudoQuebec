const sql = require('./db'); 

const Entraineur = function(entraineur){
    this.nom                    = entraineur.nom;
    this.prenom                 = entraineur.prenom; 
    this.registreFederation     = entraineur.registreFederation; 
    this.gradeDan               = entraineur.gradeDan; 
    this.bio                    = entraineur.bio;
}

let getAllSQL   = "SELECT * FROM ENTRAINEUR ORDER BY codeEntraineur"; 
let findByIdSQL = "SELECT * FROM ENTRAINEUR WHERE codeEntraineur = ?"; 

Entraineur.getAll = result => {
    sql.query(getAllSQL, (err, res) => {
        if(err){
            console.log("Error: ", err); 
            result(null, err); 
            return; 
        }
        console.log("Entraineurs: ", res); 
        result(null, res); 
    });
};

Entraineur.findByID = (codeEntraineur, result) => {
    sql.query(findByIdSQL, codeEntraineur, (err, res) => {
        if(err){
            console.log("Error: ", err); 
            result(null, err); 
            return;
        }
        if(res.length){
            console.log(`Entraineur id: ${codeEntraineur} = `, res[0]);
            result(null, res[0]); 
            return;
        }
        // not found entraineur avec cet id 
        result({kind: "not_found"}, null); 
    });
};
module.exports = Entraineur;
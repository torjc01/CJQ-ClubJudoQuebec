const sql = require("./db"); 
const { findById } = require("./modalite.model");

const Horaire = function(horaire) {
    this.heureDebut = horaire.heureDebut; 
    this.heureFin   = horaire.heureFin; 
    this.nomHoraire = horaire.nomHoraire;
};

let getAllSQL = "SELECT * FROM HORAIRE ORDER BY codeHoraire"; 
let findByIdSQL  = "SELECT * FROM HORAIRE WHERE codeHoraire = ?"; 

Horaire.getAll = result => {
    sql.query(getAllSQL, (err, res) => {
        if(err){
            console.error(`Error: ${err}`); 
            result(null, err); 
            return; 
        }
        console.log("Horaires: ", res); 
        result(null, res); 
    });
}; 

Horaire.findById = (codeHoraire, result) => {
    sql.query(findByIdSQL, codeHoraire, (err, res) =>{
        if(err){
            console.log(`Error: ${err}`); 
            result(null, err);
            return;
        }
        if(res.length){
            console.log(`Horaire id: ${codeHoraire} = `, res[0]);
            result(null, res[0]); 
            return;    
        }

        // not found horaire avec cet id
        result({kind: "not_found"}, null); 
    })
}

module.exports = Horaire;
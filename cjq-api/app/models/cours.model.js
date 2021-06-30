const sql = require('./db'); 

const Cours = function(cours){
    this.codeModalite   = cours.codeModalite; 
    this.codeHoraire    = cours.codeHoraire; 
    this.codeEntraineur = cours.codeEntraineur; 
    this.salleDojo      = cours.salleDojo; 
}

let getAllSQL   = "SELECT * FROM COURS ORDER BY codeCours"; 
let findByIdSQL = "SELECT * FROM COURS WHERE codeCours=?"; 

Cours.getAll = result => {
    sql.query(getAllSQL, (err, res)=>{
        if(err){
            console.error(`Error: ${err}`);
            result(null, err); 
            return;
        }
        console.log(`Cours:`, res); 
        result(null, res); 
    });
};

Cours.findById = (codeCours, result) => {
    sql.query(findByIdSQL, codeCours, (err, res) => {
        if(err){
            console.log(`Error: ${err}`); 
            result(null, err);
            return;
        }
        if(res.length){
            console.log(`Cours id: ${codeCours} = `, res[0]);
            result(null, res[0]); 
            return;    
        }

        // not found cours avec cet :id
        result({kind: "not_found"}, null); 
    });
}
module.exports = Cours;
const sql = require('./db'); 

const Modalite = function(modalite){
    this.nomModalite = modalite.nomModalite; 
}

let getAllSQL   = "SELECT * FROM MODALITE ORDER BY codeModalite"; 
let findByIdSQL = "SELECT * FROM MODALITE WHERE codeModalite=?"; 

Modalite.getAll = result => {
    sql.query(getAllSQL, (err, res)=>{
        if(err){
            console.error(`Error: ${err}`);
            result(null, err); 
            return;
        }
        console.log(`Modalites:`, res); 
        result(null, res); 
    });
};

Modalite.findById = (codeModalite, result) => {
    sql.query(findByIdSQL, codeModalite, (err, res) => {
        if(err){
            console.log(`Error: ${err}`); 
            result(null, err);
            return;
        }
        if(res.length){
            console.log(`Modalite id: ${codeModalite} = `, res[0]);
            result(null, res[0]); 
            return;    
        }

        // not found modalite avec cet :id
        result({kind: "not_found"}, null); 
    });
}
module.exports = Modalite;
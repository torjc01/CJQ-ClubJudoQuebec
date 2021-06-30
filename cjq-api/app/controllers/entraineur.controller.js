const Entraineur = require("../models/entraineur.model"); 

// Cherche tous les entraineurs 
exports.findAll = (req, res) => {
    Entraineur.getAll((err, data) =>{
        if(err){
            res.status(500).send({
                message: err.message || "Erreur de la recherche d'entraineurs"
            });
        } else {
            res.send(data);
        }
    });
}; 

// Cherche un entraineur identifie par :id
exports.findById = ((req, res) =>{
    Entraineur.findByID(req.params.codeEntraineur, (err, data)=> {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Entraineur avec id": ${req.params.codeEntraineur} non trouvée.`
                });
            } else {
                res.status(500).send({
                    message: `Erreur lors de la recherche de l'entraineur :id ${req.params.codeEntraineur}`
                });
            }
        } else {
            res.send(data);
        }
    }); 
});
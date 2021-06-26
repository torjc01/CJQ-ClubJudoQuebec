const Horaire = require("../models/horaire.model"); 

// Cherche tous les horaires
exports.findAll = (req, res) => {
    Horaire.getAll((err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || "Erreur lors de la recherche de horaires"
            }); 
        } else {
            res.send(data); 
        }
    });
}; 

// Cherche un horaire identifié par :id
exports.findById = (req, res) => {
    Horaire.findById(req.params.codeHoraire, (err, data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Horaire avec id: ${req.params.codeHoraire} non trouvée.`
                });
            } else {
                res.status(500).send({
                    message: `Erreur lors de la recherche de l'horaire id ${req.params.codeHoraire}`
                });
            }
        } else {
            res.send(data);
        }
    });
}
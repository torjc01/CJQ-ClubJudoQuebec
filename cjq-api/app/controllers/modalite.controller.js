const Modalite = require('../models/modalite.model');

// Cherche toutes les modalites
exports.findAll = (req, res) => {
    Modalite.getAll((err, data) =>{
        if(err){
            res.status(500).send({
                message: err.message || "Erreur lors de la recherche de modalités"
            }); 
        } else {
            res.send(data); 
        }
    });
};

// Cherche une modalité identifié par :id
exports.findById = (req, res) => {
    Modalite.findById(req.params.codeModalite, (err, data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Modalité avec id: ${req.params.codeModalite} non trouvée.`
                });
            } else {
                res.status(500).send({
                    message: `Erreur lors de la recherche de la modalité id ${req.params.codeModalite}`
                });
            }
        } else {
            res.send(data);
        }
    });
}
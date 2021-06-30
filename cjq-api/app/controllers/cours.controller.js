const Cours = require('../models/cours.model');

// Cherche toutes les cours
exports.findAll = (req, res) => {
    Cours.getAll((err, data) =>{
        if(err){
            res.status(500).send({
                message: err.message || "Erreur lors de la recherche de cours"
            }); 
        } else {
            res.send(data); 
        }
    });
};

// Cherche un cours identifié par :id
exports.findById = (req, res) => {
    Cours.findById(req.params.codeCours, (err, data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Cours avec id: ${req.params.codeCours} non trouvée.`
                });
            } else {
                res.status(500).send({
                    message: `Erreur lors de la recherche du cours id ${req.params.codeCours}`
                });
            }
        } else {
            res.send(data);
        }
    });
}
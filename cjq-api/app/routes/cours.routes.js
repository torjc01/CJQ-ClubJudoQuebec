module.exports = app => {
    const cours = require('../controllers/cours.controller'); 

    // Cherche toutes les cours
    app.get("/cours", cours.findAll); 

    // Cherche cours identifié par :id
    app.get("/cours/:codeCours", cours.findById); 

};

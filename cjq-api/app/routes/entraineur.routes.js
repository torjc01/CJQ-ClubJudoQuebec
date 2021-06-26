module.exports = app => {
    const entraineurs = require("../controllers/entraineur.controller");

    // Chercher tous les entraineurs 
    app.get("/entraineurs", entraineurs.findAll); 

    // Chercher entraineur identifié par :id
    app.get("/entraineurs/:codeEntraineur", entraineurs.findById);

}



module.exports = app => {
    const horaires = require("../controllers/horaire.controller"); 

    // Cherche tous les horaires 
    app.get("/horaires", horaires.findAll); 

    // Cherche horaire identfié par :id
    app.get("/horaires/:codeHoraire", horaires.findById); 

};
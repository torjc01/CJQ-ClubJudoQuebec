module.exports = app => {
    const modalites = require('../controllers/modalite.controller'); 

    // Cherche toutes les modalités
    app.get("/modalites", modalites.findAll); 

    // Cherche modalite identifié par :id
    app.get("/modalites/:codeModalite", modalites.findById); 

};

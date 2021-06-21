module.exports = app => {

    const users = require('../controllers/user.controller.js'); 

    // Creation d'un nouveau user
    app.post('/users', users.create);

    // Lire tous les users
    app.get('/users', users.findAll); 

    // Lire un user spécifique
    app.get('/users/:codeUser', users.findOne); 

    // Mettre a jour un user 
    app.patch('/users/:codeUser', users.update); 

    // Supprime un user specifique
    app.delete('/users/:codeUser', users.delete);
}
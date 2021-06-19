module.exports = app => {
    const contacts = require('../controllers/contact.controller');

    // Create a new contact 
    app.post("/contacts", contacts.create); 

    // Retrieve all contacts
    app.get("/contacts", contacts.findAll); 

    // Retrieve a single contact with codeContact
    app.get("/contacts/:codeContact", contacts.findOne); 

    // Update a contact with a codeContact
    app.patch("/contacts/:codeContact", contacts.update); 

    // Delete a contact with codeContact
    app.delete("/contacts/:codeContact", contacts.delete);

    // Delete all contacts 
    app.delete("/contacts", contacts.deleteAll);
};
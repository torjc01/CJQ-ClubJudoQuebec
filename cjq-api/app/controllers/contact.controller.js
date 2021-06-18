const Contact = require("../models/contact.model");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const contact = new Contact({
    nom: req.body.nom, 
    prenom : req.body.prenom,
    courriel: req.body.courriel,
    telephone: req.body.telephone,
    messageContact: req.body.messageContact,
    indicateurEtatMessage: req.body.indicateurEtatMessage,
    tokenReponse: req.body.tokenReponse,
    codeMembre: req.body.codeMembre
  });

  // Save Customer in the database
  Contact.create(contact, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Contact."
      });
    else res.send(data);
  });
};

// Retrieve all contacts
exports.findAll = (req, res) => {
    Contact.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving contacts."
        });
      else res.send(data);
    });
  };
  
  // Find a single Customer with a codeContact
  exports.findOne = (req, res) => {
    Contact.findById(req.params.codeContact, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Contact with id ${req.params.codeContact}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Contact with id " + req.params.codeContact
          });
        }
      } else res.send(data);
    });
  };
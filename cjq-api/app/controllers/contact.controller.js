const Contact = require("../models/contact.model");

// Create and Save a new contact
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a contact
  const contact = new Contact({
    nom: req.body.nom, 
    prenom : req.body.prenom,
    courriel: req.body.courriel,
    telephone: req.body.telephone,
    messageContact: req.body.messageContact,
    dateReceptionMessage: req.body.dateReceptionMessage,
    indicateurEtatMessage: req.body.indicateurEtatMessage,
    tokenReponse: req.body.tokenReponse,
    codeMembre: req.body.codeMembre
  });

  // Save contact in the database
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
  
  // Find a single contact with a codeContact
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

  // Update a Contact identified by the codeContact in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Contact.updateById(
    req.params.codeContact,
    new Contact(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Contact with id ${req.params.codeContact}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Contact with id " + req.params.codeContact
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a contact with the specified codeContact in the request
exports.delete = (req, res) => {
  Contact.remove(req.params.codeContact, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found contact with id ${req.params.codeContact}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete contact with id " + req.params.codeContact
        });
      }
    } else res.send({ message: `Contact was deleted successfully!` });
  });
};

// Delete all contacts from the database.
exports.deleteAll = (req, res) => {
  Contact.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all contacts."
      });
    else res.send({ message: `All Customers were deleted successfully!` });
  });
};

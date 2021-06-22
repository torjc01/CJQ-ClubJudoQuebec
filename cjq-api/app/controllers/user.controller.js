const User = require('../models/user.model');

// Create and save a new user
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        res.status(400).send({
            message: "Content cannot be empty."
        });
    }

    // Create a user
    const user = new User({
        username           : req.body.username,
        codeMembre         : req.body.codeMembre, 
        motPasse           : req.body.motPasse,
        statusUser         : req.body.statusUser,
        niveauPermission   : req.body.niveauPermission
    });

    // Save the user in the db
    User.create(user, (err, data)=> {
        if(err){
            res.status(500).send({
                message: err.message || "Server error while creating a user."
            });
         
        } else res.send(data);
    });
};

// Retrieve all users from the db
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving users."
          });
        else res.send(data);
      });
};

// Find a single user with a codeUser
exports.findOne = (req, res) => {
    User.findById(req.params.codeUser, (err, data)=>{
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found user with id ${req.params.codeUser}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving user with id " + req.params.codeUser
              });
            }
        } else res.send(data);
    })
};

// Update a user identifyied by codeUser in the request
exports.update = (req, res) => {
    // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  User.updateById(
    req.params.codeUser,
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user with id ${req.params.codeUser}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating user with id " + req.params.codeUser
          });
        }
      } else res.send(data);
    }
  );
}; 

// Delete a user with a specified codeUser
exports.delete = (req, res) => {
    User.remove(req.params.codeUser, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found user with id ${req.params.codeUser}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete user with id " + req.params.codeUser
            });
          }
        } else res.send({ message: `User was deleted successfully!` });
      });
}; 
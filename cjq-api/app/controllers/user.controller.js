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
exports.findOne = (req, res) => {};

// Update a user identifyied by codeUser in the request
exports.update = (req, res) => {}; 

// Delete a user with a specified codeUser
exports.delete = (req, res) => {}; 
const express = require('express'); 

const userRouter = express.Router();

const userController = require('../controllers/users'); 
userRouter.post('/users', userController.newUser); 

module.exports = userRouter; 
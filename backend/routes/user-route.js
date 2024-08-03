const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

// Route to create a new user
router.post('/create-user', userController.createUser);

// Route to get all users
router.get('/users', userController.getAllUsers);

// Route to get a user by ID
router.get('/users/:id', userController.getUserById);


// Route to delete a user by ID
router.delete('/users/:id', userController.deleteUserById);

module.exports = router;

const express = require('express');
const router = express.Router();

const UsersAuthController = require('../controllers/usersAuth_controllers');

// check email
router.get('/checkEmail/:email', UsersAuthController.checkEmail);
// Register
router.post('/signup', UsersAuthController.signup);




module.exports = router;
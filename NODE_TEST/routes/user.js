const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

//****************USER***************** */

//USER - GET ALL USERS
router.get('/', function (req, res) {
    userController.getAllUsers(res);
});

//USER - GET USERS BY ID
router.get('/:id', function (req, res) {
    userController.getUserById(req, res);
});

//USER - POST USER SIGNUP
router.post('/signup', function (req, res) {
    userController.signup(req, res);
});

//USER - POST USERS LOGIN
router.post('/login', function (req, res) {
    userController.login(req, res);
});

//USER - LOGOUT
router.delete('/logout', function (req, res) {
    userController.logout(req, res);
});

//USER - DELETE
router.delete('/delete', function (req, res) {
    userController.deleteUser(req, res);
});

//USER - UPDATE
router.put('/update', function (req, res) {
    userController.updateUser(req, res);
});


module.exports = router;
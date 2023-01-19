const userController = require("../controllers/userController");
const AuthMiddleware = require("../Middleware/AuthMiddleware");
const express = require("express");
const router = express.Router();

router.post('/register', userController.signup);
router.post('/login', userController.login);
router.get('/profile', AuthMiddleware.authorize, userController.getUserProfile);
router.put('/profile', AuthMiddleware.authorize, userController.updateProfile);

module.exports = router;


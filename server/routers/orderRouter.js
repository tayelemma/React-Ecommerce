const express = require("express");
const orderController = require("../controllers/orderController");
const AuthMiddleware = require("../Middleware/AuthMiddleware");
const router = express.Router();

// router.get('/', AuthMiddleware.authorize, orderController.getAllOrders);
router.get('/', AuthMiddleware.authorize, orderController.getUserLoginOrders);
router.get('/:id', AuthMiddleware.authorize, orderController.getOrderById);
router.post('/', AuthMiddleware.authorize, orderController.createOrders);

module.exports = router;

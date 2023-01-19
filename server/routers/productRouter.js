const productController = require("../controllers/productController");
const AuthMiddleware = require("../Middleware/AuthMiddleware");
const express = require("express");
const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/:id/review', AuthMiddleware.authorize, productController.productReview);
router.post('/', productController.addProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;

const productController = require("../controllers/productController");
const AuthMiddleware = require("../Middleware/AuthMiddleware");
const express = require("express");
const router = express.Router();

router.get('/', productController.getAllProducts);
router.get("/all", AuthMiddleware.authorize, AuthMiddleware.admin, productController.adminGetAllProducts);
router.get('/:id', productController.getProductById);
router.post('/:id/review', AuthMiddleware.authorize, productController.productReview);
router.post('/', AuthMiddleware.authorize, AuthMiddleware.admin, productController.addProduct);
router.put('/:id', AuthMiddleware.authorize, AuthMiddleware.admin, productController.editProduct);
router.delete('/:id', AuthMiddleware.authorize, AuthMiddleware.admin, productController.deleteProduct);

module.exports = router;

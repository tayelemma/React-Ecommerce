const orderController = require("../controllers/orderController");
const express = require("express");
const router = express.Router();

//Not started 
router.get("/");
router.get("/:id");
router.post("/");
router.put("/:id");
router.delete("/:id");

module.exports = router;
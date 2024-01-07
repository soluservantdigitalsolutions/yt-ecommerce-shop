const { createProduct } = require("../controllers/product.controller");
const { verifyAdmin } = require("../middleware/verifyToken");

const router = require("express").Router();

router.post("/", verifyAdmin, createProduct);

module.exports = router;

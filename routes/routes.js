const router = require("express").Router();
const userRoutes = require("./user.route.js");
const authRoutes = require("./auth.route.js");
const productRoutes = require("./product.route.js");

const base = "/api/v1";

router.use(`${base}/users`, userRoutes);
router.use(`${base}/auth`, authRoutes);
router.use(`${base}/products`, productRoutes);

module.exports = router;

//http:localhost:4000/api/v1/auth/register

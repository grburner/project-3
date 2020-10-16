const router = require("express").Router();
const productRoutes = require("./products");

// Product routes
router.use("/products", productRoutes);

module.exports = router;

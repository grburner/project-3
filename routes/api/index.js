const router = require('express').Router();
const orderRoutes = require('./orders');
const productRoutes = require('./products');
const userRoutes = require('./users');


// Order routes
router.use('/orders', orderRoutes);

// Product routes
router.use('/products', productRoutes);

// User routes
router.use('/users', userRoutes);

module.exports = router;

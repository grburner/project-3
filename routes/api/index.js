const router = require('express').Router();
const consumerRoutes = require('./consumers');
const orderRoutes = require('./orders');
const productRoutes = require('./products');
const retailerRoutes = require('./retailers');
const userRoutes = require('./users');

// Consumer routes
router.use('/consumers', consumerRoutes);

// Order routes
router.use('/orders', orderRoutes);

// Product routes
router.use('/products', productRoutes);

// Retailer routes
router.use('/retailers', retailerRoutes);

// User routes
router.use('/users', userRoutes);

module.exports = router;

const router = require('express').Router();
const orderRoutes = require('./orders');
const productRoutes = require('./products');
const userRoutes = require('./users');
const externalRoutes = require('./external');

// Order routes
router.use('/orders', orderRoutes);

// Product routes
router.use('/products', productRoutes);

// User routes
router.use('/users', userRoutes);

// External routes
router.use('/external', externalRoutes);

module.exports = router;

const router = require('express').Router();
const productsController = require('../../controllers/productsController');

// Matches with "/api/products"
router.route('/')
  .get(productsController.findAll)
  .post(productsController.create);

// Matches with "/api/products/:id"
router
  .route('/:id')
  .get(productsController.findById)
  .put(productsController.update)
  .delete(productsController.remove);

// Matches with "/api/products/name/:name"
router
  .route('/name/:name')
  .get(productsController.findByName);

// Matches with "/api/products/retailer_id/:retailer_id"
router
  .route('/retailer_id/:retailer_id')
  .get(productsController.findByRetailerId);

module.exports = router;

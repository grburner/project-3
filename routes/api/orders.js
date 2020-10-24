const router = require('express').Router();
const { orderDataAPI } = require('../../client/src/utils/mockAPI');
const ordersController = require('../../controllers/ordersController');

// Matches with "/api/orders"
router.route('/')
  .get(ordersController.findAll)
  .post(ordersController.create);

// Matches with "/api/orders/:id"
router
  .route('/:id')
  .get(ordersController.findById)
  .put(ordersController.update)
  .delete(ordersController.remove);

// Matches with "/api/orders/retailer_id/:retailer_id"
router
  .route('/retailer_id/:retailer_id')
  .get(ordersController.findByRetailerId);

module.exports = router;

const router = require('express').Router();
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
  .delete(ordersController.remove)
  .patch(ordersController.updateOrder);

// Matches with "/api/orders/retailer_id/:retailer_id"
router
  .route('/retailer_id/:retailer_id')
  .get(ordersController.findByRetailerId);

// Matches with "/api/orders/user_id/:user_id"
router
  .route('/user_id/:user_id')
  .get(ordersController.findByUserId);

module.exports = router;

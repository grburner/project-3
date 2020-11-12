const router = require('express').Router();
const externalController = require('../../controllers/externalController');

router
  .route('/')
  .get(externalController.getTest)
  .post(externalController.createPaymentIntent);

module.exports = router;
const router = require("express").Router();
const consumersController = require("../../controllers/consumersController");

// Matches with "/api/consumers"
router.route("/")
  .get(consumersController.findAll)
  .post(consumersController.create);

// Matches with "/api/consumers/:id"
router
  .route("/:id")
  .get(consumersController.findById)
  .put(consumersController.update)
  .delete(consumersController.remove);

module.exports = router;

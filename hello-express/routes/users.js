const express = require("express");
const UsersController = require("../controllers/users_controller");
const router = express.Router();

/* GET users listing. /users/ */
router.get("/", UsersController.getAll);

module.exports = router;

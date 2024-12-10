const express = require("express");
const UsersController = require("../controllers/users_controller");
const router = express.Router();

const { body } = require("express-validator");
const UsersValidators = require("../validators/usersValidators");

/* GET users listing. /users/ */
router.get("/", UsersController.getAll);

router.get("/:id", UsersValidators.idValidator, UsersController.getById);

router.post("/login", UsersValidators.loginValidator, UsersController.login);

router.post(
  "/register",
  UsersValidators.registerValidator,
  UsersController.register
);

module.exports = router;

const express = require("express");
const UsersController = require("../controllers/users_controller");
const router = express.Router();

const { body } = require("express-validator");
const UsersValidators = require("../validators/usersValidators");
const authMiddleware = require("../middlewares/auth_middleware");

/* GET users listing. /users/ */
router.get("/", authMiddleware, UsersController.getAll);

router.get("/verify", authMiddleware, UsersController.verify);

router.get("/logout", UsersController.logout);

router.get("/:id", UsersValidators.idValidator, UsersController.getById);

router.post("/login", UsersValidators.loginValidator, UsersController.login);

router.post(
  "/register",
  UsersValidators.registerValidator,
  UsersController.register
);

module.exports = router;

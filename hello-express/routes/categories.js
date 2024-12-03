const express = require("express");
const CategoriesController = require("../controllers/categories_controller");

const router = express.Router();

router.use((req, res, next) => {
  req.timestamp = new Date();
  next();
});

router.get("/", CategoriesController.getAll);

router.get("/:id", (req, res) => {
  console.log(req.timestamp);
  res.send("Categorie met id: ");
});

router.post("/", CategoriesController.create);

module.exports = router;

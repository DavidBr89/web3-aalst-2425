const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  req.timestamp = new Date();
  next();
});

router.get("/", (req, res) => {
  console.log(req.timestamp);

  res.send("Categories page");
});

router.get("/:id", (req, res) => {
  console.log(req.timestamp);
  res.send("Categorie met id: ");
});

router.post("/", (req, res) => {
  console.log(req.timestamp);
  res.send("Categorie toegevoegd");
});

module.exports = router;

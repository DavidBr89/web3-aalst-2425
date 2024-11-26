// Require het Express package
const express = require("express");

// Nieuw router object aanmaken
const router = express.Router();

// Router level middleware
router.use((req, res, next) => {
  console.log("Producten middleware");
  next();
  // res.send("Producten middleware ");
});

// Route handlers die bij "/products" gaan horen
// Dit is eigenlijk deze url: http://localhost:3000/products/
router.get("/", (request, response) => {
  // request object -> komt vanuit uw client
  // IP adres opvragen van uw client
  console.log(request.ip);

  const { lang, color } = request.query;

  console.log(color);

  // TODO: Als de lang === "nl" -> Producten pagina teruggeven
  // Als de lang === "en" -> Product page teruggeven
  // DEFAULT => Producten pagina terug

  // response object -> zelf opsturen naar uw client
  // send methode is een eindtoestand

  // if (lang) {
  //   if (lang === "nl") {
  //     return response.send("Productpagina");
  //   } else if (lang === "en") {
  //     return response.send("Productpage");
  //   }
  // }
  // response.send("Productenpagina");
  switch (lang) {
    case "nl":
      response.send("Productpagina");
      break;
    case "en":
      response.send("Productpage");
      break;
    default:
      response.send("Productenpagina");
      break;
  }

  // response.send("Producten pagina");
});

// POST Request afhandelen
router.post("/", (req, res) => {
  // Je gaat waarschijnlijk de data dat hier binnenkomt in een DB gaan steken
  const data = req.body;

  // JSON methode -> json data terug te sturen -> eindtoestand
  res.status(201).json({ id: 1, ...data });
});

router.get(
  "/test",
  // Lokale middleware voor dit pad
  (req, res, next) => {
    console.log("Test middleware - pad level");
    next();
  },
  (req, res) => {
    res.sendStatus(204);
  }
);

router.get("/:id", (req, res) => {
  // Parameters uit de URL uithalen
  const { id } = req.params;

  res.json({ id: id });
  // res.send("Test");
});

// Wildcard met * -> Express v5
// router.all("*", (req, res) => {
//   res.status(404).send("Niet gevonden");
// });

// Exporteren van onze lokale module nl het router object
module.exports = router;

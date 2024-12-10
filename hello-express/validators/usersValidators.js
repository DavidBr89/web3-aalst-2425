const { body, param, query } = require("express-validator");

const UsersValidators = {
  idValidator: [param("id").isInt().withMessage("Geen correcte id meegegeven")],
  loginValidator: [
    body("email")
      .isString()
      .withMessage("Email is verplicht!")
      .isEmail()
      .withMessage("Geen geldig emailadres")
      .normalizeEmail(),
    body("password")
      .isString()
      .withMessage("Wachtwoord is verplicht")
      .exists()
      .withMessage("Wachtwoord moet ingevuld zijn"),
  ],
  registerValidator: [
    body("firstName").isString().trim(),
    body("lastName").isString().trim(),
    body("email")
      .isString()
      .isEmail()
      .withMessage("Geen geldig email adres")
      .normalizeEmail()
      .escape(),
    body("password")
      .isString()
      .isStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minSymbols: 1,
      })
      .withMessage(
        "Wachtwoord moet bestaan uit minstens 8 karakters, minstens 1 hoofdletter en 1 symbool"
      )
      .escape(),
  ],
};

module.exports = UsersValidators;

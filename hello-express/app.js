// DOTENV kunnen gebruiken
require("dotenv").config();

const express = require("express");
// const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
// Importeren van mijn productsRouter
const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");

// Middlewares importeer
const appMiddleware = require("./middlewares/application_middleware");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Deze lijn mag verwijderd worden
// app.use(express.static(path.join(__dirname, "public")));

// Application level middleware
// app.use();

app.use(appMiddleware);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.all("/*name", (req, res) => {
  res.status(404).send("App Fallback");
});

module.exports = app;

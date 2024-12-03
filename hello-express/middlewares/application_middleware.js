// Lokale module

const applicationMiddleware = (req, res, next) => {
  console.log("Request gedaan naar de server.");
  next();
  //   res.send("Middleware response");
};

module.exports = applicationMiddleware;

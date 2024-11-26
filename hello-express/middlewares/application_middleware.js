// Lokale module

(req, res, next) => {
  console.log("Request gedaan naar de server.");
  next();
  //   res.send("Middleware response");
};

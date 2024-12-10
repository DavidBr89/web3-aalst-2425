const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  // Heeft die request -> cookies
  const cookies = req.cookies;

  if (cookies) {
    const token = cookies?.web3;

    if (token) {
      const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);

      if (decodedPayload) {
        req.userId = decodedPayload.sub;
        next();
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
};

module.exports = authMiddleware;

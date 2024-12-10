const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { validationResult } = require("express-validator");

const UsersController = {
  getAll: async (req, res) => {
    try {
      const users = await prisma.user.findMany({
        // include: {
        //   profile: true,
        // },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          profile: {
            select: {
              id: true,
              bio: true,
            },
          },
        },
      });
      res.json(users);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("ok");
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const foundUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (foundUser) {
        const hashedPassword = foundUser.password;

        const result = await bcrypt.compare(password, hashedPassword);

        if (result) {
          // Gebruiker is ingelogd -> wachtwoord stem overeen dus token aanmaken

          const payload = {
            sub: foundUser.id,
            role: "STUDENT",
            iat: Date.now(),
          };
          const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "7d",
          });

          res.cookie("web3", jwtToken, {
            httpOnly: true,
            // HTTPS only cookie
            secure: false,
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });

          res.json({ ...foundUser, password: undefined });
        } else {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      res.sendStatus(500);
    }

    res.send("OK");

    // TODO: Validatie
  },
  register: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Dat mijn data gevalideerd is

    try {
      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
        },
      });

      res.status(201).json(newUser);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  verify: async (req, res) => {
    const { userId } = req;
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: +userId,
        },
      });
      res.json(user);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  logout: async (req, res) => {
    res.clearCookie("web3").sendStatus(200);
  },
};

module.exports = UsersController;

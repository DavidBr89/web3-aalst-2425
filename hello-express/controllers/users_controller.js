const prisma = require("../config/prisma");

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
};

module.exports = UsersController;

const prisma = require("../config/prisma");

const CategoriesController = {
  getAll: async (req, res) => {
    try {
      const categories = await prisma.category.findMany({
        include: {
          products: true,
        },
      });

      res.json(categories);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  create: async (req, res) => {
    try {
      const newCategory = req.body;
      // Dit moet gevalideerd worden
      await prisma.category.create({
        data: {
          name: newCategory.name,
        },
      });
      //   201 - Created
      res.sendStatus(201);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = CategoriesController;

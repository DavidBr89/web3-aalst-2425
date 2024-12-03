const prisma = require("../config/prisma");

// CRUD -> Create Read Update Destroy (Delete)
const ProductController = {
  getAll: async (req, res) => {
    try {
      const products = await prisma.product.findMany({
        include: {
          category: true,
          orderLines: true,
        },
      });
      res.json(products);
      // Alles al goed gaat -> Stuur dan een response met de producten als JSON
    } catch (error) {
      res.status(500).send(error);
      // res.sendStatus(500);
      // Als er iets fout gaat -> 500
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await prisma.product.findUnique({
        where: {
          id: Number.parseInt(id),
        },
      });

      res.json(product);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  create: async (req, res) => {
    try {
      const { name, price, categoryId } = req.body;

      await prisma.product.create({
        data: {
          name: name,
          price: price,
          category: {
            // connect: {
            //   id: categoryId,
            // },
            connectOrCreate: {
              where: {
                id: categoryId,
              },
              create: {
                name: "Nieuwe categorie",
              },
            },
          },
        },
      });

      res.sendStatus(201);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  remove: () => {},
};

module.exports = ProductController;

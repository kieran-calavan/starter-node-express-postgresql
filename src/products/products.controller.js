const productsService = require("./products.service")

function read(productId) {
  return knex("products").select("*").where({ product_id: productId }).first();
}

function list(req, res, next) {
  productsService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

function productExists(req, res, next) {
  productsService
    .read(req.params.productId)
    .then((product) => {
      if (product) {
        res.locals.product = product;
        return next();
      }
      next({ status: 404, message: `Product cannot be found.` });
    })
    .catch(next);
}

module.exports = {
  read: [read],
  list: [list],
};

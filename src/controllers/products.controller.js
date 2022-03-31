// const products = require('../models/Products');
const products = new (require('../models/daos/ProductDao.mongoose'))();

/**
 * The getProductByIdController function returns a product by id from the database.
 *
 *
 * @param req Used to Access the request object.
 * @param res Used to Send a response back to the client.
 * @return The product with the specified id.
 *
 * @doc-author Trelent
 */

// const getAllProductsController = (req, res) => {
//   res.send(200).json(products.getAll());
// };

const getProductByIdController = (req, res) => {
  if (req.params.id) {
    res.send(JSON.stringify(products.getItemById(parseInt(req.params.id))));
  } else {
    res.send(JSON.stringify(products.getAll()));
  }
};

/**
 * The addProductController function adds a new product to the database.
 *
 *
 * @param req Used to Access the request object that is sent to the server from a client's web browser.
 * @param res Used to Send a response back to the client.
 * @return A promise.
 *
 * @doc-author Trelent
 */
const addProductController = (req, res) => {
  let item = req.body;
  res.status(200).send(JSON.stringify(products.addItem(item)));
};

/**
 * The updateProductByIdController function updates a product in the database.
 *
 *
 * @param req Used to Pass in the request object that is being passed into the function.
 * @param res Used to Send a response back to the client.
 * @return The updated product.
 *
 * @doc-author Trelent
 */
const updateProductByIdController = (req, res) => {
  products.updateItemById(req.body, parseInt(req.params.id));
  res.send(`id: ${req.params.id} actualizado`);
};

/**
 * The deleteProductByIdController function deletes a product from the products table in the database.
 *
 *
 * @param req Used to Pass in the request object that is being passed through.
 * @param res Used to Send a response back to the client.
 * @return A response object.
 *
 * @doc-author Trelent
 */
const deleteProductByIdController = (req, res) => {
  products.deleteItemById(parseInt(req.params.id));
  res.send('Item eliminado');
};

module.exports = {
  getProductByIdController,
  addProductController,
  updateProductByIdController,
  deleteProductByIdController,
};

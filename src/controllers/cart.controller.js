const cart = require('../models/Cart');

/**
 * The createNewCartController function creates a new cart for the user.
 *
 *
 * @param req Used to Access the request object that is passed into the controller.
 * @param res Used to Send a response back to the client.
 * @return A json object with the following properties:.
 *
 * @doc-author Trelent
 */
const createNewCartController = (req, res) => {
  res.status(200).send(JSON.stringify(cart.createCart()));
};

/**
 * The deleteCartByIdController function deletes a cart from the database.
 *
 *
 * @param req Used to Get the request object that contains all of the information about a client’s request.
 * @param res Used to Send a response back to the client.
 * @return A promise.
 *
 * @doc-author Trelent
 */
const deleteCartByIdController = (req, res) => {
  carts.deleteCart(parseInt(req.params.id));

  res.status(200).send(JSON.stringify({ msg: 'success' }));
};

/**
 * The getProductsFromCartController function returns a list of products from the cart.
 *
 *
 * @param req Used to Get the data from the request.
 * @param res Used to Send a response to the client.
 * @return A status of 200 and an array of objects.
 *
 * @doc-author Trelent
 */
const getProductsFromCartController = (req, res) => {
  res
    .status(200)
    .send(JSON.stringify(carts.getProductByCartId(parseInt(req.params.id))));
};

/**
 * The addProductToCartController function adds a product to the cart.
 *
 *
 * @param req Used to Get the request object from the express framework.
 * @param res Used to Send a response back to the client.
 * @return A promise that resolves to the updated cart.
 *
 * @doc-author Trelent
 */
const addProductToCartController = (req, res) => {
  let item = req.body;
  carts.addProductToCart(parseInt(req.params.id), item);
  res.status(200).send(JSON.stringify({ msg: 'success' }));
};

/**
 * The deleteProductFromCartController function deletes a product from the cart.
 *
 *
 * @param req Used to Pass in the request object.
 * @param res Used to Send a response back to the client.
 * @return A message that the product was deleted from the cart.
 *
 * @doc-author Trelent
 */
const deleteProductFromCartController = (req, res) => {
  carts.deleteProductFromCart(
    parseInt(req.params.id),
    parseInt(req.params.id_prod)
  );
  res.status(200).send(JSON.stringify({ msg: 'success' }));
};

module.exports = {
  createNewCartController,
  deleteCartByIdController,
  getProductsFromCartController,
  addProductToCartController,
  deleteProductFromCartController,
};

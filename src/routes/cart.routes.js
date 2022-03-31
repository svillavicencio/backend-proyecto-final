const express = require('express');
const router = express.Router();

const {
  createNewCartController,
  deleteCartByIdController,
  getProductsFromCartController,
  addProductToCartController,
  deleteProductFromCartController,
} = require('../controllers/cart.controller');

router.get('/:id/products', getProductsFromCartController);

router.post('/', createNewCartController);
router.post('/:id/products', addProductToCartController);

router.delete('/:id', deleteCartByIdController);
router.delete('/:id/products/:id_prod', deleteProductFromCartController);

module.exports = router;

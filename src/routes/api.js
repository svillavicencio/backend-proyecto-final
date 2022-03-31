const express = require('express');

const products = require('./products.routes');
const cart = require('./cart.routes');

const api = express.Router();

api.use('/products', products);
api.use('/cart', cart);

api.use(function (req, res, next) {
  res.status(404);
  res.json({
    status: 404,
    title: 'Not Found',
    msg: 'Route not found',
  });
  next();
});

module.exports = api;

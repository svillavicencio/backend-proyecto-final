const ContainerDao = require('./ContainerDao.mongoose');

class CartDao extends ContainerDao {
  constructor() {
    super('../schemas/cart.schema.js');
  }
}

module.exports = CartDao;

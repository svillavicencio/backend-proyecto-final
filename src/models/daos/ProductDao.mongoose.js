const ContainerDao = require('./ContainerDao.mongoose');

class ProductDao extends ContainerDao {
  constructor() {
    super('../schemas/product.schema.js');
  }
}

module.exports = ProductDao;

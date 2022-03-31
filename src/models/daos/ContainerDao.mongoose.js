class ContainerDao {
  constructor(modelMongoose) {
    this.modelMongoose = require(modelMongoose);
  }

  async getById(id) {
    const result = await this.modelMongoose.findById({ _id: id });
    return result;
  }

  async getAll() {
    const result = await this.modelMongoose.find();
    return result;
  }

  async addItem(item) {
    const result = await this.modelMongoose.create(item);
    return result;
  }

  async deleteItem(id) {
    const result = await this.modelMongoose.remove({ _id: id });
    return result;
  }

  async updateItem(id, newItem) {
    const result = await this.modelMongoose.updateOne({ _id: id }, newItem);
    return result;
  }

  async getItemsFromItemId(id) {
    const result = await this.getById(id);
    return result.products;
  }

  async addItemToItemId(idCart, idProduct) {
    let cart = await this.getById(idCart);
    const product = await this.getById(idProduct);
    cart.products = [...cart.products, product];
    const result = await this.updateItem(idCart, cart);
    return result;
  }

  async deleteItemFromItemId(idCart, idProduct) {
    let cart = await this.getById(idCart);
    const index = cart.products.find((product, index) => {
      if (product._id === idProduct) {
        return index;
      }
    });
    cart.products.splice(index, 1);
    const result = await this.modelMongoose.updateItem(idCart, cart);

    return result;
  }
}

module.exports = ContainerDao;

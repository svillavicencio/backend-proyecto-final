class Cart {
  constructor() {
    this.carts = [];
  }

  static id = 1;

  createCart() {
    const cart = {
      id: Cart.id,
      products: [],
    };

    Cart.id++;

    this.carts.push(cart);

    return cart.id;
  }

  deleteCart(id) {
    this.carts.splice(this.getIndexCartById(id), 1);
    console.log(`Carrito eliminado ${id}`);
  }

  getProductByCartId(id) {
    console.log(this.carts[this.getIndexCartById(id)].products);
    return this.carts[this.getIndexCartById(id)].products;
  }

  addProductToCart(id, product) {
    this.carts[this.getIndexCartById(id)].products.push(product);
  }

  deleteProductFromCart(id, idProduct) {
    this.carts[this.getIndexCartById(id)].products.splice(
      this.getIndexProductFromCart(idProduct),
      1
    );
    console.log(`Producto eliminado ${idProduct} del carrito ${id}`);
  }

  getIndexProductFromCart(id, idProduct) {
    let indexProduct;

    this.carts[this.getIndexCartById(id)].products.forEach((product, index) => {
      if (product.id === idProduct) {
        indexProduct = index;
      }
    });

    return indexProduct;
  }

  getIndexCartById = function (id) {
    let indexFound = 0;

    this.carts.forEach((cart, index) => {
      if (cart.id === id) {
        indexFound = index;
      }
    });

    return indexFound;
  };
}

module.exports = new Cart();

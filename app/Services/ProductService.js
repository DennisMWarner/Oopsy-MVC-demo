import Product from "../Models/Product.js";

//Private
let _state = {
  products: []
};

//Public
export default class ProductService {
  get Products() {
    return _state.products.map(p => new Product(p));
  }
}

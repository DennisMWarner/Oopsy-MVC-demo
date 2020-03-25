import ProductService from "../Services/ProductService.js";

//Private
let _productService = new ProductService();
function _drawProducts() {
  let template = "";
  let products = _store.State.products;
}
//Public
export default class ProductController {
  constructor() {
    console.log(_productService.product);
  }
  create(event) {
    let formData = event.target;
    let newProductObject = {
      name: formData.name.value,
      price: formData.price.value,
      description: formData.description.value,
      imgUrl: formData.imgUrl.value
    };
    _productService.create(newProductObject);
    formData.reset();
    $("#add-product-modal").modal("toggle");
    _drawProducts();
  }
}

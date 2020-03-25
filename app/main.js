import ProductController from "./Controllers/ProductController.js";

class App {
  constructor() {
    productController: new ProductController();
  }
}

window["app"] = new App();

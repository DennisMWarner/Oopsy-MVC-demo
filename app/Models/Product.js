export default class Product {
  constructor(data) {
    this.name = data.name;
    this.price = data.price;
    this.productImageURL = data.productImageURL;
    this.description = data.description;
  }

  get Template() {
    return this.name;
  }
}

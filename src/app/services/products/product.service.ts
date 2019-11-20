import { Injectable } from "@angular/core";
const products = require("./products.json");
@Injectable({
  providedIn: "root" // khai báo nơi chạy service
})
export class ProductService {
  constructor() {}

  getProducts() {
    return products.data;
  }
}

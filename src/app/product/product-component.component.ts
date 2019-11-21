import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProductService } from "../services/products/product.service";

@Component({
  selector: "app-product-component",
  templateUrl: "./product-component.component.html"
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) {} // khai báo private service để get data từ service api hoặc json
  // @Input() childProducts: string; // Nhận biến từ parent
  @Input() inCartTotal: number;
  @Output() pushProduct = new EventEmitter(); // Đẩy biến lên parent
  products; // biến any
  onChangeQuantity(productId: number, inputElement: HTMLInputElement) {
    // let price = 0;
    let product = this.products.find(product => product.id === productId);
    let inputQuantity = parseInt(inputElement.value); // get quantity from user input
    if (product) {
      product.quantity = inputQuantity || 0;
      let foundIndex = this.products.findIndex(
        product => product.id == productId
      );
      this.products[foundIndex] = product;
      this.commitProduct(this.products);
    }
  }
  onRemoveProduct(productId: number) {
    let foundIndex = this.products.findIndex(
      product => product.id == productId
    );
    if (foundIndex > -1) {
      this.products.splice(foundIndex, 1);
      this.commitProduct(this.products);
    }
  }
  commitProduct(product) {
    this.pushProduct.emit(product);
  }

  ngOnInit() {
    this.products = this.productService.getProducts(); // get Parent data qua services
    this.commitProduct(this.productService.getProducts());
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProductService } from "../services/products/product.service";

@Component({
  selector: "app-product-component",
  templateUrl: "./product-component.component.html"
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) {} // khai báo private service để get data từ service api hoặc json
  @Input() childProducts: string; // Nhận biến từ parent
  @Output() pushProduct = new EventEmitter(); // Đẩy biến lên parent
  // quantity: Number;
  products; // biến any
  onButtonClick() {
    // this.pushProduct.emit(this.products);
  }
  onChangeQuantity(productId: Number, inputElement: HTMLInputElement) {
    let product = this.products.find(product => product.id === productId);
    if (product) {
      product.quantity = parseInt(inputElement.value) || 0;
    }
    this.totalCart();
  }
  totalCart() {
    let total = 0;
    total = this.products.reduce((quantity, product, index, products) => {
      return (quantity += product.quantity);
    }, 0);
    // console.log(total);
    this.pushProduct.emit(total);
  }

  ngOnInit() {
    this.products = this.productService.getProducts(); // get Parent data qua services
  }
}

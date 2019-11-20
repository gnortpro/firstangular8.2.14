import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProductService } from "../services/products/product.service";

@Component({
  selector: "app-product-component",
  templateUrl: "./product-component.component.html"
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) {} // khai báo private service để get data từ service api hoặc json
  @Input() childProducts: string; // Nhận biến từ parent
  @Output() pushQuantity = new EventEmitter(); // Đẩy biến lên parent
  @Output() pushPrice = new EventEmitter(); // Đẩy biến lên parent
  // quantity: Number;
  products; // biến any
  onChangeQuantity(productId: Number, inputElement: HTMLInputElement) {
    let price = 0;
    let product = this.products.find(product => product.id === productId);
    let inputQuantity = parseInt(inputElement.value); // get quantity from user input
    if (product) {
      product.quantity = inputQuantity || 0;
      price = product.quantity * product.price;
      this.totalPrice(price);
    }
    this.totalCart();
  }
  totalCart() {
    let total = 0;
    total = this.products.reduce((quantity, product) => {
      return (quantity += product.quantity);
    }, 0);
    // console.log(total);
    this.pushQuantity.emit(total);
  }
  totalPrice(price) {
    console.log(price);
    this.pushPrice.emit(price);
  }

  ngOnInit() {
    this.products = this.productService.getProducts(); // get Parent data qua services
  }
}

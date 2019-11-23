import { Component } from "@angular/core";
@Component({
  selector: "app-root", // selector của component
  templateUrl: "./app.component.html", // link html file của component
  styleUrls: ["./app.component.css"] // link css file của component
}) // đánh dấu cho angular biết là 1 component. nếu ko có sẽ là class bình thường
export class AppComponent {
  title = "shoppping-cart";
  inCart: 0;
  totalPrice;
  totalTax;
  totalPriceTax;
  promoPrice: number;
  roundNum(num) {
    let n = parseFloat(num);
    num = Math.round(n * 1000) / 1000;
    return num;
  }
  pushProductParent(products) {
    let prices = [];
    let taxs = [];
    this.inCart = products.reduce((p, product) => {
      return (p += product.quantity);
    }, 0);
    products.forEach(product => {
      let price_product = product.price * product.quantity;
      prices.push(price_product);
      let tax_product = product.tax * product.quantity;
      taxs.push(tax_product);
    });
    this.totalPrice = this.roundNum(prices.reduce((a, b) => a + b, 0));
    this.totalTax = this.roundNum(taxs.reduce((a, b) => a + b, 0));
    this.totalPriceTax = this.roundNum(this.totalPrice + this.totalTax);
  }
  pushPromoPriceParent(promoPrice) {
    if (promoPrice > 0) {
      this.totalPriceTax = this.roundNum(this.totalPriceTax - promoPrice);
    }
  }
}

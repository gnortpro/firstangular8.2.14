import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-checkout-component",
  templateUrl: "./checkout-component.component.html"
})
export class CheckoutComponent implements OnInit {
  @Input() totalPrice: Number;
  @Input() totalTax: Number;
  @Input() totalPriceTax: Number;
  @Input() promoPrice: Number;
  @Output() pushPromoPrice = new EventEmitter();
  constructor() {}
  onPromoButton(promoCodeElement: HTMLInputElement, totalPrice) {
    let code = promoCodeElement.value;
    if (code === "1") {
      let promoPrice = (totalPrice * 20) / 100;
      this.pushPromoPrice.emit(promoPrice);
    }
  }
  onCheckoutButton() {
    alert("Buy successfully!");
  }
  ngOnInit() {}
}

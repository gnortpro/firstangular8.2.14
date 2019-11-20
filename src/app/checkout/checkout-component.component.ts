import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-checkout-component",
  templateUrl: "./checkout-component.component.html"
})
export class CheckoutComponent implements OnInit {
  @Input() totalPrice: Number;
  constructor() {}

  ngOnInit() {}
}

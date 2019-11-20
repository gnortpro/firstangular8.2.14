import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms"; // xử lý form

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header-component.component";
import { FooterComponent } from "./footer/footer-component.component";
import { ProductComponent } from "./product/product-component.component";
import { CheckoutComponent } from "./checkout/checkout-component.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    CheckoutComponent
  ], // Nơi khai báo component
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, CommonModule], // khai báo lib
  providers: [],
  bootstrap: [AppComponent] // khai báo Root component
})
export class AppModule {
  constructor() {}
}

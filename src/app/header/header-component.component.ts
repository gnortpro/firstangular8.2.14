import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-header-component",
  templateUrl: "./header-component.component.html"
})
export class HeaderComponent implements OnInit {
  @Input() inCartTotal: Number;

  constructor() {}

  ngOnInit() {}
}

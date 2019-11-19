import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html'
})
export class HeaderComponentComponent implements OnInit {
  numberProducts = 30;
  constructor() {}

  ngOnInit() {}
}

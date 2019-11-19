import {Component} from '@angular/core';

@Component({
  selector: 'app-root', // selector của component
  templateUrl: './app.component.html', // link html file của component
  styleUrls: ['./app.component.css'] // link css file của component
}) // đánh dấu cho angular biết là 1 component. nếu ko có sẽ là class bình thường
export class AppComponent {
  title = 'shoppping-cart';
}

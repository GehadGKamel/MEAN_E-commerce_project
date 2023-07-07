import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css'],
})
export class ProductsContainerComponent {
  @Input() productList: any = [];
}

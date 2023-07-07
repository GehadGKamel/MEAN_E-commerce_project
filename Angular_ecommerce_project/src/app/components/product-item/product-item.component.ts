import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() productItem: any = {};
  constructor(public productService: ProductService) {}

  counter() {
    this.productService.count++;
    console.log(this.productService.count);
  }
}

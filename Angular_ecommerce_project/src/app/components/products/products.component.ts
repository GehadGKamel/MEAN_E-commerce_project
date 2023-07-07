import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-users',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response;
    });
  }

  removeUser(pId: number) {
    this.productService.deleteProduct(pId).subscribe((response) => {
      this.products = this.products.filter(
        (product: any) => product._id != pId
      );
    });
  }
}

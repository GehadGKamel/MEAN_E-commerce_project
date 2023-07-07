import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  productId: any;
  products: any;
  btnClicked: any;
  constructor(
    private router: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.productId = this.activatedRoute.snapshot.params['id'];
  }

  productForm = new FormGroup({
    product_id: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9]+$/),
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9\s]+$/),
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+(\.\d{2})?$/),
    ]),
    image_url: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(http:\/\/(www\.)?|https:\/\/(www\.)?|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
      ),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9\s]+$/),
    ]),
  });

  get getPId() {
    return this.productForm.controls['product_id'];
  }
  get getPName() {
    return this.productForm.controls['name'];
  }
  get getPPrice() {
    return this.productForm.controls['price'];
  }
  get getPImgUrl() {
    return this.productForm.controls['image_url'];
  }
  get getPDesc() {
    return this.productForm.controls['description'];
  }

  submit(e: any) {
    this.btnClicked = true;
    if (this.productForm.status == 'VALID') {
      if (this.productId) {
        this.productService
          .editProduct(this.productId, this.productForm.value)
          .subscribe((response) => {});
      } else {
        this.productService
          .addProduct(this.productForm.value)
          .subscribe((response) => {});
        }
        this.router.navigate(['/dashboard']);
    }
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response;
    });
  }
}

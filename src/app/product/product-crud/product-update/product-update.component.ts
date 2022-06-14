import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  products = [];
  productId;

  constructor(
    private productService: ProductService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  // productForm = new FormGroup({
  //   // id: new FormControl(''),
  //   model: new FormControl(''),
  //   price: new FormControl(''),
  //   quantity: new FormControl(''),
  //   imgPath: new FormControl(''),
  //   processor: new FormControl(''),
  //   memory: new FormControl(''),
  //   storage: new FormControl(''),
  //   graphics: new FormControl(''),
  // });

  ngOnInit(): void {
    this.products = this.productService.getProducts();

    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = Number(params.get('id'));
    });

    this.productService.productsListChanged.subscribe(() => {
      this.products = this.productService.getProducts();
    });
  }

  // initialData(product) {
  //   this.productForm.get('model').setValue(product.model);
  //   this.productForm.get('price').setValue(product.price);
  //   this.productForm.get('quantity').setValue(product.quantity);
  //   this.productForm.get('imgPath').setValue(product.imgPath);
  //   this.productForm.get('processor').setValue(product.processor);
  //   this.productForm.get('memory').setValue(product.memory);
  //   this.productForm.get('storage').setValue(product.storage);
  //   this.productForm.get('graphics').setValue(product.graphics);
  // }

  onSubmit(form: NgForm) {
    const updatedProduct = {
      id: this.productId,
      model: form.value.model,
      price: form.value.price,
      quantity: form.value.quantity,
    };

    this.productService.updateProduct(updatedProduct);

    this.route.navigate(['/product-list']);
  }
}

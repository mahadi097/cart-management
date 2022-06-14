import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);

    const productItemNew = {
      id: Number(form.value.id),
      imgPath: String(form.value.imgPath),
      model: form.value.model,
      price: Number(form.value.price),
      priceDisplay: Number(form.value.price).toLocaleString() + '৳',
      detail: {
        processor: form.value.processor,
        memory: form.value.memory,
        storage: form.value.storage,
        graphics: form.value.graphics,
      },
      quantity: Number(form.value.quantity),
      quantityInitial: Number(form.value.quantity),
    };

    // console.log(productItemNew);

    this.productService.addNewProduct(productItemNew);

    this.router.navigate(['//product-list']);
  }
}

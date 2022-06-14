import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css'],
})
export class ProductCrudComponent implements OnInit {
  products = new MatTableDataSource<any>();
  // products;

  displayedColumns: string[] = [
    'model',
    'priceDisplay',
    'quantity',
    'edit',
    'delete',
  ];

  constructor(private productService: ProductService, private route: Router) {}

  ngOnInit(): void {
    this.products.data = this.productService.getProducts();

    this.productService.productsListChanged.subscribe(() => {
      this.products.data = this.productService.getProducts();
    });
  }

  addProduct() {
    this.route.navigate(['./add-product']);
  }

  editProduct(id) {
    this.route.navigate(['/edit-product/' + id]);
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id);
  }
}

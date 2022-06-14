import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  cartProducts = [];

  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.cartProducts;
    this.subscribEvents();
    // console.log(this.cartProducts.length);
  }

  goToDashboard() {
    this.route.navigate(['/dashboard']);
  }

  subscribEvents() {
    this.cartService.cartProductsUpdated.subscribe(() => {
      this.cartProducts = this.cartService.cartProducts;
      console.log('updated', this.cartProducts.length);
      console.log(this.cartService.cartProducts.length);
    });
  }
}

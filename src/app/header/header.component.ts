import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalCart = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.totalCart = this.cartService.totalCart;

    this.cartService.totalCartChanged.subscribe((totalCartNow) => {
      this.cartService.totalCart = totalCartNow;
      this.totalCart = this.cartService.totalCart;
    });
  }
}

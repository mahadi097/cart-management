import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCartService() {
    if (this.product.quantity === 0) return;

    const totalCartNow = this.cartService.totalCart + 1;
    this.cartService.totalCartChanged.emit(totalCartNow);

    const totalPriceNow = this.cartService.totalPrice + this.product.price;
    this.cartService.totalPriceChanged.emit(totalPriceNow);

    this.product.quantity--;
    this.cartService.addProductToCart(this.product);
  }

  decreaseCartItem() {
    const totalCartNow = this.cartService.totalCart - 1;
    this.cartService.totalCartChanged.emit(totalCartNow);

    const totalPriceNow = this.cartService.totalPrice - this.product.price;
    this.cartService.totalPriceChanged.emit(totalPriceNow);

    this.product.quantity++;

    this.cartService.decreaseCartItem(this.product.id);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartProduct;
  products = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  increaseCartItem() {
    let available = true;
    let productId;

    this.products.forEach((product, index) => {
      if (product.id === this.cartProduct.id) {
        productId = index;
        if (product.quantity === 0) available = false;
      }
    });

    if (!available) return;

    const totalCartNow = this.cartService.totalCart + 1;
    this.cartService.totalCartChanged.emit(totalCartNow);

    const totalPriceNow = this.cartService.totalPrice + this.cartProduct.price;
    this.cartService.totalPriceChanged.emit(totalPriceNow);

    this.products[productId].quantity--;
    // this.cartProduct.cartQuantity++;

    this.cartService.addProductToCart(this.cartProduct);
  }

  decreaseCartItem() {
    let productId;

    this.products.forEach((product, index) => {
      if (product.id === this.cartProduct.id) {
        productId = index;
      }
    });

    const totalCartNow = this.cartService.totalCart - 1;
    this.cartService.totalCartChanged.emit(totalCartNow);

    const totalPriceNow = this.cartService.totalPrice - this.cartProduct.price;
    this.cartService.totalPriceChanged.emit(totalPriceNow);

    this.products[productId].quantity++;
    // this.cartProduct.cartQuantity--;

    this.cartService.decreaseCartItem(this.cartProduct.id);
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-dropdown-menu',
  templateUrl: './cart-dropdown-menu.component.html',
  styleUrls: ['./cart-dropdown-menu.component.css'],
})
export class CartDropdownMenuComponent implements OnInit {
  cartProducts = [];
  totalCart = 0;
  totalPrice = 0;
  totalPriceItem;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.cartProducts;
    this.totalCart = this.cartService.totalCart;
    this.totalPrice = this.cartService.totalPrice;

    this.cartService.totalCartChanged.subscribe((totalCartNow) => {
      this.cartService.totalCart = totalCartNow;
      this.totalCart = this.cartService.totalCart;
    });

    this.cartService.totalPriceChanged.subscribe((totalPriceNow) => {
      this.cartService.totalPrice = totalPriceNow;
      this.totalPrice = this.cartService.totalPrice;
    });

    this.cartService.cartProductsChanged.subscribe((cartProductsNow) => {
      this.cartService.cartProducts = cartProductsNow;
      this.cartProducts = this.cartService.cartProducts;
    });
  }

  increaseCartItem(cartProduct) {
    const decreased = this.productService.DecreaseProductQuantity(
      cartProduct.id
    );

    if (decreased) {
      this.totalCart = this.cartService.changeTotalCart(1);
      this.cartService.totalCartChanged.emit(this.totalCart);

      this.totalPrice = this.cartService.changeTotalPrice(cartProduct.price);
      this.cartService.totalPriceChanged.emit(this.totalPrice);

      cartProduct.cartQuantity++;
    }
  }

  decreaseCartItem(cartProduct, i) {
    const increased = this.productService.IncreaseProductQuantity(
      cartProduct.id
    );

    if (increased) {
      this.totalCart = this.cartService.changeTotalCart(-1);
      this.cartService.totalCartChanged.emit(this.totalCart);

      this.totalPrice = this.cartService.changeTotalPrice(-cartProduct.price);
      this.cartService.totalPriceChanged.emit(this.totalPrice);

      cartProduct.cartQuantity--;

      if (cartProduct.cartQuantity === 0) {
        this.cartProducts.splice(i, 1);
      }
    }
  }
}

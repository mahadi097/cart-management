import { EventEmitter } from '@angular/core';

export class CartService {
  totalCart = 0;
  totalPrice = 0;
  cartProducts = [];
  totalCartChanged = new EventEmitter<number>();
  totalPriceChanged = new EventEmitter<number>();
  cartProductsChanged = new EventEmitter<any>();
  cartProductsUpdated = new EventEmitter<any>();

  // getCarts() {
  //   return this.cartProducts.slice();
  // }

  addProductToCart(product) {
    let alreadyInCart = false;
    console.log(product, this.cartProducts);

    this.cartProducts.forEach((cartProduct) => {
      if (cartProduct.id === product.id) {
        alreadyInCart = true;

        cartProduct.cartQuantity++;
      }
    });

    if (alreadyInCart) return;

    const productCopy = { ...product, cartQuantity: 1 };
    this.cartProducts.push(productCopy);

    this.cartProductsUpdated.emit();
  }

  changeTotalCart(num) {
    this.totalCart += num;

    return this.totalCart;
  }

  changeTotalPrice(price) {
    this.totalPrice += price;

    return this.totalPrice;
  }

  decreaseCartItem(id) {
    let indexToRemove = -1;

    this.cartProducts.forEach((cartProduct, index) => {
      if (cartProduct.id === id) {
        cartProduct.cartQuantity--;
        if (cartProduct.cartQuantity === 0) {
          indexToRemove = index;
        }
      }
    });

    if (indexToRemove !== -1) {
      this.cartProducts.splice(indexToRemove, 1);
      this.cartProductsChanged.emit(this.cartProducts);
    }

    this.cartProductsUpdated.emit();
  }
}

import { Injectable } from '@angular/core';
import { CartProduct } from '../components/cart/cart-product.modelo';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartProduct[] = [];

  constructor() {}

  getCart() {
    return this.cart;
  }

  addCartProduct(producto: CartProduct) {
    this.cart.push(producto);
  }

  deleteProductCart(producto: CartProduct) {
    let productoAEliminar = this.cart.findIndex(
      (p) => p.idProducto === producto.idProducto
    );

    this.cart.splice(productoAEliminar, 1);
  }

  clearCart() {
    this.cart = [];
  }
}

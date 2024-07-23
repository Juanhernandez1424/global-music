import { Component } from '@angular/core';
import { CartProduct } from './cart-product.modelo';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private cartService: CartService, private router: Router) {}

  get cart() {
    return this.cartService.getCart();
  }

  eliminarProducto(product: CartProduct) {
    return this.cartService.deleteProductCart(product);
  }

  goToCheckout() {
    if (this.cart.length > 0) {
      this.router.navigate(['/checkout']);
    } else {
      alert('No hay productos en el carrito');
    }
  }
}

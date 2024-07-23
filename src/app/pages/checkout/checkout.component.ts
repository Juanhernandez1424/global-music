import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { CartProduct } from '../../components/cart/cart-product.modelo';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  cart: CartProduct[] = [];
  subtotal: number = 0;
  iva: number = 0;
  total: number = 0;

  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.calcularTotal();
  }

  calcularTotal() {
    this.subtotal = this.cart.reduce(
      (acumulado, product) => acumulado + product.precio,
      0
    );
    this.iva = this.subtotal * 0.19;
    this.total = this.subtotal + this.iva;
  }

  goToPay() {
    this.route.navigate(['/pay']);
  }

  @ViewChild('summaryProducts', { static: true }) summaryProducts!: ElementRef;

  habilitarScroll() {
    if (this.summaryProducts.nativeElement.children.length > 3) {
      this.summaryProducts.nativeElement.style.overflowY = 'scroll';
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ShopComponent } from '../shop/shop.component';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartProduct } from '../../components/cart/cart-product.modelo';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  @Input() carta: any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const index = +id;
      if (index >= 0 && index < ShopComponent.cartasData.length) {
        this.carta = ShopComponent.cartasData[index];
      } else {
        this.carta = null;
      }
    } else {
      this.carta = null;
    }
  }

  addCart() {
    let product = new CartProduct(
      this.carta.idProducto,
      this.carta.imagen,
      this.carta.nombre,
      this.carta.marca,
      this.carta.modelo,
      this.carta.color,
      this.carta.precio
    );

    this.cartService.addCartProduct(product);
  }
}

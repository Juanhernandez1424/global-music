import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ShopComponent } from '../../pages/shop/shop.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  @ViewChild('cartShop') cartShop!: ElementRef;

  viewCartShop() {
    this.cartShop.nativeElement.classList.toggle('active');
  }

  cartasData = ShopComponent.cartasData;
  filterInstrument: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    this.filterInstrument = ShopComponent.cartasData;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const tipoInstrumento = params['tipoInstrumento'];
      this.filtrarInstrumentos(tipoInstrumento);
    });
  }

  filtroTipoInstrumento(instrumento: string) {
    this.router.navigate(['/shop', { tipoInstrumento: instrumento }]);
  }

  filtrarInstrumentos(instrumento: string) {
    if (instrumento == 'all') {
      this.filterInstrument == this.filterInstrument;
    } else {
      this.filterInstrument = this.cartasData.filter(
        (inst) => inst.instrumento === instrumento
      );
    }
  }

  get cart() {
    return this.cartService.getCart();
  }
}

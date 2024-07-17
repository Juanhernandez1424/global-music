import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartas-shop',
  templateUrl: './cartas-shop.component.html',
  styleUrl: './cartas-shop.component.css',
})
export class CartasShopComponent {
  @Input() carta: any;
}

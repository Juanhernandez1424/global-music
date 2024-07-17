import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild('cartShop') cartShop!: ElementRef;

  viewCartShop() {
    this.cartShop.nativeElement.classList.toggle('active');
  }
}

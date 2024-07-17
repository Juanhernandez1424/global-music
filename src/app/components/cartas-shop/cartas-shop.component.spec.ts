import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasShopComponent } from './cartas-shop.component';

describe('CartasShopComponent', () => {
  let component: CartasShopComponent;
  let fixture: ComponentFixture<CartasShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartasShopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartasShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

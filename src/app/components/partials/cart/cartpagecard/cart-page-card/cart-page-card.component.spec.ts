import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageCardComponent } from './cart-page-card.component';

describe('CartPageCardComponent', () => {
  let component: CartPageCardComponent;
  let fixture: ComponentFixture<CartPageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartPageCardComponent]
    });
    fixture = TestBed.createComponent(CartPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

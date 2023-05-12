import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartmodalcardComponent } from './cartmodalcard.component';

describe('CartmodalcardComponent', () => {
  let component: CartmodalcardComponent;
  let fixture: ComponentFixture<CartmodalcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartmodalcardComponent]
    });
    fixture = TestBed.createComponent(CartmodalcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

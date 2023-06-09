import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { CartProduct } from 'src/app/types';
import { trigger, transition, style, animate } from '@angular/animations';
import { faArrowLeft, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  animations: [
    trigger('checkoutAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.3s ease-out', style({ opacity: 1, transform: 'none' })),
      ]),
      transition(':leave', [
        animate(
          '0.3s ease-out',
          style({ opacity: 0, transform: 'translateY(20px)' })
        ),
      ]),
      transition('false => true', [
        style('*'),
        animate('0.3s ease-out', style('*')),
      ]),
    ]),
  ],
})
export class CheckoutComponent {
  date = new Date();
  cart: CartProduct[] = [];
  total = 0;
  totalQuantity = 0;

  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.productsService.getCart$().subscribe((cart) => {
      this.cart = cart;
    });
    this.productsService.getTotalPrices().subscribe((total) => {
      this.total = total;
    });
    this.productsService.getTotalCartQuantity$().subscribe((total) => {
      this.totalQuantity = total;
    });
  }

  faArrowLeft = faArrowLeft;
  faShoppingBag = faShoppingBag;
}

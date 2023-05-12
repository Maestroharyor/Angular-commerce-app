import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { CartProduct } from 'src/app/types';
import { trigger, transition, style, animate } from '@angular/animations';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { PaystackOptions } from 'angular4-paystack';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [
    trigger('cartAnimation', [
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
export class CartComponent {
  cart: CartProduct[] = [];
  total = 0;
  totalQuantity = 0;
  title = '';
  options: PaystackOptions = {
    amount: 50000,
    email: 'user@mail.com',
    ref: `${Math.ceil(Math.random() * 10e10)}`,
  };

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    this.router.navigate(['/checkout']);
  }

  paymentCancel() {
    console.log('payment failed');
  }

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
}

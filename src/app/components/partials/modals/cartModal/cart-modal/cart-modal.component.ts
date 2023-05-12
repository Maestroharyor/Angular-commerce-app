import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProductsService } from 'src/app/services/products/products.service';
import { CartProduct } from 'src/app/types';
import { Router } from '@angular/router';
import { PaystackOptions } from 'angular4-paystack';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
  animations: [
    trigger('cartModalAnimation', [
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
export class CartModalComponent {
  @Input() showCartModal: boolean = false;
  @Input() toggleModal: () => void = () => {};

  cart: CartProduct[] = [];
  total = 0;
  title = '';
  options: PaystackOptions = {
    amount: this.total * 100 || 500000,
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
    this.showCartModal = false;
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
  }
}

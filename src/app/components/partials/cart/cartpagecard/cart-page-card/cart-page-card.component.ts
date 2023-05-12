import { Component, Input } from '@angular/core';
import { staticProduct } from 'src/app/data';
import { ProductsService } from 'src/app/services/products/products.service';
import { CartProduct } from 'src/app/types';

@Component({
  selector: 'app-cart-page-card',
  templateUrl: './cart-page-card.component.html',
  styleUrls: ['./cart-page-card.component.scss'],
})
export class CartPageCardComponent {
  @Input() product: CartProduct = { ...staticProduct, quantity: 1 };
  @Input() showEditButton = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {}

  addItemToCart(product: CartProduct) {
    this.productsService.addToCart(product);
  }
  removeItemFromCart(product: CartProduct) {
    this.productsService.removeFromCart(product);
  }
}

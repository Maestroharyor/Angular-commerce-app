import { Component, Input } from '@angular/core';
import { staticProduct } from 'src/app/data';
import { ProductsService } from 'src/app/services/products/products.service';
import { CartProduct } from 'src/app/types';

@Component({
  selector: 'app-cartmodalcard',
  templateUrl: './cartmodalcard.component.html',
  styleUrls: ['./cartmodalcard.component.scss'],
})
export class CartmodalcardComponent {
  @Input() product: CartProduct = { ...staticProduct, quantity: 1 };

  constructor(private productsService: ProductsService) {}

  ngOnInit() {}

  addItemToCart(product: CartProduct) {
    this.productsService.addToCart(product);
  }
  removeItemFromCart(product: CartProduct) {
    this.productsService.removeFromCart(product);
  }
}

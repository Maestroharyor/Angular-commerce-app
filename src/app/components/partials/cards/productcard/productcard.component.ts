import { Component, Input } from '@angular/core';
import { staticProduct } from 'src/app/data';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/app/types';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss'],
})
export class ProductcardComponent {
  @Input() product: Product = staticProduct;

  constructor(private productsService: ProductsService) {}

  addItemToCart(product: Product) {
    this.productsService.addToCart(product);
  }
}

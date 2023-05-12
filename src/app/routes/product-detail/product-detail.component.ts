import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { staticProduct } from 'src/app/data';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/app/types';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  animations: [
    trigger('productDetailAnimation', [
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
export class ProductDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  product: Product = staticProduct;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.product = this.productsService.getAProduct(id);
    });
  }
  addItemToCart(product: Product) {
    this.productsService.addToCart(product);
  }

  faArrowLeft = faArrowLeft;
}

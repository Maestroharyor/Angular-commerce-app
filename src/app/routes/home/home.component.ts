import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { Category, Product } from 'src/app/types';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('productAnimation', [
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
export class HomeComponent {
  products: Product[] = [];
  selectedCategory: Category = { name: 'all', selected: true };
  constructor(
    private productsService: ProductsService,
    private categorysService: CategoriesService
  ) {}

  ngOnInit() {
    this.products = this.productsService.getProducts(
      this.selectedCategory.name
    );
    this.categorysService.getSelectedCategory$().subscribe((category) => {
      this.selectedCategory = category;
      this.products = this.productsService.getProducts(
        this.selectedCategory.name
      );
    });
  }

  getProductCategoryTitle(category: string): string {
    if (category === 'all') {
      return 'Showing all products';
    } else if (
      category === 'women' ||
      category === 'men' ||
      category === 'kids'
    ) {
      return `Showing ${category} products`;
    } else {
      return '';
    }
  }
}

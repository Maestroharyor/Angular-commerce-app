import { Component, EventEmitter, Output } from '@angular/core';
import {
  faCartShopping,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { CartProduct, Category, Product } from 'src/app/types';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent {
  currency: string = 'USD';
  currencies: string[] = ['USD', 'EUR', 'JPY'];

  changeCurrency(event: Event) {
    this.currency = (event.target as HTMLSelectElement).value;
  }

  showCartModal: boolean = false;

  toggleModal() {
    this.showCartModal = !this.showCartModal;
  }

  cart: CartProduct[] = [];
  categories: Category[] = [];
  constructor(
    private productsService: ProductsService,
    private categoryService: CategoriesService
  ) {}

  ngOnInit() {
    this.categoryService.getCategories$().subscribe((categories) => {
      this.categories = categories;
    });
    this.productsService.getCart$().subscribe((cart) => {
      this.cart = cart;
      // console.log(this.cart);
    });
  }

  selectCategory(category: Category) {
    this.categoryService.selectCategory(category);
  }

  faCartShopping = faCartShopping;
  faDollarSign = faDollarSign;
}

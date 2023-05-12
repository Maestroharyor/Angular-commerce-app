import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  faCartShopping,
  faDollarSign,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { CartProduct, Category } from 'src/app/types';
@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
})
export class MobileHeaderComponent {
  currency: string = 'USD';
  currencies: string[] = ['USD', 'EUR', 'JPY'];

  changeCurrency(event: Event) {
    this.currency = (event.target as HTMLSelectElement).value;
  }

  showCartModal: boolean = false;

  showMobileMenu: boolean = false;

  toggleMobileModal() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  toggleModal() {
    this.showCartModal = !this.showCartModal;
  }

  cart: CartProduct[] = [];
  categories: Category[] = [];
  constructor(
    private productsService: ProductsService,
    private categoryService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryService.getCategories$().subscribe((categories) => {
      this.categories = categories;
    });
    this.productsService.getCart$().subscribe((cart) => {
      this.cart = cart;
    });
  }

  selectCategory(category: Category) {
    this.categoryService.selectCategory(category);
    this.showMobileMenu = false;
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    }
  }

  faCartShopping = faCartShopping;
  faDollarSign = faDollarSign;
  faBars = faBars;
  faTimes = faTimes;
}

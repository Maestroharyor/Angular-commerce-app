import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import {
  faCartShopping,
  faDollarSign,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
})
export class MobileHeaderComponent {
  @Output() selectedCategory = new EventEmitter<string>();
  categories: { name: string; selected: boolean }[] = [
    { name: 'Women', selected: true },
    { name: 'Men', selected: false },
    { name: 'Kids', selected: false },
  ];

  selectCategory(category: { name: string; selected: boolean }) {
    this.categories.forEach((c) => (c.selected = false));
    category.selected = true;
    this.selectedCategory.emit(category.name);
  }

  currency: string = 'USD';
  currencies: string[] = ['USD', 'EUR', 'JPY'];

  changeCurrency(event: Event) {
    this.currency = (event.target as HTMLSelectElement).value;
  }

  showMobileMenu: boolean = false;
  showCartModal: boolean = false;

  toggleMobileModal() {
    this.showMobileMenu = !this.showMobileMenu;
  }
  toggleModal() {
    this.showCartModal = !this.showCartModal;
  }

  faCartShopping = faCartShopping;
  faDollarSign = faDollarSign;
  faBars = faBars;
  faTimes = faTimes;
}

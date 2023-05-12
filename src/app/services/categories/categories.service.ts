import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categories = new BehaviorSubject<Category[]>([
    { name: 'all', selected: true },
    { name: 'women', selected: false },
    { name: 'men', selected: false },
    { name: 'kids', selected: false },
  ]);

  private selectedCategory = new BehaviorSubject<Category>(
    this.categories.value.filter((c) => c.selected)[0]
  );

  selectCategory(category: Category) {
    const updatedCategories = this.categories.value.map((c) =>
      c.name === category.name
        ? { ...c, selected: true }
        : { ...c, selected: false }
    );
    this.categories.next(updatedCategories);
    this.selectedCategory.next(category);
  }

  getCategories$() {
    return this.categories.asObservable();
  }

  getSelectedCategory$() {
    return this.selectedCategory.asObservable();
  }

  constructor() {}
}

import { Injectable } from '@angular/core';
import { CartProduct, Product } from '../../types';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      name: "Men's T-Shirt",
      summary: 'Classic cotton T-shirt for men',
      shortDescription:
        'This classic cotton T-shirt is perfect for everyday wear. It features a comfortable fit and is made from high-quality materials to ensure durability. Available in a variety of colors and sizes.',
      color: [
        { name: 'Black', hexcode: '#000000' },
        { name: 'Grey', hexcode: '#808080' },
        { name: 'Navy', hexcode: '#000080' },
      ],
      size: ['XS', 'S', 'M', 'L'],
      featuredImage: 'assets/images/mens-tshirt.png',
      images: [
        'assets/images/mens-tshirt.png',
        'assets/images/mens-tshirt.png',
        'assets/images/mens-tshirt.png',
      ],
      category: 'men',
    },
    {
      id: 2,
      name: "Women's Dress",
      summary: 'Stylish dress for women',
      shortDescription:
        'This stylish dress is perfect for any occasion. It features a flattering fit and is made from high-quality materials to ensure comfort and durability. Available in a variety of colors and sizes.',
      color: [
        { name: 'Red', hexcode: '#ff0000' },
        { name: 'Blue', hexcode: '#0000ff' },
        { name: 'Green', hexcode: '#008000' },
      ],
      size: ['XS', 'S', 'M', 'L'],
      featuredImage: 'assets/images/womens-dress.png',
      images: [
        'assets/images/womens-dress.png',
        'assets/images/womens-dress.png',
        'assets/images/womens-dress.png',
      ],
      category: 'women',
      outOfStock: true,
    },
    {
      id: 3,
      name: "Kid's Jacket",
      summary: 'Warm jacket for kids',
      shortDescription:
        'This warm jacket is perfect for keeping kids cozy during colder weather. It features a fun design and is made from high-quality materials to ensure warmth and durability. Available in a variety of colors and sizes.',
      color: [
        { name: 'Yellow', hexcode: '#ffff00' },
        { name: 'Purple', hexcode: '#800080' },
      ],
      size: ['XS', 'S', 'M', 'L'],
      featuredImage: 'assets/images/kids-jacket.png',
      images: [
        'assets/images/kids-jacket.png',
        'assets/images/kids-jacket.png',

        'assets/images/kids-jacket.png',
      ],
      category: 'kids',
    },
    {
      id: 4,
      name: "Men's Blue T-Shirt",
      summary: 'A classic blue t-shirt for men',
      shortDescription: 'Classic blue t-shirt for men',
      color: [
        { name: 'Blue', hexcode: '#0080ff' },
        { name: 'Black', hexcode: '#000000' },
      ],
      size: ['XS', 'S', 'M', 'L'],
      featuredImage: '/assets/images/mens-blue-tshirt.png',
      images: [
        '/assets/images/mens-blue-tshirt.png',
        '/assets/images/mens-blue-tshirt.png',
        '/assets/images/mens-blue-tshirt.png',
      ],
      category: 'men',
      outOfStock: true,
    },
    {
      id: 5,
      name: "Women's Red Dress",
      summary: 'A beautiful red dress for women',
      shortDescription: 'Beautiful red dress for women',
      color: [
        { name: 'Red', hexcode: '#ff0000' },
        { name: 'Pink', hexcode: '#ff69b4' },
      ],
      size: ['S', 'M', 'L'],
      featuredImage: '/assets/images/womens-red-dress.png',
      images: [
        '/assets/images/womens-red-dress.png',
        '/assets/images/womens-red-dress.png',
        '/assets/images/womens-red-dress.png',
      ],
      category: 'women',
    },
    {
      id: 6,
      name: "Kid's Green Shorts",
      summary: 'A cute pair of green shorts for kids',
      shortDescription: 'Cute green shorts for kids',
      color: [
        { name: 'Green', hexcode: '#00ff00' },
        { name: 'Yellow', hexcode: '#ffff00' },
        { name: 'Orange', hexcode: '#ffa500' },
      ],
      size: ['XS', 'S', 'M'],
      featuredImage: '/assets/images/kids-green-shorts.png',
      images: [
        '/assets/images/kids-green-shorts.png',
        '/assets/images/kids-green-shorts.png',
        '/assets/images/kids-green-shorts.png',
      ],
      category: 'kids',
    },
    {
      id: 7,
      name: "Women's T-Shirt",
      summary: 'A comfortable and stylish t-shirt for women',
      shortDescription: 'Soft and breathable fabric in a relaxed fit',
      color: [
        { name: 'Black', hexcode: '#000000' },
        { name: 'Pink', hexcode: '#FFC0CB' },
      ],
      size: ['XS', 'S', 'M', 'L'],
      featuredImage: '/assets/images/womens-tshirt.png',
      images: [
        '/assets/images/womens-tshirt.png',
        '/assets/images/womens-tshirt.png',
        '/assets/images/womens-tshirt.png',
      ],
      category: 'women',
    },
    {
      id: 8,
      name: "Men's Hoodie",
      summary: 'A warm and cozy hoodie for men',
      shortDescription: 'Thick and soft material with a classic fit',
      color: [
        { name: 'Navy', hexcode: '#000080' },
        { name: 'Gray', hexcode: '#808080' },
      ],
      size: ['XS', 'S', 'M', 'L'],
      featuredImage: '/assets/images/mens-hoodie.png',
      images: [
        '/assets/images/mens-hoodie.png',
        '/assets/images/mens-hoodie.png',
        '/assets/images/mens-hoodie.png',
      ],
      category: 'men',
    },
    {
      id: 9,
      name: "Winter's Kids's Jacket",
      summary: 'A colorful and playful jacket for kids',
      shortDescription: 'Lightweight and water-resistant with a fun design',
      color: [
        { name: 'Red', hexcode: '#FF0000' },
        { name: 'Yellow', hexcode: '#FFFF00' },
        { name: 'Blue', hexcode: '#0000FF' },
      ],
      size: ['XS', 'S', 'M', 'L'],
      featuredImage: '/assets/images/winters-kids-jacket.png',
      images: [
        '/assets/images/winters-kids-jacket.png',
        '/assets/images/winters-kids-jacket.png',
        '/assets/images/winters-kids-jacket.png',
      ],
      category: 'kids',
      outOfStock: true,
    },
  ];

  // cart: Product[] = [];
  private cart = new BehaviorSubject<CartProduct[]>([]);
  private totalQuantity = new BehaviorSubject<number>(0);

  addToCart(product: Product | CartProduct): void {
    const currentCart = this.cart.getValue();
    const existingItemIndex = currentCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = currentCart.map((item, index) => {
        if (index === existingItemIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      this.cart.next(updatedCart);
    } else {
      this.cart.next([...currentCart, { ...product, quantity: 1 }]);
    }

    const updatedCartQuantity = this.cart.getValue().reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
    this.totalQuantity.next(updatedCartQuantity);
  }

  removeFromCart(product: CartProduct): void {
    const currentCart = this.cart.getValue();
    const existingItemIndex = currentCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = currentCart
        .map((item, index) => {
          if (index === existingItemIndex) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null;
            }
          }
          return item;
        })
        .filter((item): item is CartProduct => item !== null);
      this.cart.next(updatedCart);
    }

    const updatedCartQuantity = this.cart.getValue().reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
    this.totalQuantity.next(updatedCartQuantity);
  }

  getTotalPrices(): Observable<number> {
    return this.cart.asObservable().pipe(
      map((cart) => {
        let total = 0;
        for (const item of cart) {
          total += 50 * item.quantity;
        }
        return total;
      })
    );
  }

  getTotalCartQuantity$() {
    return this.totalQuantity.asObservable();
  }
  getCart$() {
    return this.cart.asObservable();
  }

  getProducts(categoryName: string) {
    return this.products.filter((product) =>
      categoryName === 'all' ? true : product.category === categoryName
    );
  }

  getAProduct(id: number) {
    return this.products.filter((product) => product.id == id)[0];
  }
  constructor() {}
}

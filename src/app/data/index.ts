import { Product } from '../types';

export const staticProduct: Product = {
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
};

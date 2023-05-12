export interface Product {
  id: number;
  name: string;
  summary: string;
  shortDescription: string;
  color: { name: string; hexcode: string }[];
  size: string[];
  featuredImage: string;
  images: string[];
  category: 'men' | 'women' | 'kids';
  outOfStock?: boolean;
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface Category {
  name: string;
  selected: boolean;
}

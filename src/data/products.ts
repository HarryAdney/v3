export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Classic Leather Sofa',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80',
    category: 'Sofas',
    description: 'Timeless elegance meets comfort in this premium leather sofa'
  },
  {
    id: 2,
    name: 'Modern Dining Table',
    price: 899,
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80',
    category: 'Dining',
    description: 'Sleek design perfect for contemporary dining spaces'
  },
  {
    id: 3,
    name: 'Luxury Bed Frame',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80',
    category: 'Bedroom',
    description: 'Premium craftsmanship for ultimate comfort'
  },
  {
    id: 4,
    name: 'Ergonomic Office Chair',
    price: 599,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80',
    category: 'Office',
    description: 'Professional comfort for your workspace'
  }
];
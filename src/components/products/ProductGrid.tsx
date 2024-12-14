import React from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '../../data/products';

interface ProductGridProps {
  products: Product[];
  className?: string;
}

export function ProductGrid({ products, className = '' }: ProductGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${className}`}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
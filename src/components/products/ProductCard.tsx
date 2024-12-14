import React from 'react';
import { ProductPrice } from './ProductPrice';
import { ProductCategory } from './ProductCategory';
import { ProductImage } from './ProductImage';
import type { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <ProductImage src={product.image} alt={product.name} />
        <ProductCategory category={product.category} />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <ProductPrice price={product.price} className="text-gray-600 mb-4 block" />
        <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}
import React from 'react';
import { ProductGrid } from '../products/ProductGrid';
import { featuredProducts } from '../../data/products';

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
}
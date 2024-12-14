import React from 'react';
import { TestimonialGrid } from '../testimonials/TestimonialGrid';
import { testimonials } from '../../data/testimonials';

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience with Beautiful Furnishings.
          </p>
        </div>
        <TestimonialGrid testimonials={testimonials} />
      </div>
    </section>
  );
}
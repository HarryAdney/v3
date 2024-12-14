import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import type { Testimonial } from '../../data/testimonials';

interface TestimonialGridProps {
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialGrid({ testimonials, className = '' }: TestimonialGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {testimonials.map(testimonial => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}
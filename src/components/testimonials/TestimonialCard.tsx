import React from 'react';
import { StarRating } from './StarRating';
import type { Testimonial } from '../../data/testimonials';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 relative">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-200" />
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
          <StarRating rating={testimonial.rating} className="mt-1" />
        </div>
      </div>
      <p className="text-gray-700 italic">{testimonial.content}</p>
    </div>
  );
}
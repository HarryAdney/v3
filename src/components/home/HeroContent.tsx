import React from 'react';
import { Button } from '../ui/Button';

export function HeroContent() {
  return (
    <div className="relative h-full flex items-center justify-center text-center">
      <div className="max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Crafting Comfort for Your Home
        </h1>
        <p className="text-xl text-white mb-8">
          Discover our collection of handcrafted furniture, designed to bring elegance and comfort to your living space.
        </p>
        <Button href="/collections" variant="light">
          View Collections
        </Button>
      </div>
    </div>
  );
}
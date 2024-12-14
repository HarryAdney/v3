import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroBackground } from './HeroBackground';

export function Hero() {
  return (
    <div className="relative h-[600px]">
      <HeroBackground />
      <HeroContent />
    </div>
  );
}
import React from 'react';

export function HeroBackground() {
  return (
    <>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80")'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
    </>
  );
}
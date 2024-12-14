import React from 'react';

interface ProductCategoryProps {
  category: string;
}

export function ProductCategory({ category }: ProductCategoryProps) {
  return (
    <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm font-medium">
      {category}
    </div>
  );
}
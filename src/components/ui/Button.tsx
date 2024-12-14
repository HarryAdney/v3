import React from 'react';
import { Link } from '../layout/Link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'light' | 'dark' | 'primary';
  className?: string;
  onClick?: () => void;
}

const variants = {
  light: 'bg-white text-gray-900 hover:bg-gray-100',
  dark: 'bg-gray-900 text-white hover:bg-gray-800',
  primary: 'bg-blue-600 text-white hover:bg-blue-700'
} as const;

export function Button({ 
  children, 
  href, 
  variant = 'light',
  className = '',
  onClick 
}: ButtonProps) {
  const baseClasses = 'inline-block px-8 py-3 rounded-md font-semibold transition-colors';
  const variantClasses = variants[variant];
  const classes = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
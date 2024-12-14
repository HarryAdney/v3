import React, { useState } from 'react';
import { Menu, ShoppingCart, Search } from 'lucide-react';
import { Link } from './Link';
import { MobileMenu } from './MobileMenu';
import { STORE_INFO, NAVIGATION_LINKS } from '../../utils/constants';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 lg:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-4 lg:ml-0">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                {STORE_INFO.name}
              </Link>
            </div>
          </div>
          
          <nav className="hidden lg:flex lg:space-x-8">
            {NAVIGATION_LINKS.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} />
    </header>
  );
}
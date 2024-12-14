import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { FeaturedProducts } from './components/home/FeaturedProducts';
import { Testimonials } from './components/home/Testimonials';
import { ContactUs } from './components/home/ContactUs';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
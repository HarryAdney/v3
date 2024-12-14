import React from 'react';
import { ContactInfo } from '../contact/ContactInfo';
import { StoreMap } from '../contact/StoreMap';

export function ContactUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Visit Our Store</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Come and experience our furniture in person. Our showroom staff are ready to help you find the perfect pieces for your home.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <ContactInfo />
          </div>
          <div className="lg:col-span-8">
            <StoreMap />
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { STORE_INFO } from '../../utils/constants';

export function ContactInfo() {
  const { name, address, contact, hours } = STORE_INFO;

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-gray-600 mt-1" />
          <div>
            <h4 className="font-medium mb-1">Store Address</h4>
            <p className="text-gray-600">
              {name}<br />
              {address.street}<br />
              {address.city}<br />
              {address.postcode}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Phone className="w-6 h-6 text-gray-600" />
          <div>
            <h4 className="font-medium mb-1">Phone</h4>
            <p className="text-gray-600">{contact.phone}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Mail className="w-6 h-6 text-gray-600" />
          <div>
            <h4 className="font-medium mb-1">Email</h4>
            <p className="text-gray-600">{contact.email}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <Clock className="w-6 h-6 text-gray-600 mt-1" />
          <div>
            <h4 className="font-medium mb-1">Opening Hours</h4>
            <div className="text-gray-600">
              <p>Monday - Saturday: {hours.weekday}</p>
              <p>Sunday: {hours.sunday}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';

export function StoreMap() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full min-h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2318.785827549542!2d-1.2434347230749674!3d54.57002997439566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487eed0a7a80e0e7%3A0x6c507a2f9b0fc4e!2s142-146%20Newport%20Rd%2C%20Middlesbrough%20TS1%205QQ!5e0!3m2!1sen!2suk!4v1709913445025!5m2!1sen!2suk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Store Location"
        className="min-h-[400px]"
      ></iframe>
    </div>
  );
}
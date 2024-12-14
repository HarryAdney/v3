export const STORE_INFO = {
  name: 'Beautiful Furnishings',
  address: {
    street: '142-146 Newport Road',
    city: 'Middlesbrough',
    postcode: 'TS1 5QQ'
  },
  contact: {
    phone: '01642 232572',
    email: 'beautiful.furnishings@yahoo.co.uk'
  },
  social: {
    facebook: 'https://www.facebook.com/jamesjonesnewportroad',
    instagram: 'https://www.instagram.com/beautiful_furnishings'
  },
  hours: {
    weekday: '9:00 AM - 5:30 PM',
    sunday: '10:00 AM - 4:00 PM'
  }
} as const;

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
] as const;
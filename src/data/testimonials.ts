export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    content: "The quality of furniture from Beautiful Furnishings is exceptional. My clients are always impressed with the craftsmanship and attention to detail.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Home Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    content: "We furnished our entire living room with pieces from Beautiful Furnishings. The comfort and style are exactly what we were looking for.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Roberts",
    role: "Property Stager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    content: "As a property stager, I need reliable, stylish furniture that makes an impact. Beautiful Furnishings never disappoints.",
    rating: 5
  }
];
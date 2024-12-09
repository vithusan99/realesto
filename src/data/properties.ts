import { Property } from '../types/property';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Apartment in Colombo 7',
    description: 'Modern luxury apartment with stunning city views, fully furnished with high-end amenities.',
    price: 45000000,
    location: 'Colombo 7',
    type: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['Air Conditioning', 'Swimming Pool', 'Gym', '24/7 Security', 'Parking']
  },
  {
    id: '2',
    title: 'Modern House in Nawala',
    description: 'Beautiful modern house with garden, perfect for families.',
    price: 65000000,
    location: 'Nawala, Rajagiriya',
    type: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['Garden', 'Modern Kitchen', 'Servant Quarters', 'CCTV']
  },
  {
    id: '3',
    title: 'Sea View Apartment in Galle',
    description: 'Luxurious beachfront apartment with panoramic ocean views.',
    price: 85000,
    location: 'Galle Fort',
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['Sea View', 'Furnished', 'Beach Access', 'Balcony']
  }
];
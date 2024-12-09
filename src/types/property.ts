export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: 'rent' | 'sale';
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  features: string[];
}
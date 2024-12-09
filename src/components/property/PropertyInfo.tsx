import React from 'react';
import { MapPin, Bed, Bath, Square, Home } from 'lucide-react';
import { Property } from '../../types/property';

interface PropertyInfoProps {
  property: Property;
}

export function PropertyInfo({ property }: PropertyInfoProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 text-gray-500 mb-2">
        <MapPin size={20} />
        <span>{property.location}</span>
      </div>
      
      <h1 className="text-2xl md:text-3xl font-bold mb-4">{property.title}</h1>
      
      <div className="flex items-center gap-4 mb-6">
        <span className="text-2xl font-bold text-blue-600">
          Rs. {property.price.toLocaleString()}
        </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          For {property.type === 'rent' ? 'Rent' : 'Sale'}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y">
        <div className="flex items-center gap-2">
          <Bed size={20} className="text-gray-400" />
          <span>{property.bedrooms} Bedrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <Bath size={20} className="text-gray-400" />
          <span>{property.bathrooms} Bathrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <Square size={20} className="text-gray-400" />
          <span>{property.area} sqft</span>
        </div>
        <div className="flex items-center gap-2">
          <Home size={20} className="text-gray-400" />
          <span>{property.type === 'rent' ? 'Rental' : 'Sale'}</span>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-gray-600 leading-relaxed">{property.description}</p>
      </div>
    </div>
  );
}
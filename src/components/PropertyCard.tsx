import React from 'react';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Property } from '../types/property';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link to={`/property/${property.id}`} className="block">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
            {property.type === 'rent' ? 'For Rent' : 'For Sale'}
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
            <MapPin size={16} />
            <span>{property.location}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-blue-600">
              ${property.price.toLocaleString()}{property.type === 'rent' ? '/mo' : ''}
            </span>
          </div>
          <div className="flex justify-between text-gray-500 border-t pt-4">
            <div className="flex items-center gap-1">
              <Bed size={18} />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath size={18} />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1">
              <Square size={18} />
              <span>{property.area} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
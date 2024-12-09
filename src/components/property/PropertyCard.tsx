import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Property } from '../../types/property';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link to={`/property/${property.id}`} className="block group">
      <div className="bg-white rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl h-full">
        <div className="relative h-48 sm:h-40 overflow-hidden rounded-t-xl">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
          <h3 className="text-lg font-semibold mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {property.title}
          </h3>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-blue-600">
              Rs. {property.price.toLocaleString()}
              {property.type === 'rent' ? '/mo' : ''}
            </span>
          </div>
          <div className="flex justify-between text-gray-500 border-t pt-4 text-sm">
            <div className="flex items-center gap-1">
              <Bed size={16} />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath size={16} />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Square size={16} />
              <span>{property.area}m²</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
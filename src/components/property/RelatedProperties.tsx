import React from 'react';
import { Property } from '../../types/property';
import { PropertyCard } from './PropertyCard';

interface RelatedPropertiesProps {
  properties: Property[];
}

export function RelatedProperties({ properties }: RelatedPropertiesProps) {
  if (properties.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Similar Properties You May Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
        {properties.slice(0, 5).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
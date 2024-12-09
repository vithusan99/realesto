import React from 'react';
import { useParams } from 'react-router-dom';
import { PropertyGallery } from '../components/property/PropertyGallery';
import { PropertyInfo } from '../components/property/PropertyInfo';
import { PropertyFeatures } from '../components/property/PropertyFeatures';
import { ContactAgent } from '../components/property/ContactAgent';
import { RelatedProperties } from '../components/property/RelatedProperties';
import { properties } from '../data/properties';
import { NotFound } from './NotFound';

export function PropertyDetailPage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return <NotFound />;
  }

  const relatedProperties = properties
    .filter(p => 
      p.id !== property.id && 
      (p.location === property.location || 
       Math.abs(p.price - property.price) <= property.price * 0.2)
    )
    .slice(0, 3);

  return (
    <div className="pt-16 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <PropertyGallery images={property.images} title={property.title} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <PropertyInfo property={property} />
            <PropertyFeatures features={property.features} />
          </div>
          
          <div className="lg:col-span-1">
            <ContactAgent property={property} />
          </div>
        </div>

        <RelatedProperties properties={relatedProperties} />
      </div>
    </div>
  );
}
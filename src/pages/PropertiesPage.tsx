import React from 'react';
import { PropertyList } from '../components/property/PropertyList';
import { SearchBar } from '../components/property/SearchBar';
import { properties } from '../data/properties';

export function PropertiesPage() {
  return (
    <div className="pt-16">
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">All Properties</h1>
          <SearchBar />
        </div>
      </div>
      <div className="container mx-auto py-8">
        <PropertyList properties={properties} />
      </div>
    </div>
  );
}
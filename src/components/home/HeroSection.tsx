import React from 'react';
import { SearchFilters } from '../property/SearchFilters';

export function HeroSection() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=2000&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      </div>

      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Find Your Dream Home in <span className="text-blue-400">Sri Lanka</span>
        </h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-200">
          Discover the perfect property from our extensive collection of homes, apartments, and commercial spaces.
        </p>

        <div className="max-w-4xl mx-auto">
          <SearchFilters />
        </div>
      </div>
    </div>
  );
}
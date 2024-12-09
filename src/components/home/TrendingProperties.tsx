import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { PropertyCard } from '../property/PropertyCard';
import { properties } from '../../data/properties';

export function TrendingProperties() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const trendingProperties = properties.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <TrendingUp className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Trending Properties</h2>
          </div>
          <Link
            to="/properties"
            className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All
            <ArrowRight size={20} />
          </Link>
        </div>
        
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {trendingProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <Link
          to="/properties"
          className="md:hidden mt-8 flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          View All Properties
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
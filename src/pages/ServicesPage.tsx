import React from 'react';
import { Home, Building, Key, FileText, Users, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Properties',
    description: 'Find your perfect home from our extensive collection of houses and apartments.'
  },
  {
    icon: Building,
    title: 'Commercial Properties',
    description: 'Discover prime commercial spaces for your business needs.'
  },
  {
    icon: Key,
    title: 'Property Management',
    description: 'Professional management services for property owners and landlords.'
  },
  {
    icon: FileText,
    title: 'Legal Assistance',
    description: 'Expert legal guidance for all property-related transactions.'
  },
  {
    icon: Users,
    title: 'Investment Consulting',
    description: 'Strategic advice for real estate investments and portfolio management.'
  },
  {
    icon: Briefcase,
    title: 'Business Solutions',
    description: 'Comprehensive solutions for real estate businesses and agencies.'
  }
];

export function ServicesPage() {
  return (
    <div className="pt-16">
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            We offer a comprehensive range of real estate services to meet all your property needs.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-block p-4 bg-blue-100 rounded-full text-blue-600 mb-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { useParams } from 'react-router-dom';
import { properties } from '../data/properties';
import { Bed, Bath, Square, MapPin, Phone, Mail } from 'lucide-react';

export function PropertyPage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
            <div className="space-y-4">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="grid grid-cols-2 gap-2">
                {property.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${property.title} ${index + 2}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <MapPin size={20} />
                  <span>{property.location}</span>
                </div>
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <p className="text-3xl font-bold text-blue-600">
                  ${property.price.toLocaleString()}{property.type === 'rent' ? '/mo' : ''}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y">
                <div className="flex flex-col items-center">
                  <Bed size={24} className="text-gray-600" />
                  <span className="mt-1">{property.bedrooms} Beds</span>
                </div>
                <div className="flex flex-col items-center">
                  <Bath size={24} className="text-gray-600" />
                  <span className="mt-1">{property.bathrooms} Baths</span>
                </div>
                <div className="flex flex-col items-center">
                  <Square size={24} className="text-gray-600" />
                  <span className="mt-1">{property.area} sqft</span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-600">{property.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Features</h2>
                <ul className="grid grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Contact Agent</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail size={20} />
                      Send Message
                    </button>
                    <button
                      type="button"
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone size={20} />
                      Call Agent
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Building, Users, Target, Award } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="pt-16">
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">About RealEstate.lk</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            We are Sri Lanka's leading real estate platform, connecting property buyers, sellers, and renters with the best opportunities in the market.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building, title: '1000+', subtitle: 'Properties Listed' },
              { icon: Users, title: '5000+', subtitle: 'Happy Customers' },
              { icon: Target, title: '25+', subtitle: 'Districts Covered' },
              { icon: Award, title: '10+', subtitle: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-block p-4 bg-blue-100 rounded-full text-blue-600 mb-4">
                  <stat.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6">
            <p>
              Our mission is to revolutionize the real estate industry in Sri Lanka by providing a transparent, efficient, and user-friendly platform for all property-related needs.
            </p>
            <p>
              We strive to make property hunting and selling a seamless experience by leveraging technology and providing expert guidance throughout the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
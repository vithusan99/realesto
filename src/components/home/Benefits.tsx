import React from 'react';
import { Shield, ThumbsUp, Clock, Award } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Verified Properties',
    description: 'All our properties are thoroughly verified for your peace of mind.'
  },
  {
    icon: ThumbsUp,
    title: 'Best Deals',
    description: 'We ensure you get the best value for your investment.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our team is always available to help you with any queries.'
  },
  {
    icon: Award,
    title: 'Expert Guidance',
    description: 'Get professional advice from our experienced real estate experts.'
  }
];

export function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-block p-4 bg-blue-100 rounded-full text-blue-600 mb-4">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
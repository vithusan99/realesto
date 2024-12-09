import React from 'react';
import { Check } from 'lucide-react';

interface PropertyFeaturesProps {
  features: string[];
}

export function PropertyFeatures({ features }: PropertyFeaturesProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mt-8">
      <h2 className="text-xl font-semibold mb-4">Property Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check size={20} className="text-green-500" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrendingProperties } from '../components/home/TrendingProperties';
import { FeaturedProperties } from '../components/home/FeaturedProperties';
import { Benefits } from '../components/home/Benefits';

export function HomePage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <TrendingProperties />
      <FeaturedProperties />
      <Benefits />
    </div>
  );
}
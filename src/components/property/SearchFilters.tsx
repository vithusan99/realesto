import React, { useState } from 'react';
import Select from 'react-select';
import { Search } from 'lucide-react';
import { sriLankaDistricts } from '../../data/locations';

const customSelectStyles = {
  control: (base: any) => ({
    ...base,
    minHeight: '42px',
    borderColor: '#e5e7eb',
    backgroundColor: 'white',
    '&:hover': {
      borderColor: '#3b82f6'
    }
  }),
  option: (base: any, state: { isSelected: boolean; isFocused: boolean }) => ({
    ...base,
    backgroundColor: state.isSelected ? '#3b82f6' : state.isFocused ? '#e5e7eb' : 'white',
    color: state.isSelected ? 'white' : '#374151',
    '&:hover': {
      backgroundColor: state.isSelected ? '#3b82f6' : '#e5e7eb'
    }
  }),
  input: (base: any) => ({
    ...base,
    color: '#374151'
  }),
  singleValue: (base: any) => ({
    ...base,
    color: '#374151'
  }),
  placeholder: (base: any) => ({
    ...base,
    color: '#9ca3af'
  })
};

export function SearchFilters() {
  const [filters, setFilters] = useState({
    location: null,
    propertyType: '',
    priceRange: ''
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search filters:', filters);
  };

  return (
    <form onSubmit={handleSearch} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1">
          {/* <label className="block text-gray-700 text-sm font-medium mb-1">Location</label> */}
          <Select
            options={sriLankaDistricts}
            placeholder="Select Location"
            onChange={(value) => setFilters({ ...filters, location: value })}
            styles={customSelectStyles}
            className="text-gray-800"
          />
        </div>
        <div className="col-span-1">
          {/* <label className="block text-gray-700 text-sm font-medium mb-1">Property Type</label> */}
          <select
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 bg-white"
            value={filters.propertyType}
            onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="land">Land</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        <div className="col-span-1">
          {/* <label className="block text-gray-700 text-sm font-medium mb-1">Price Range</label> */}
          <select
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 bg-white"
            value={filters.priceRange}
            onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
          >
            <option value="">Any Price</option>
            <option value="0-5m">Below 5M</option>
            <option value="5m-10m">5M - 10M</option>
            <option value="10m-20m">10M - 20M</option>
            <option value="20m+">Above 20M</option>
          </select>
        </div>
        <div className="col-span-1">
          {/* <label className="block text-gray-700 text-sm font-medium mb-1">&nbsp;</label> */}
          <button
            type="submit"
            className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Search size={20} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
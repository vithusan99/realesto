import React, { useState } from 'react';
import Select from 'react-select';
import { Search } from 'lucide-react';
import { sriLankaDistricts } from '../../data/locations';

const customSelectStyles = {
  control: (base: any) => ({
    ...base,
    minHeight: '42px',
    borderColor: '#e5e7eb',
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

export function SearchBar() {
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
    <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-4 md:p-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Select
            options={sriLankaDistricts}
            placeholder="Select Location"
            onChange={(value) => setFilters({ ...filters, location: value })}
            styles={customSelectStyles}
            className="text-gray-800"
          />
        </div>
        <select
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 bg-white"
          value={filters.propertyType}
          onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
        >
          <option value="">Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="land">Land</option>
          <option value="commercial">Commercial</option>
        </select>
        <select
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 bg-white"
          value={filters.priceRange}
          onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
        >
          <option value="">Price Range</option>
          <option value="0-5m">Below 5M</option>
          <option value="5m-10m">5M - 10M</option>
          <option value="10m-20m">10M - 20M</option>
          <option value="20m+">Above 20M</option>
        </select>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 md:w-auto w-full"
        >
          <Search size={20} />
          <span className="md:inline">Search</span>
        </button>
      </div>
    </form>
  );
}
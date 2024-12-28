import React, { useState } from 'react';
import VendorCard from './VendorCard';

const vendors = [
  {
    id: 1,
    name: 'Elegant Events',
    category: 'Wedding Planner',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'Starting from $2000'
  },
  {
    id: 2,
    name: 'Divine Decor',
    category: 'Decoration',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'Starting from $1500'
  },
  {
    id: 3,
    name: 'Culinary Delights',
    category: 'Catering',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'Starting from $50/person'
  }
];

const categories = ['All', 'Wedding Planner', 'Decoration', 'Catering'];

const VendorSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVendors = vendors.filter(
    vendor => selectedCategory === 'All' || vendor.category === selectedCategory
  );

  return (
    <section id="vendors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-8">Our Trusted Vendors</h2>
        
        <div className="flex justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-rose-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-rose-100'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVendors.map(vendor => (
            <VendorCard key={vendor.id} {...vendor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorSection;
import React, { useState } from 'react';
import CulturalCard from './CulturalCard';

const culturalWeddings = [
  {
    id: 1,
    title: 'Floral Punjabi',
    description: 'Celebrate love with vibrant floral decorations, traditional attire, and lively Bhangra music.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    traditions: [
      'Mehndi ceremony with intricate designs',
      'Bhangra dance celebrations',
      'Traditional pheras ceremony'
    ]
  },
  {
    id: 2,
    title: 'South Indian',
    description: 'Embrace the elegance of South Indian weddings with traditional rituals and customs.',
    image: 'https://images.unsplash.com/photo-1583939411023-14783179e581?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    traditions: [
      'Kanjeevaram sarees',
      'Traditional music and nadaswaram',
      'Elaborate rangoli designs'
    ]
  },
  {
    id: 3,
    title: 'Rajasthani',
    description: 'Experience the royal grandeur of Rajasthani weddings with opulent decor and folk music.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    traditions: [
      'Royal processions',
      'Traditional folk performances',
      'Ceremonial customs'
    ]
  }
];

const CulturalWeddings = () => {
  const [selectedWedding, setSelectedWedding] = useState<number | null>(null);

  return (
    <section id="cultural-weddings" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Cultural Weddings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {culturalWeddings.map(wedding => (
            <div
              key={wedding.id}
              className="transform hover:-translate-y-2 transition-transform duration-300"
              onClick={() => setSelectedWedding(wedding.id)}
            >
              <CulturalCard {...wedding} />
            </div>
          ))}
        </div>

        {selectedWedding && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full p-6">
              <h3 className="text-2xl font-serif mb-4">
                {culturalWeddings.find(w => w.id === selectedWedding)?.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {culturalWeddings.find(w => w.id === selectedWedding)?.description}
              </p>
              <button
                onClick={() => setSelectedWedding(null)}
                className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CulturalWeddings;
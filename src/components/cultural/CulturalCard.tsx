import React from 'react';

interface CulturalCardProps {
  title: string;
  description: string;
  image: string;
  traditions: string[];
}

const CulturalCard = ({ title, description, image, traditions }: CulturalCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-serif mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          {traditions.map((tradition, index) => (
            <div key={index} className="flex items-center">
              <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
              <span className="text-gray-700">{tradition}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CulturalCard;
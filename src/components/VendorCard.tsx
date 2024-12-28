import React from 'react';
import { Star } from 'lucide-react';

interface VendorCardProps {
  name: string;
  category: string;
  rating: number;
  image: string;
  price: string;
}

const VendorCard = ({ name, category, rating, image, price }: VendorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{category}</p>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <p className="text-rose-500 font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default VendorCard;
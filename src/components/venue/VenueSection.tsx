import React from 'react';

const VenueSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 space-y-4">
          <img 
            src="https://www.thetamarindtree.in/wp-content/uploads/2023/07/wedding-venue-bangalore.jpg" 
            alt="Wedding Venue" 
            className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          />
          <img 
            src="https://www.thetamarindtree.in/wp-content/uploads/2023/07/wedding-mandap-bangalore.jpg" 
            alt="Wedding Mandap" 
            className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          />
          <img 
            src="https://www.thetamarindtree.in/wp-content/uploads/2023/07/wedding-hall-bangalore.jpg" 
            alt="Wedding Hall" 
            className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          />
        </div>

        <div className="lg:w-2/3 space-y-8">
          <div>
            <h1 className="text-4xl font-serif mb-4">Wedding Planning Services</h1>
            <p className="text-gray-600 text-lg">
              Welcome to The Tamarind Tree, Bangalore's most enchanting wedding venue. 
              Our heritage property spans across 6.5 acres of lush green space, perfect 
              for creating your dream wedding.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif mb-4">Our Venue Features:</h2>
            <ul className="space-y-2">
              {[
                'Multiple Outdoor & Indoor Spaces',
                'Amphitheatre for Ceremonies',
                'Courtyard for Receptions',
                'Professional Event Support',
                'Customizable Spaces'
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-600 text-lg">
            Located in the heart of Bangalore, The Tamarind Tree offers a perfect blend 
            of traditional charm and modern amenities. Our venue can accommodate both 
            intimate gatherings and grand celebrations of up to 1500 guests.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif mb-4">Why Choose The Tamarind Tree?</h2>
            <ul className="space-y-2">
              {[
                'Heritage Property with Modern Amenities',
                'Versatile Event Spaces',
                'Experienced Event Team',
                'Stunning Photo Opportunities',
                'Convenient Location'
              ].map((reason, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
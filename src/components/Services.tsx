import React from 'react';
import { Calendar, Users, Camera, Music, Utensils, Palette } from 'lucide-react';

const services = [
  {
    icon: Calendar,
    title: 'Full Planning',
    description: 'Comprehensive wedding planning from start to finish'
  },
  {
    icon: Users,
    title: 'Vendor Management',
    description: 'Coordination with the best vendors in the industry'
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Capturing your precious moments forever'
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Live music and DJ services for your celebration'
  },
  {
    icon: Utensils,
    title: 'Catering',
    description: 'Exquisite menu planning and food service'
  },
  {
    icon: Palette,
    title: 'Decor',
    description: 'Beautiful and elegant decoration services'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="h-12 w-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
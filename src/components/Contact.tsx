import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-serif mb-6">Get in Touch</h3>
            
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-rose-500" />
              <span>+1 (555) 123-4567</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-rose-500" />
              <span>contact@eternalmoments.com</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-rose-500" />
              <span>123 Wedding Street, Dream City, DC 12345</span>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent h-32"
                placeholder="Your message"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="py-20 bg-white dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Get in Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-brand-teal">Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Have questions? We are here to help you. Reach out to us through any of these channels.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full text-brand-teal">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">support@definitesuccess.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                 <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full text-brand-teal">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Call Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">094222 93688</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                 <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full text-brand-teal">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Visit Us</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Baliram Patil High School, Vinayak Housing Society, Navbharat Housing Society, N 8, Cidco, Chhatrapati Sambhajinagar, Maharashtra 431003
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/DpL7oczSKXGm46Ts6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-teal-50 dark:bg-teal-900/20 text-brand-teal rounded-lg hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors text-sm font-semibold group"
                  >
                    <MapPin size={16} className="group-hover:scale-110 transition-transform" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="bg-gray-50 dark:bg-slate-900 p-8 rounded-2xl shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-teal outline-none text-gray-800 dark:text-white" placeholder="John" />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-teal outline-none text-gray-800 dark:text-white" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-teal outline-none text-gray-800 dark:text-white" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-teal outline-none text-gray-800 dark:text-white" placeholder="How can we help you?"></textarea>
              </div>
              
              <button className="w-full bg-brand-teal text-white font-bold py-3 rounded-lg hover:bg-teal-600 transition flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
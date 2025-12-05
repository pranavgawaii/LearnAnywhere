import React from 'react';
import { MapPin, Phone, Mail, Navigation, Facebook, Twitter, Instagram, Linkedin, Heart, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 pt-16 pb-8 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-secondary shadow-lg shadow-sky-500/20">
                 <Globe className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">LearnAnywhere</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Learn from anywhere with LearnAnywhere. We provide the tools and community you need to master new skills and shape your future.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-brand-teal hover:text-white dark:hover:bg-brand-teal dark:hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Courses', 'About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-teal dark:hover:text-brand-teal transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/50 group-hover:bg-brand-teal transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-900/20 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-900 dark:text-white font-medium">Visit Us</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                    Baliram Patil High School, Vinayak Housing Society, Navbharat Housing Society, N 8, Cidco, Chhatrapati Sambhajinagar, Maharashtra 431003
                  </span>
                  <a 
                    href="https://maps.app.goo.gl/DpL7oczSKXGm46Ts6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-teal hover:text-teal-700 dark:hover:text-teal-400 font-semibold text-sm inline-flex items-center gap-1 mt-1"
                  >
                    <Navigation size={14} /> Get Directions
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-900/20 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-900 dark:text-white font-medium">Call Us</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">094222 93688</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-900/20 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-900 dark:text-white font-medium">Email Us</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">hello@nova.edu</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Nova Learning. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> for students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
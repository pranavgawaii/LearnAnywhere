import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 pt-12 pb-8 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">DANGES ACADEMY</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Empowering students with the skills and knowledge they need to succeed in their careers and life.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-brand-teal" />
                <div className="flex flex-col gap-1">
                  <span>
                    Baliram Patil High School, Vinayak Housing Society, Navbharat Housing Society, N 8, Cidco, Chhatrapati Sambhajinagar, Maharashtra 431003
                  </span>
                  <a 
                    href="https://maps.app.goo.gl/DpL7oczSKXGm46Ts6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-teal hover:text-teal-600 dark:hover:text-teal-400 font-medium inline-flex items-center gap-1 mt-1"
                  >
                    <Navigation size={14} /> Get Directions
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-brand-teal" />
                <span>094222 93688</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-brand-teal" />
                <span>support@definitesuccess.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links (Placeholder) */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-brand-teal transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-slate-800 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Definite Success. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
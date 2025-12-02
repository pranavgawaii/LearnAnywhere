import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, User as UserIcon, LogOut } from 'lucide-react';

interface NavbarProps {
  onOpenAuth: (type: 'login' | 'signup') => void;
  onNavigate: (page: string) => void;
  currentPage: string;
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onNavigate, currentPage, isLoggedIn, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Default to light mode unless explicitly set to dark
    if (localStorage.getItem('theme') === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      // Ensure light mode is set if not present
      if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', value: 'home' },
    { name: 'Courses', value: 'courses' },
    { name: 'Contact', value: 'contact' },
    { name: 'About', value: 'about' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 transition-colors duration-300 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16"> {/* Reduced height to standard size */}
          
          {/* Logo Section */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer py-2 gap-3"
            onClick={() => onNavigate('home')}
          >
             {/* Replaced with a larger container for the logo */}
            <div className="h-12 w-auto flex items-center justify-center"> 
               <img 
                src="/logo.png" 
                alt="Definite Success" 
                className="h-full w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300" 
               />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">DANGES ACADEMY</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6 mr-4">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => onNavigate(link.value)}
                  className={`text-base font-semibold transition-colors px-2 py-1 rounded-md ${
                    currentPage === link.value 
                      ? 'text-brand-teal bg-teal-50 dark:bg-teal-900/20' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-brand-teal dark:hover:text-brand-teal'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <div className="h-6 w-px bg-gray-200 dark:bg-slate-700 mx-2"></div>

            {/* Theme Toggle - Simple Single Icon */}
            <button 
              onClick={toggleTheme} 
              className="p-2.5 rounded-full text-gray-500 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={24} strokeWidth={1.5} /> : <Moon size={24} strokeWidth={1.5} />}
            </button>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3 ml-2">
              {isLoggedIn ? (
                 <div className="flex items-center gap-3">
                    <button 
                      onClick={() => onNavigate('dashboard')}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                    >
                        <UserIcon size={18} className="text-gray-600 dark:text-gray-300"/>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Dashboard</span>
                    </button>
                    <button 
                      onClick={onLogout}
                      className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                      title="Logout"
                    >
                      <LogOut size={20} />
                    </button>
                 </div>
              ) : (
                <>
                  <button 
                    onClick={() => onOpenAuth('login')}
                    className="px-6 py-2.5 rounded-full text-gray-700 dark:text-gray-200 font-semibold hover:text-brand-teal dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => onOpenAuth('signup')}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-teal to-teal-500 text-white font-bold shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:scale-105 transition-all duration-300"
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-gray-600 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 absolute w-full left-0 shadow-lg z-50 animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-4 pb-8 space-y-2 sm:px-3 flex flex-col items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => { setIsOpen(false); onNavigate(link.value); }}
                className={`block px-4 py-3 w-full text-center text-lg font-medium rounded-lg ${
                  currentPage === link.value 
                    ? 'text-brand-teal bg-teal-50 dark:bg-teal-900/20' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </button>
            ))}
            
            <div className="w-full border-t border-gray-100 dark:border-slate-800 my-2"></div>

            {isLoggedIn ? (
              <div className="flex flex-col gap-3 w-full max-w-xs mt-2">
                 <button 
                  onClick={() => { setIsOpen(false); onNavigate('dashboard'); }}
                  className="w-full px-6 py-3 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 font-bold"
                >
                  Dashboard
                </button>
                 <button 
                  onClick={() => { setIsOpen(false); onLogout(); }}
                  className="w-full px-6 py-3 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-bold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 w-full max-w-xs mt-2">
                <button 
                  onClick={() => { setIsOpen(false); onOpenAuth('login'); }}
                  className="w-full px-6 py-3 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 font-bold"
                >
                  Login
                </button>
                <button 
                  onClick={() => { setIsOpen(false); onOpenAuth('signup'); }}
                  className="w-full px-6 py-3 rounded-full bg-gray-800 dark:bg-white text-white dark:text-gray-900 font-bold"
                >
                  Sign up
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
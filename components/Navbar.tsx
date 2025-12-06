import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, User as UserIcon, LogOut, ChevronRight, Globe } from 'lucide-react';

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Always start with light mode
    setIsDark(false);
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
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
    { name: 'About', value: 'about' },
    { name: 'Contact', value: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-slate-700/50 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-secondary shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
               <Globe className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-brand-primary transition-colors">
              LearnAnywhere
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1 bg-gray-100/50 dark:bg-slate-800/50 p-1 rounded-full border border-gray-200/50 dark:border-slate-700/50 backdrop-blur-sm">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => onNavigate(link.value)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    currentPage === link.value 
                      ? 'bg-white dark:bg-slate-700 text-brand-teal shadow-sm' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-brand-teal dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-gray-500 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300"
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {isLoggedIn ? (
                 <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-slate-700">
                    <button 
                      onClick={() => onNavigate('dashboard')}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 text-brand-teal hover:bg-brand-teal/20 transition-colors"
                    >
                        <UserIcon size={18} />
                        <span className="text-sm font-semibold">Dashboard</span>
                    </button>
                    <button 
                      onClick={onLogout}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      title="Logout"
                    >
                      <LogOut size={20} />
                    </button>
                 </div>
              ) : (
                <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-slate-700">
                  <button 
                    onClick={() => onOpenAuth('login')}
                    className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-brand-teal transition-colors"
                  >
                    Log in
                  </button>
                  <button 
                    onClick={() => onOpenAuth('signup')}
                    className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-teal text-white text-sm font-bold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Get Started
                    <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-gray-600 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 shadow-xl animate-in slide-in-from-top-5 duration-200">
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => { setIsOpen(false); onNavigate(link.value); }}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                    currentPage === link.value 
                      ? 'bg-brand-teal/10 text-brand-teal' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-slate-800">
              {isLoggedIn ? (
                <div className="space-y-3">
                   <button 
                    onClick={() => { setIsOpen(false); onNavigate('dashboard'); }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-teal text-white font-semibold"
                  >
                    <UserIcon size={18} /> Dashboard
                  </button>
                   <button 
                    onClick={() => { setIsOpen(false); onLogout(); }}
                    className="w-full px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-semibold"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => { setIsOpen(false); onOpenAuth('login'); }}
                    className="px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white font-semibold"
                  >
                    Log in
                  </button>
                  <button 
                    onClick={() => { setIsOpen(false); onOpenAuth('signup'); }}
                    className="px-4 py-3 rounded-xl bg-brand-teal text-white font-semibold shadow-lg shadow-teal-500/20"
                  >
                    Sign up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
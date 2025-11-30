import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 py-8 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Definite Success. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
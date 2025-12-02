import React from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-teal rounded-3xl p-8 md:p-16 relative overflow-hidden text-center md:text-left"
        >
          {/* Background Patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Subscribe to our Newsletter
              </h2>
              <p className="text-teal-50 text-lg">
                Get the latest updates, course discounts, and learning tips delivered directly to your inbox.
              </p>
            </div>

            <div className="md:w-1/2 w-full max-w-md">
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-teal-100 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all backdrop-blur-sm"
                  required
                />
                <button 
                  type="submit"
                  className="px-8 py-4 rounded-full bg-white text-brand-teal font-bold hover:bg-teal-50 transition-colors shadow-lg flex items-center justify-center gap-2 group"
                >
                  Subscribe
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              <p className="text-teal-100 text-xs mt-4 text-center sm:text-left">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;

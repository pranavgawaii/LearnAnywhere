import React from 'react';
import { Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative">
      {/* Vibrant Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[3rem] p-8 md:p-16 overflow-hidden text-center md:text-left shadow-2xl shadow-sky-900/10 dark:shadow-none"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-900 dark:to-black"></div>

          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-teal text-sm font-medium mb-6 backdrop-blur-sm border border-white/5">
                <Mail size={16} /> <span>Weekly Digest</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Join our community of <br /> <span className="text-brand-teal">lifelong learners</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Unlock exclusive access to free resources, expert tips, and early-bird discounts on new courses.
              </p>
            </div>

            <div className="lg:w-5/12 w-full">
              <div className="bg-white/5 backdrop-blur-md p-2 rounded-2xl border border-white/10">
                <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-xl bg-transparent text-white placeholder-slate-400 focus:outline-none focus:bg-white/5 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-xl bg-brand-teal text-white font-bold hover:bg-teal-500 transition-colors shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 group whitespace-nowrap"
                  >
                    Subscribe
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
              <p className="text-slate-500 text-xs mt-4 text-center">
                We care about your data in our <a href="#" className="underline hover:text-white transition-colors">privacy policy</a>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;

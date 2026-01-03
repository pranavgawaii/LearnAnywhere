import React from 'react';
import { CheckCircle, ArrowRight, Play, Star, Users, BookOpen, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onJoinClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-slate-950 pt-32 pb-20 lg:pt-48 lg:pb-32 transition-colors duration-300">

      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Modern Mesh Gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-sky-100/50 dark:bg-sky-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-overlay animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-teal-100/50 dark:bg-teal-900/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-overlay animate-pulse-slow delay-1000"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-overlay"></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">

            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 backdrop-blur-sm mb-8 hover:border-brand-teal/50 transition-colors cursor-default"
            >
              <span className="bg-brand-teal text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide">NEW v2.0</span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1">
                Experience the new Lumina <ArrowRight size={14} />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6"
            >
              Master Skills for the <br className="hidden lg:block" />
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-sky-500 to-brand-primary">Digital Age</span>
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 w-full h-3 text-brand-teal/30 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              Unlock your potential with expert-led courses in coding, design, and business.
              Join 10,000+ learners building their future today.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12"
            >
              <button
                onClick={onJoinClick}
                className="group relative w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg hover:shadow-2xl hover:shadow-brand-teal/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Start Learning Free <Zap size={20} className="fill-current" />
                </span>
              </button>

              <button
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-transparent text-slate-600 dark:text-slate-300 font-semibold text-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={14} className="ml-0.5 fill-slate-900 dark:fill-white text-slate-900 dark:text-white" />
                </div>
                View Course Catalog
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500 dark:text-slate-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-brand-teal" /> <span>Certified Certificates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-brand-teal" /> <span>Lifetime Access</span>
              </div>
            </motion.div>
          </div>

          {/* Right Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sky-900/10 dark:shadow-sky-900/20 border border-slate-200/50 dark:border-slate-700/50 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-60"></div>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                  alt="Students learning"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />

                {/* Video Button Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-xl cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                      <Play size={24} className="ml-1 fill-brand-teal text-brand-teal" />
                    </div>
                  </motion.button>
                </div>
              </div>

              {/* Floating Card 1: Active Users */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 bottom-20 z-30 hidden md:block"
              >
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden bg-gray-200">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">10k+ Students</p>
                    <div className="flex items-center gap-1 text-xs text-brand-teal font-medium">
                      <Zap size={12} fill="currentColor" /> Active Now
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2: Rating */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 top-12 z-30 hidden md:block"
              >
                <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2.5 rounded-xl text-yellow-600 dark:text-yellow-400">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-lg text-slate-900 dark:text-white">4.9</span>
                      <span className="text-slate-400 text-sm">/ 5.0</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">Course Rating</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
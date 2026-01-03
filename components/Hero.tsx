import React from 'react';
import { ArrowRight, Play, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onJoinClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-slate-950 pt-32 pb-24 lg:pt-48 lg:pb-40 transition-colors duration-300 border-b border-slate-100 dark:border-slate-800">

      {/* Professional Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Central Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-teal/10 via-brand-primary/5 to-transparent opacity-70"></div>

        {/* Subtle Grid - High Precision */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Floating Particles/Orbs for 'Professional Vibe' */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-teal/5 rounded-full blur-[80px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Trust/New Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 pl-1 pr-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-brand-teal/30 transition-all duration-300 cursor-default mb-8"
        >
          <span className="bg-gradient-to-r from-brand-teal to-brand-primary text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wide">NEW</span>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1">
            Lumina Learning Platform v2.0 <ArrowRight size={14} className="text-slate-400" />
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-8"
        >
          Ignite Your Future with <br className="hidden md:block" />
          <span className="relative inline-block whitespace-nowrap px-2">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-primary to-brand-secondary">World-Class Skills</span>
            <span className="absolute bottom-2 left-0 w-full h-4 bg-brand-teal/10 -z-0 rounded-full blur-sm"></span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Join over <span className="font-semibold text-slate-900 dark:text-white">10,000+ professionals</span> mastering coding, design, and business.
          Expert-led courses designed to advance your career.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onJoinClick}
            className="group min-w-[200px] px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg hover:shadow-2xl hover:shadow-brand-teal/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Start Learning Free
            <Zap size={20} className="fill-current" />
          </button>

          <button
            className="group min-w-[200px] px-8 py-4 rounded-xl bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 font-semibold text-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Play size={18} className="fill-slate-900 dark:fill-slate-300" />
            Watch Demo
          </button>
        </motion.div>

        {/* Social Proof / Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-12 border-t border-slate-100 dark:border-slate-800/50 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1 text-slate-900 dark:text-white font-bold text-2xl">
              4.9 <Star size={20} className="fill-yellow-400 text-yellow-400" />
            </div>
            <span className="text-sm font-medium text-slate-500">Course Rating</span>
          </div>

          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>

          <div className="flex flex-col items-center gap-1">
            <div className="text-slate-900 dark:text-white font-bold text-2xl">
              10k+
            </div>
            <span className="text-sm font-medium text-slate-500">Active Learners</span>
          </div>

          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>

          <div className="flex flex-col items-center gap-1">
            <div className="text-slate-900 dark:text-white font-bold text-2xl">
              120+
            </div>
            <span className="text-sm font-medium text-slate-500">Premium Courses</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
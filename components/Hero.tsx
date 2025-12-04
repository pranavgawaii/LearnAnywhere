import React from 'react';
import { CheckCircle, ArrowUpRight, Play, Star, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onJoinClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-brand-light via-white to-brand-light dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-20 pb-20 md:pt-32 md:pb-32 transition-colors duration-300">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
             {/* Tag */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 rounded-full pl-1 pr-4 py-1 shadow-sm hover:shadow-md transition-all duration-300 mx-auto lg:mx-0"
            >
              <span className="bg-brand-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">NEW</span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Reimagine education with Nova
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white"
            >
              Ignite Your <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Future</span> Today.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Join a global community of learners. Master in-demand skills with our expert-led courses and take your career to the next level.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button 
                onClick={onJoinClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-primary text-white font-bold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Learning <ArrowUpRight size={20} />
              </button>
              <button 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold text-lg border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play size={20} className="fill-current" /> Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-100 dark:border-slate-800"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">10k+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Active Students</span>
              </div>
              <div className="w-px h-10 bg-gray-200 dark:bg-slate-700"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">50+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Expert Courses</span>
              </div>
              <div className="w-px h-10 bg-gray-200 dark:bg-slate-700"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">4.9</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" /> Rating
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
             <div className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                   <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                    alt="Students learning" 
                    className="w-full h-auto object-cover"
                   />
                   
                   {/* Floating Badge 1 */}
                   <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-8 left-8 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                   >
                      <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg text-brand-primary dark:text-indigo-400">
                        <BookOpen size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">Interactive</p>
                        <p className="text-xs text-gray-500">Learning</p>
                      </div>
                   </motion.div>

                   {/* Floating Badge 2 */}
                   <motion.div 
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-8 right-8 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                   >
                      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400">
                        <Users size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">Expert</p>
                        <p className="text-xs text-gray-500">Mentors</p>
                      </div>
                   </motion.div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
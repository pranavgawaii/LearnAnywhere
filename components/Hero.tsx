import React from 'react';
import { CheckCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onJoinClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-teal-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950/30 pt-10 pb-16 md:pt-16 md:pb-20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-7">
             {/* Tag */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-teal-100 dark:border-teal-800/60 rounded-full pl-2 pr-4 py-1.5 shadow-[0_0_20px_-5px_rgba(20,184,166,0.2)] hover:shadow-[0_0_25px_-5px_rgba(20,184,166,0.4)] transition-all duration-300 group cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </span>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                Get up to <span className="text-teal-600 dark:text-teal-400 font-bold">40% off</span> on first enroll
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white"
            >
              Learning <span className="text-brand-teal">Today,</span><br />
              Leading <span className="text-brand-teal">Tomorrow.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-lg"
            >
              Learn essential career and life skills with our expert-led courses designed for your success.
            </motion.p>

            {/* Features Checkmarks */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-5 text-gray-700 dark:text-gray-300 font-medium text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-500 w-4 h-4" />
                <span>Flexible</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-500 w-4 h-4" />
                <span>Learning Path</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-500 w-4 h-4" />
                <span>Community</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button 
                onClick={onJoinClick}
                className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-xl font-bold text-base hover:bg-gray-800 dark:hover:bg-gray-200 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Join For Free
              </button>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
             {/* Abstract Background Shapes */}
             <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
             <div className="absolute top-10 -left-4 w-[400px] h-[400px] bg-teal-100 dark:bg-teal-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

             <div className="relative z-10 flex justify-center lg:justify-end">
                {/* Floating Cards */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute top-10 left-0 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg z-20 flex items-center gap-3 animate-bounce duration-[3000ms]"
                >
                   <div className="bg-cyan-400 p-2 rounded-md text-white">
                      <ArrowUpRight size={20} />
                   </div>
                   <div>
                     <p className="font-bold text-sm text-gray-800 dark:text-white">50+</p>
                     <p className="text-xs text-gray-500 dark:text-gray-400">Available courses</p>
                   </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute top-0 right-10 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg z-20 hidden md:block"
                >
                   <div className="flex items-center justify-between gap-4 mb-2">
                     <p className="text-xs text-gray-500 dark:text-gray-400">No of students</p>
                   </div>
                   <div className="flex items-end gap-1 h-10">
                      <div className="w-2 bg-blue-500 h-[60%] rounded-t-sm"></div>
                      <div className="w-2 bg-green-400 h-[80%] rounded-t-sm"></div>
                      <div className="w-2 bg-yellow-400 h-[40%] rounded-t-sm"></div>
                      <div className="w-2 bg-teal-500 h-[100%] rounded-t-sm"></div>
                   </div>
                </motion.div>

                {/* Main Student Image */}
                <div className="bg-gradient-to-b from-blue-200 to-transparent dark:from-slate-700/50 rounded-b-[4rem] rounded-t-full pt-10 px-6 pb-0 overflow-hidden relative border-b-8 border-brand-teal/20">
                   <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                    alt="Happy Student" 
                    className="w-full max-w-sm md:max-w-md object-cover relative z-10 drop-shadow-2xl"
                    style={{maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'}}
                   />
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { CheckCircle, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-teal-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950/30 pt-10 pb-20 md:pt-16 md:pb-24 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
             {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 dark:text-gray-300">
              <span className="w-4 h-4 bg-black dark:bg-white dark:text-black text-white rounded-full flex items-center justify-center text-[10px]">✔</span>
              Get up to <span className="text-brand-teal">40% off</span> on first enroll
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
              Learning <span className="text-brand-teal">Today,</span><br />
              Leading <span className="text-brand-teal">Tomorrow.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              Learn essential career and life skills with our expert-led courses designed for your success.
            </p>

            {/* Features Checkmarks */}
            <div className="flex flex-wrap gap-6 text-gray-700 dark:text-gray-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-500 w-5 h-5" />
                <span>Flexible</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-500 w-5 h-5" />
                <span>Learning Path</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-500 w-5 h-5" />
                <span>Community</span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button 
                onClick={onJoinClick}
                className="bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Join For Free
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative">
             {/* Abstract Background Shapes */}
             <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
             <div className="absolute top-10 -left-4 w-[400px] h-[400px] bg-teal-100 dark:bg-teal-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

             <div className="relative z-10 flex justify-center lg:justify-end">
                {/* Floating Cards */}
                <div className="absolute top-10 left-0 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg z-20 flex items-center gap-3 animate-bounce duration-[3000ms]">
                   <div className="bg-cyan-400 p-2 rounded-md text-white">
                      <ArrowUpRight size={20} />
                   </div>
                   <div>
                     <p className="font-bold text-sm text-gray-800 dark:text-white">50+</p>
                     <p className="text-xs text-gray-500 dark:text-gray-400">Available courses</p>
                   </div>
                </div>

                <div className="absolute top-0 right-10 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg z-20 hidden md:block">
                   <div className="flex items-center justify-between gap-4 mb-2">
                     <p className="text-xs text-gray-500 dark:text-gray-400">No of students</p>
                   </div>
                   <div className="flex items-end gap-1 h-10">
                      <div className="w-2 bg-blue-500 h-[60%] rounded-t-sm"></div>
                      <div className="w-2 bg-green-400 h-[80%] rounded-t-sm"></div>
                      <div className="w-2 bg-yellow-400 h-[40%] rounded-t-sm"></div>
                      <div className="w-2 bg-teal-500 h-[100%] rounded-t-sm"></div>
                   </div>
                </div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
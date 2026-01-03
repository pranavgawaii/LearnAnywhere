import React from 'react';
import { BookOpen, Video, FileText, Youtube, ChevronRight } from 'lucide-react';
import { FeatureItem } from '../types';

interface FeatureBarProps {
  onNavigate: (page: string) => void;
}

const features: FeatureItem[] = [
  { id: 1, title: 'Explore Premium Courses', icon: BookOpen, bgColor: 'bg-white dark:bg-slate-800', linkText: 'Explore' },
  { id: 2, title: 'Get Notes & PDF Resources', icon: FileText, bgColor: 'bg-white dark:bg-slate-800', linkText: 'Get Notes' },
  { id: 3, title: 'Curated Study Materials', icon: BookOpen, bgColor: 'bg-white dark:bg-slate-800', linkText: 'Materials' },
  { id: 4, title: 'Access Free Live Videos', icon: Video, bgColor: 'bg-white dark:bg-slate-800', linkText: 'Videos' },
  { id: 5, title: 'Join our Community', icon: Youtube, bgColor: 'bg-white dark:bg-slate-800', linkText: 'Subscribe' },

];

const FeatureBar: React.FC<FeatureBarProps> = ({ onNavigate }) => {
  return (
    <div className="relative -mt-10 z-20 px-4">
      <div className="container mx-auto">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-sky-900/5 dark:shadow-none border border-white/20 dark:border-slate-800 p-8 md:p-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-8 bg-brand-teal rounded-full"></span>
              Popular Features
            </h3>
            <button className="text-sm font-semibold text-brand-teal hover:text-teal-600 transition-colors hidden md:block">
              View All Features →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                onClick={() => onNavigate('courses')}
                className={`${feature.bgColor} p-6 rounded-2xl border border-gray-100 dark:border-slate-700 hover:border-brand-teal/30 dark:hover:border-brand-teal/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex flex-col h-full justify-between gap-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-brand-teal/10 dark:bg-brand-teal/20 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                      <feature.icon size={24} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-gray-400 group-hover:text-brand-teal transition-colors">
                      <ChevronRight size={18} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-md leading-tight mb-1 group-hover:text-brand-teal transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Click to open</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default FeatureBar;
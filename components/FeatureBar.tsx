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
    <div className="relative z-20 px-4 -mt-16 sm:-mt-24 pb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.slice(0, 3).map((feature) => ( // Showing only top 3 for cleaner look
            <div
              key={feature.id}
              onClick={() => onNavigate('courses')}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-brand-teal/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-light dark:bg-slate-800 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300 shrink-0">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">{feature.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Click to explore more</p>
              </div>
              <div className="ml-auto mt-1 text-slate-300 group-hover:text-brand-teal transition-colors">
                <ChevronRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default FeatureBar;
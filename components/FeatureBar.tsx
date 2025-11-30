import React from 'react';
import { BookOpen, Video, FileText, Youtube, ChevronRight } from 'lucide-react';
import { FeatureItem } from '../types';

interface FeatureBarProps {
  onNavigate: (page: string) => void;
}

const features: FeatureItem[] = [
  { id: 1, title: 'Explore our premium courses', icon: BookOpen, bgColor: 'bg-pink-100 dark:bg-pink-900/30', linkText: 'Explore' },
  { id: 2, title: 'Get Notes & PDF\'s', icon: FileText, bgColor: 'bg-pink-100 dark:bg-pink-900/30', linkText: 'Get Notes' },
  { id: 3, title: 'Books & Other study materials', icon: BookOpen, bgColor: 'bg-pink-100 dark:bg-pink-900/30', linkText: 'Materials' },
  { id: 4, title: 'Access Live & Free videos', icon: Video, bgColor: 'bg-pink-100 dark:bg-pink-900/30', linkText: 'Videos' },
  { id: 5, title: 'Join our YouTube', icon: Youtube, bgColor: 'bg-pink-100 dark:bg-pink-900/30', linkText: 'Subscribe' },
];

const FeatureBar: React.FC<FeatureBarProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#BCECE0] dark:bg-teal-900/30 py-12 px-4 relative mt-[-20px] rounded-t-[3rem] z-20 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="mb-6">
          <span className="bg-black dark:bg-white dark:text-black text-white px-6 py-2 rounded-full text-lg font-bold inline-block">
            Popular Features
          </span>
        </div>
        
        <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar snap-x">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              onClick={() => onNavigate('courses')}
              className={`min-w-[240px] md:min-w-[260px] ${feature.bgColor} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between h-40 snap-center relative group border border-transparent dark:border-white/5`}
            >
              <div className="flex justify-between items-start">
                 <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white relative">
                   <feature.icon size={24} />
                    {/* Decorative badge on icon */}
                    <div className="absolute -bottom-2 -right-2 bg-yellow-400 w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                 </div>
                 <ChevronRight className="text-black dark:text-white group-hover:translate-x-1 transition-transform" />
              </div>
              
              <h3 className="font-bold text-gray-800 dark:text-gray-100 text-sm md:text-base pr-4 leading-tight mt-4">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBar;
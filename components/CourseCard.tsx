import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CourseItem } from '../types';

interface CourseCardProps {
  course: CourseItem;
  onAccess: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onAccess }) => {
  return (
    <div 
      className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-slate-700 flex flex-col h-full cursor-pointer"
      onClick={onAccess}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-teal shadow-sm">
           {course.students}+ Students
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs font-semibold text-brand-teal mb-2 uppercase tracking-wider">
            {course.category || 'Academic'}
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 flex-grow">
          {course.title}
        </h3>
        
        <div className="mt-auto flex items-center justify-between">
           <span className="font-bold text-xl text-gray-900 dark:text-white">{course.price || 'Free'}</span>
           <button 
             onClick={(e) => { e.stopPropagation(); onAccess(); }}
             className="flex items-center gap-2 text-sm font-bold text-brand-teal hover:text-teal-600 transition-colors bg-teal-50 dark:bg-teal-900/20 px-3 py-1.5 rounded-lg"
           >
             Details <ArrowRight size={16} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
import React from 'react';
import { ArrowRight, Star, Clock, BookOpen, User } from 'lucide-react';
import { CourseItem } from '../types';

interface CourseCardProps {
  course: CourseItem;
  onAccess: (id: number) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onAccess }) => {
  return (
    <div 
      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-slate-700 flex flex-col h-full cursor-pointer transform hover:-translate-y-1"
      onClick={() => onAccess(course.id)}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-teal shadow-sm uppercase tracking-wider">
           {course.category || 'Academic'}
        </div>

        <div className="absolute bottom-3 right-3 bg-brand-teal/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm flex items-center gap-1">
           <Star size={12} className="fill-white" /> {course.rating || '4.5'}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 flex-grow group-hover:text-brand-teal transition-colors">
          {course.title}
        </h3>
        
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
          {course.duration && (
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{course.duration}</span>
            </div>
          )}
          {course.lessons && (
            <div className="flex items-center gap-1">
              <BookOpen size={14} />
              <span>{course.lessons} Lessons</span>
            </div>
          )}
        </div>

        {course.instructor && (
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100 dark:border-slate-700">
            <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
              <User size={14} className="text-gray-500 dark:text-gray-400" />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium truncate">
              {course.instructor}
            </span>
          </div>
        )}
        
        <div className="mt-auto flex items-center justify-between">
           <div className="flex flex-col">
             <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Price</span>
             <span className="font-bold text-xl text-brand-teal">{course.price || 'Free'}</span>
           </div>
           <button 
             onClick={(e) => { e.stopPropagation(); onAccess(course.id); }}
             className="flex items-center gap-2 text-sm font-bold text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-brand-teal dark:hover:bg-brand-teal dark:hover:text-white transition-all px-4 py-2 rounded-lg shadow-md hover:shadow-lg"
           >
             Enroll Now <ArrowRight size={16} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
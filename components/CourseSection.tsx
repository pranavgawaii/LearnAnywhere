import React from 'react';
import { Filter, Search } from 'lucide-react';
import CourseCard from './CourseCard';
import { CourseItem } from '../types';

interface CourseSectionProps {
  title: React.ReactNode;
  subtitle?: string;
  bgGray?: boolean;
  onAccess: () => void;
}

// Data with images and INR prices
const courses: CourseItem[] = [
  { 
    id: 1, 
    title: 'Class 12th Mathematics: Complete Integration Mastery', 
    students: 120, 
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop',
    category: 'Mathematics',
    price: '₹2999'
  },
  { 
    id: 2, 
    title: 'Advanced Physics: Mechanics & Thermodynamics', 
    students: 85, 
    image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=800&auto=format&fit=crop',
    category: 'Physics',
    price: '₹3499'
  },
  { 
    id: 3, 
    title: 'Organic Chemistry: Reactions and Mechanisms', 
    students: 200, 
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=800&auto=format&fit=crop',
    category: 'Chemistry',
    price: '₹2499'
  },
  { 
    id: 4, 
    title: 'Computer Science: Python for Beginners', 
    students: 150, 
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop',
    category: 'Computer Science',
    price: '₹1999'
  },
];

const CourseSection: React.FC<CourseSectionProps> = ({ title, subtitle, bgGray, onAccess }) => {
  return (
    <section className={`py-12 md:py-16 bg-transparent px-4`}>
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 max-w-6xl mx-auto">
           <button className="px-6 py-2 bg-gray-200 dark:bg-slate-700 rounded-full font-bold text-gray-700 dark:text-gray-200 text-sm hover:bg-gray-300 dark:hover:bg-slate-600 transition">
             All Courses
           </button>

           <div className="relative w-full md:w-96">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <Search size={18} className="text-gray-400" />
             </div>
             <input 
               type="text" 
               placeholder="Search Course" 
               className="w-full pl-10 pr-4 py-2 bg-gray-200 dark:bg-slate-700 border-none rounded-full focus:ring-2 focus:ring-brand-teal text-sm placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-white font-medium"
             />
           </div>

           <button className="px-6 py-2 bg-gray-200 dark:bg-slate-700 rounded-full font-bold text-gray-700 dark:text-gray-200 text-sm hover:bg-gray-300 dark:hover:bg-slate-600 transition flex items-center gap-2">
             Filters <Filter size={14} />
           </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} onAccess={onAccess} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
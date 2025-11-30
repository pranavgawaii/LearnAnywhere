import React from 'react';
import { Book, GraduationCap, Lightbulb, User } from 'lucide-react';
import { CategoryItem } from '../types';

const categories: CategoryItem[] = [
  { id: 1, label: 'Class 7th', icon: Book },
  { id: 2, label: 'Class 8th', icon: Book },
  { id: 3, label: 'Class 9th', icon: GraduationCap },
  { id: 4, label: 'Class 10th', icon: GraduationCap },
  { id: 5, label: 'Class 11th', icon: Lightbulb },
  { id: 6, label: 'Class 12th', icon: Lightbulb },
  { id: 7, label: 'BSC', icon: GraduationCap },
  { id: 8, label: 'Engineering', icon: User },
];

const Categories: React.FC = () => {
  return (
    <section className="bg-teal-50/50 dark:bg-slate-900/30 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="bg-black dark:bg-white text-white dark:text-black px-10 py-3 rounded-full text-xl md:text-2xl font-bold shadow-lg">
            What we have for you...!
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {categories.map((cat) => (
            <div key={cat.id} className="flex flex-col items-center gap-3 group cursor-pointer">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center border-2 border-transparent group-hover:border-brand-teal transition-all group-hover:-translate-y-2">
                 {/* Icon Placeholder Art */}
                 <div className="relative">
                    <cat.icon size={36} className="text-gray-700 dark:text-gray-200" />
                    {/* Small accent dot */}
                    <div className="absolute top-0 right-0 w-3 h-3 bg-blue-400 rounded-full"></div>
                 </div>
              </div>
              <span className="font-bold text-sm md:text-base text-gray-800 dark:text-gray-200">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
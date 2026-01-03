import React from 'react';
import { Book, GraduationCap, Lightbulb, User, ArrowRight } from 'lucide-react';
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
    <section className="bg-slate-50 dark:bg-slate-950/50 py-24 transition-colors duration-300">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-brand-teal font-semibold tracking-wider uppercase text-sm">Discovery</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2">
              Explore <span className="text-brand-teal">Categories</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-slate-600 dark:text-slate-300 font-semibold hover:text-brand-teal transition-colors group">
            View All Categories <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-brand-teal/30 hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-300 cursor-pointer text-center"
            >
              <div className="w-16 h-16 mx-auto bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300 text-slate-700 dark:text-slate-300">
                <cat.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">{cat.label}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-brand-teal transition-colors">120+ Courses</p>
            </div>
          ))}
        </div>

        <button className="md:hidden w-full mt-8 py-3 rounded-xl border border-slate-200 dark:border-slate-800 font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2">
          View All Categories <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Categories;
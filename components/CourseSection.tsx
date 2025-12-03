import React from 'react';
import CourseCard from './CourseCard';
import { CourseItem } from '../types';

interface CourseSectionProps {
  title: React.ReactNode;
  subtitle?: string;
  bgGray?: boolean;
  courses: CourseItem[];
  onAccess: (id: number) => void;
}

const CourseSection: React.FC<CourseSectionProps> = ({ title, subtitle, bgGray, courses, onAccess }) => {
  return (
    <section className={`py-12 md:py-16 ${bgGray ? 'bg-gray-50 dark:bg-slate-900/50' : 'bg-transparent'} px-4 transition-colors duration-300`}>
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
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
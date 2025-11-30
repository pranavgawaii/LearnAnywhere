import React from 'react';
import CourseSection from './CourseSection';

interface CoursesPageProps {
  onCourseAccess: () => void;
}

const CoursesPage: React.FC<CoursesPageProps> = ({ onCourseAccess }) => {
  return (
    <div className="pt-8 pb-20 bg-gray-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">All Courses</h1>
        <p className="text-gray-600 dark:text-gray-400">Browse our extensive collection of educational materials.</p>
      </div>
      <CourseSection 
          title="Mathematics & Science"
          bgGray={true}
          onAccess={onCourseAccess}
      />
      <CourseSection 
          title="Computer Science & Engineering"
          bgGray={false}
          onAccess={onCourseAccess}
      />
    </div>
  );
};

export default CoursesPage;
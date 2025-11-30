import React from 'react';
import Hero from './Hero';
import FeatureBar from './FeatureBar';
import Categories from './Categories';
import CourseSection from './CourseSection';

interface HomeProps {
  onJoinClick: () => void;
  onNavigate: (page: string) => void;
  onCourseAccess: () => void;
}

const Home: React.FC<HomeProps> = ({ onJoinClick, onNavigate, onCourseAccess }) => {
  return (
    <>
      <Hero onJoinClick={onJoinClick} />
      <FeatureBar onNavigate={onNavigate} />
      <Categories />
      
      <div className="bg-gray-50/50 dark:bg-slate-900/50 pb-20 transition-colors duration-300">
        <CourseSection 
          title={
            <>
              Top-Selling Courses, <span className="text-brand-teal">Loved</span> By <span className="text-brand-teal">Students</span>!
            </>
          }
          bgGray={true}
          onAccess={onCourseAccess}
        />
        
        <CourseSection 
          title={
            <>
              Other Popular <span className="text-brand-teal">Topics</span> to Explore...!
            </>
          }
          subtitle="Discover courses you like based on topics you are interested in"
          bgGray={false}
          onAccess={onCourseAccess}
        />

         <div className="container mx-auto px-4 py-12 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
             Explore More from <span className="text-brand-teal">Definite Success!</span>
           </h2>
         </div>
      </div>
    </>
  );
};

export default Home;
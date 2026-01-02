import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import CourseCard from './CourseCard';
import { courses } from '../data/courses';

interface CoursesPageProps {
  onCourseAccess: (id: number) => void;
}

const CoursesPage: React.FC<CoursesPageProps> = ({ onCourseAccess }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('recommended');


  // Extract unique categories
  const categories = ['All', ...new Set(courses.map(course => course.category || 'Other'))];

  // Filter courses based on search and category
  const filteredCourses = useMemo(() => {
    let result = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (sortBy === 'price-low') {
      result.sort((a, b) => {
        const priceA = parseInt(a.price?.replace(/[^0-9]/g, '') || '0');
        const priceB = parseInt(b.price?.replace(/[^0-9]/g, '') || '0');
        return priceA - priceB;
      });
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => {
        const priceA = parseInt(a.price?.replace(/[^0-9]/g, '') || '0');
        const priceB = parseInt(b.price?.replace(/[^0-9]/g, '') || '0');
        return priceB - priceA;
      });
    } else if (sortBy === 'rating') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);


  return (
    <div className="pt-8 pb-20 bg-gray-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Our <span className="text-brand-teal">Courses</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Browse our extensive collection of educational materials designed to help you master new skills.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 mb-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

            {/* Categories (Desktop) */}
            <div className="hidden md:flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0 max-w-2xl">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === category
                      ? 'bg-brand-teal text-white shadow-md'
                      : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-sm font-medium text-gray-600 dark:text-gray-300 border-none focus:ring-0 cursor-pointer"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Search Input */}

            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-brand-teal text-sm placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-white font-medium transition-all"
              />
            </div>

            {/* Mobile Category Dropdown (Simplified) */}
            <div className="md:hidden w-full">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2.5 bg-gray-100 dark:bg-slate-800 rounded-xl border-none text-gray-800 dark:text-white text-sm font-medium focus:ring-2 focus:ring-brand-teal"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="max-w-6xl mx-auto mb-6 px-2">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
            Showing {filteredCourses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} onAccess={onCourseAccess} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gray-100 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No courses found</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSortBy('recommended'); }}

              className="mt-6 text-brand-teal font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
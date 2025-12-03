import React, { useState } from 'react';
import { Clock, BookOpen, BarChart, Globe, Star, CheckCircle, PlayCircle, Lock, Share2, Heart } from 'lucide-react';
import { CourseItem } from '../types';
import { courses } from '../data/courses';

interface CourseDetailsProps {
  courseId: number;
  onBack: () => void;
  onEnroll: () => void;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ courseId, onBack, onEnroll }) => {
  const course = courses.find(c => c.id === courseId);
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructor'>('overview');

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Course not found</h2>
          <button onClick={onBack} className="text-brand-teal hover:underline">Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-teal/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <button onClick={onBack} className="text-gray-400 hover:text-white mb-6 flex items-center gap-2 text-sm font-medium">
            ← Back to Courses
          </button>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{course.title}</h1>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl">{course.description}</p>
              
              <div className="flex flex-wrap gap-4 md:gap-8 text-sm text-gray-300 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={18} />
                  <span className="font-bold text-white">{course.rating}</span>
                  <span>(120 ratings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={18} />
                  <span>{course.language}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart size={18} />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>Last updated 12/2025</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" 
                  alt={course.instructor} 
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div>
                  <p className="text-xs text-gray-400">Created by</p>
                  <p className="font-semibold text-brand-teal">{course.instructor}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Tabs */}
            <div className="bg-white dark:bg-slate-900 rounded-t-2xl border-b border-gray-200 dark:border-slate-800 flex overflow-x-auto no-scrollbar">
              {['overview', 'curriculum', 'instructor'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-8 py-4 font-semibold text-sm capitalize whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab 
                      ? 'border-brand-teal text-brand-teal' 
                      : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-b-2xl shadow-sm min-h-[400px]">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What you'll learn</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <CheckCircle className="text-brand-teal shrink-0 mt-1" size={18} />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">Master the core concepts and advanced techniques in this field.</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Description</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {course.description} This course is designed to take you from beginner to advanced level. 
                      We cover everything you need to know to succeed in this field.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Whether you are a student, a professional, or just curious, this course has something for you.
                      Join thousands of other students who have already transformed their careers with this course.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'curriculum' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {course.lessons} Lessons • {course.duration} Total Length
                    </p>
                    <button className="text-brand-teal text-sm font-bold hover:underline">Expand All Sections</button>
                  </div>
                  
                  {[1, 2, 3, 4].map((section) => (
                    <div key={section} className="border border-gray-200 dark:border-slate-800 rounded-xl overflow-hidden">
                      <div className="bg-gray-50 dark:bg-slate-800/50 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-gray-900 dark:text-white">Section {section}: Introduction to Module</span>
                        </div>
                        <span className="text-xs text-gray-500">3 Lectures • 45m</span>
                      </div>
                      <div className="divide-y divide-gray-100 dark:divide-slate-800">
                        {[1, 2, 3].map((lecture) => (
                          <div key={lecture} className="p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-slate-800/30 transition-colors">
                            <div className="flex items-center gap-3">
                              <PlayCircle size={16} className="text-gray-400" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">Lecture {lecture}: Topic Overview</span>
                            </div>
                            {section === 1 && lecture === 1 ? (
                              <span className="text-xs text-brand-teal font-bold">Preview</span>
                            ) : (
                              <Lock size={14} className="text-gray-400" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'instructor' && (
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" 
                    alt={course.instructor} 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{course.instructor}</h3>
                    <p className="text-brand-teal text-sm font-medium mb-4">Senior Instructor & Industry Expert</p>
                    <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1"><Star size={14} className="fill-current" /> 4.8 Rating</div>
                      <div className="flex items-center gap-1"><Users size={14} /> 12,543 Students</div>
                      <div className="flex items-center gap-1"><PlayCircle size={14} /> 12 Courses</div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      I am passionate about teaching and have over 10 years of experience in the industry. 
                      My goal is to make complex topics easy to understand for everyone.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar (Sticky) */}
          <div className="lg:w-1/3 relative">
            <div className="sticky top-24 space-y-6">
              {/* Video Preview Card */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-800 overflow-hidden">
                <div className="relative h-48 group cursor-pointer">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <PlayCircle size={64} className="text-white opacity-90 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center text-white font-bold text-sm">Preview this course</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-end gap-3 mb-6">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{course.price}</span>
                    <span className="text-gray-400 line-through mb-1 text-sm">₹9999</span>
                    <span className="text-brand-teal font-bold text-sm mb-1">70% off</span>
                  </div>

                  <button 
                    onClick={onEnroll}
                    className="w-full bg-brand-teal text-white font-bold py-3 rounded-xl hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/20 mb-3"
                  >
                    Enroll Now
                  </button>
                  <button className="w-full bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold py-3 rounded-xl border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                    Add to Cart
                  </button>

                  <div className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <p className="font-bold text-gray-900 dark:text-white mb-2">This course includes:</p>
                    <div className="flex items-center gap-3"><PlayCircle size={16} /> {course.duration} on-demand video</div>
                    <div className="flex items-center gap-3"><BookOpen size={16} /> {course.lessons} lessons</div>
                    <div className="flex items-center gap-3"><Globe size={16} /> Full lifetime access</div>
                    <div className="flex items-center gap-3"><Award size={16} /> Certificate of completion</div>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100 dark:border-slate-800">
                    <button className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm font-medium flex items-center gap-2">
                      <Share2 size={16} /> Share
                    </button>
                    <button className="text-gray-500 hover:text-red-500 text-sm font-medium flex items-center gap-2">
                      <Heart size={16} /> Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

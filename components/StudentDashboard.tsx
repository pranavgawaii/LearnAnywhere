import React, { useState } from 'react';
import { BookOpen, Clock, Award, TrendingUp, PlayCircle, CheckCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock Data for Dashboard
const stats = [
  { id: 1, label: 'Courses in Progress', value: '4', icon: BookOpen, color: 'bg-blue-500' },
  { id: 2, label: 'Hours Learned', value: '126', icon: Clock, color: 'bg-brand-teal' },
  { id: 3, label: 'Certificates Earned', value: '2', icon: Award, color: 'bg-yellow-500' },
  { id: 4, label: 'Average Score', value: '92%', icon: TrendingUp, color: 'bg-purple-500' },
];

const enrolledCourses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    instructor: 'Dr. Angela Yu',
    progress: 75,
    totalLessons: 120,
    completedLessons: 90,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=300&auto=format&fit=crop',
    lastAccessed: '2 hours ago'
  },
  {
    id: 2,
    title: 'Data Science & Machine Learning A-Z',
    instructor: 'Kirill Eremenko',
    progress: 30,
    totalLessons: 85,
    completedLessons: 25,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop',
    lastAccessed: '1 day ago'
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    instructor: 'Gary Simon',
    progress: 10,
    totalLessons: 40,
    completedLessons: 4,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=300&auto=format&fit=crop',
    lastAccessed: '3 days ago'
  },
  {
    id: 4,
    title: 'Advanced React Patterns',
    instructor: 'Kent C. Dodds',
    progress: 0,
    totalLessons: 25,
    completedLessons: 0,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=300&auto=format&fit=crop',
    lastAccessed: 'Never'
  }
];

const upcomingTasks = [
  { id: 1, title: 'Submit React Project', course: 'Complete Web Development Bootcamp', due: 'Tomorrow, 11:59 PM', type: 'Assignment' },
  { id: 2, title: 'Data Visualization Quiz', course: 'Data Science & Machine Learning A-Z', due: 'Dec 05, 2025', type: 'Quiz' },
  { id: 3, title: 'Live Q&A Session', course: 'UI/UX Design Masterclass', due: 'Dec 08, 2025', type: 'Live Class' },
];

const StudentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'achievements'>('overview');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-8 pb-20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome back, <span className="text-brand-teal">Student!</span> 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              You've learned <span className="font-bold text-gray-900 dark:text-white">32 minutes</span> today. Keep it up!
            </p>
          </div>
          <div className="flex gap-2 bg-white dark:bg-slate-900 p-1 rounded-lg border border-gray-200 dark:border-slate-800">
            {['overview', 'courses', 'achievements'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-brand-teal text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 flex items-center gap-4">
                  <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg shadow-opacity-20`}>
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Continue Learning */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <PlayCircle className="text-brand-teal" /> Continue Learning
                </h2>
                <div className="space-y-4">
                  {enrolledCourses.slice(0, 2).map((course) => (
                    <div key={course.id} className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow cursor-pointer group">
                      <div className="w-full sm:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0 relative">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <PlayCircle className="text-white w-10 h-10" />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{course.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Instructor: {course.instructor}</p>
                        </div>
                        <div className="space-y-2 mt-4 sm:mt-0">
                          <div className="flex justify-between text-xs font-medium text-gray-600 dark:text-gray-300">
                            <span>{course.progress}% Complete</span>
                            <span>{course.completedLessons}/{course.totalLessons} Lessons</span>
                          </div>
                          <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-brand-teal h-full rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Tasks */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Calendar className="text-brand-teal" /> Upcoming Tasks
                </h2>
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-6 space-y-6">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className="flex gap-4 items-start">
                      <div className="mt-1">
                        <div className={`w-2 h-2 rounded-full ${
                          task.type === 'Assignment' ? 'bg-red-500' : 
                          task.type === 'Quiz' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`}></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{task.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{task.course}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                            task.type === 'Assignment' ? 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400' : 
                            task.type === 'Quiz' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400' : 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                          }`}>
                            {task.type}
                          </span>
                          <span className="text-xs text-gray-400">{task.due}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button className="w-full py-2 text-sm font-semibold text-brand-teal hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-colors">
                    View All Tasks
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* My Courses Tab */}
        {activeTab === 'courses' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {enrolledCourses.map((course) => (
              <div key={course.id} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-md transition-all group">
                <div className="h-48 overflow-hidden relative">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      Resume
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 line-clamp-1">{course.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Instructor: {course.instructor}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-gray-600 dark:text-gray-300">
                      <span>{course.progress}% Complete</span>
                      <span>{course.lastAccessed}</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-brand-teal h-full rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center py-20"
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 max-w-2xl mx-auto border border-gray-100 dark:border-slate-800 shadow-sm">
              <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-500">
                <Award size={40} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Your Achievements</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                You've earned 2 certificates and 5 badges so far. Keep learning to unlock more!
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 dark:bg-slate-800/50">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${i <= 2 ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white' : 'bg-gray-200 dark:bg-slate-700 text-gray-400'}`}>
                      <Award size={20} />
                    </div>
                    <span className={`text-xs font-bold ${i <= 2 ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>
                      {i <= 2 ? 'Unlocked' : 'Locked'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default StudentDashboard;

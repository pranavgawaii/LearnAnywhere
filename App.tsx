import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

import AuthModal from './components/AuthModal';
import Home from './components/Home';
import CoursesPage from './components/CoursesPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ChatBot from './components/ChatBot';
import StudentDashboard from './components/StudentDashboard';
import CourseDetails from './components/CourseDetails';
import { useToast } from './components/Toast';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; view: 'login' | 'signup' }>({
    isOpen: false,
    view: 'login'
  });

  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const { addToast } = useToast();

  const openAuth = (view: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, view });
  };

  const closeAuth = () => {
    setAuthModal({ ...authModal, isOpen: false });
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    closeAuth();
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const handleCourseAccess = (courseId?: number) => {
    if (courseId) {
      setSelectedCourseId(courseId);
      setCurrentPage('course-details');
    } else {
      // Fallback if no ID provided (e.g. from generic buttons)
      setCurrentPage('courses');
    }
  };

  const handleEnroll = () => {
    if (!isLoggedIn) {
      openAuth('signup');
      addToast("Please sign up to enroll in courses", "info");
    } else {
      addToast("Successfully enrolled! Check your dashboard.", "success");
      setCurrentPage('dashboard');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return isLoggedIn ? <StudentDashboard /> : <Home onJoinClick={() => openAuth('signup')} onNavigate={setCurrentPage} onCourseAccess={() => handleCourseAccess()} />;
      case 'course-details':
        return selectedCourseId ? (
          <CourseDetails
            courseId={selectedCourseId}
            onBack={() => setCurrentPage('courses')}
            onEnroll={handleEnroll}
          />
        ) : <CoursesPage onCourseAccess={handleCourseAccess} />;
      case 'courses':
        return <CoursesPage onCourseAccess={handleCourseAccess} />;
      case 'contact':
        return <ContactPage />;
      case 'about':
        return <AboutPage />;
      case 'home':
      default:
        return (
          <Home
            onJoinClick={() => openAuth('signup')}
            onNavigate={setCurrentPage}
            onCourseAccess={() => handleCourseAccess()} // Home generic buttons go to courses page
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-100 overflow-x-hidden transition-colors duration-300 flex flex-col">
      <ScrollToTop currentPage={currentPage} />
      <Navbar
        onOpenAuth={openAuth}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>


      <Footer />

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuth}
        initialView={authModal.view}
        onLoginSuccess={handleLoginSuccess}
      />

      <ChatBot />
    </div>
  );
};

export default App;
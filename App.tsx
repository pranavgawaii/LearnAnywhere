import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Home from './components/Home';
import CoursesPage from './components/CoursesPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ChatBot from './components/ChatBot';
import StudentDashboard from './components/StudentDashboard';

const App: React.FC = () => {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; view: 'login' | 'signup' }>({
    isOpen: false,
    view: 'login'
  });
  
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

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

  const handleCourseAccess = () => {
    if (!isLoggedIn) {
      openAuth('login');
    } else {
      // Allow access (in a real app, navigate to course details)
      alert("Welcome to the course! Access granted.");
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return isLoggedIn ? <StudentDashboard /> : <Home onJoinClick={() => openAuth('signup')} onNavigate={setCurrentPage} onCourseAccess={handleCourseAccess} />;
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
            onCourseAccess={handleCourseAccess}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-100 overflow-x-hidden transition-colors duration-300 flex flex-col">
      <Navbar 
        onOpenAuth={openAuth} 
        onNavigate={setCurrentPage}
        currentPage={currentPage}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
      
      <main className="flex-grow">
        {renderPage()}
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
import React, { useState, useEffect } from 'react';
import { X, User, Lock, Mail, Phone, Chrome } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView: 'login' | 'signup';
  onLoginSuccess: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialView, onLoginSuccess }) => {
  const [view, setView] = useState<'login' | 'signup'>(initialView);

  useEffect(() => {
    setView(initialView);
  }, [initialView, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        onLoginSuccess();
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative transform transition-all scale-100">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="pt-10 px-8 pb-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            {view === 'login' ? 'Login' : 'Sign Up'}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {view === 'login' ? 'Welcome back!' : 'Create your account'}
          </p>
        </div>

        {/* Form Body */}
        <div className="p-8 pt-2">
            {view === 'login' ? (
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Login Fields: Username, Password */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input type="text" required className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all" placeholder="Enter username" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                         <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input type="password" required className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all" placeholder="Enter password" />
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-brand-teal hover:bg-teal-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg mt-4">
                        SUBMIT
                    </button>
                </form>
            ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                     {/* Signup Fields: Username, Email, Mobile No, Password */}
                     <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input type="text" required className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-brand-teal outline-none" placeholder="Username" />
                    </div>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input type="email" required className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-brand-teal outline-none" placeholder="Email" />
                    </div>
                     <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input type="tel" required className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-brand-teal outline-none" placeholder="Mobile No." />
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input type="password" required className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-brand-teal outline-none" placeholder="Password" />
                    </div>
                    <button type="submit" className="w-full bg-brand-teal hover:bg-teal-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg mt-2">
                        SUBMIT
                    </button>
                </form>
            )}

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400">Or</span>
                </div>
            </div>

            <button className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-white font-semibold py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-3">
               <Chrome size={20} className="text-blue-500"/>
               Sign in with Google
            </button>
            
            <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
               {view === 'login' ? (
                   <>Don't have an account? <button onClick={() => setView('signup')} className="text-brand-teal font-bold hover:underline ml-1">Sign up</button></>
               ) : (
                   <>Already have an account? <button onClick={() => setView('login')} className="text-brand-teal font-bold hover:underline ml-1">Login</button></>
               )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
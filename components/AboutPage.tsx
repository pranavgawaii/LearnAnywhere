import React from 'react';
import { Award, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const campusImages = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg"
];

const AboutPage: React.FC = () => {
  return (
    <div className="py-20 bg-white dark:bg-slate-950 min-h-screen">
       <div className="container mx-auto px-4">
         <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Zenith</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We are dedicated to providing world-class education accessible to everyone, everywhere. 
              Our mission is to empower students with the skills they need to succeed in their careers and life.
            </p>
         </div>

         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            <div className="text-center p-8 rounded-2xl bg-sky-50 dark:bg-slate-900">
               <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <Award size={32} />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Expert Instructors</h3>
               <p className="text-gray-600 dark:text-gray-400">Learn from industry experts who are passionate about teaching.</p>
            </div>
             <div className="text-center p-8 rounded-2xl bg-sky-50 dark:bg-slate-900">
               <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <Users size={32} />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Community Driven</h3>
               <p className="text-gray-600 dark:text-gray-400">Join a supportive community of learners and mentors.</p>
            </div>
             <div className="text-center p-8 rounded-2xl bg-sky-50 dark:bg-slate-900">
               <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <Globe size={32} />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Global Access</h3>
               <p className="text-gray-600 dark:text-gray-400">Access our courses from anywhere in the world, at any time.</p>
            </div>
         </div>

         <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
              alt="Team" 
              className="w-full h-96 object-cover"
            />
         </div>
       </div>

       {/* Campus Gallery Section */}
       <div className="mt-24 mb-10 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Our Learning Environment
        </h2>
        
        <div className="relative w-full py-4">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-slate-950 z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-slate-950 z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 30 
            }}
          >
            {[...campusImages, ...campusImages].map((img, index) => (
              <div 
                key={index} 
                className="min-w-[300px] md:min-w-[400px] h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-800 shrink-0"
              >
                <img 
                  src={img} 
                  alt={`Campus view ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
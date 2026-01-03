import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    content: "The courses at Nova completely transformed my career. The instructors are top-notch and the curriculum is very practical.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Analyst",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    content: "I was skeptical about online learning, but the interactive sessions and community support here are unmatched. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    content: "The design courses are fantastic. I learned so much about modern UI/UX principles and built a portfolio that got me hired.",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative z-10">
          {/* Vibrant Backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-[80px] -z-10"></div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-teal font-semibold tracking-wider uppercase text-sm"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2"
          >
            What Our Students <span className="text-brand-teal">Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear from our community of learners who have achieved their goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl relative hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-800 hover:border-brand-teal/20 dark:hover:border-brand-teal/30 hover:-translate-y-2 group"
            >
              <div className="absolute -top-6 left-8 bg-brand-teal text-white p-3 rounded-2xl shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                <Quote size={20} fill="currentColor" />
              </div>

              <div className="mt-6 flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 dark:text-gray-700'}`}
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-50 dark:border-slate-800/50">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-4 border-gray-50 dark:border-slate-800"
                  />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-brand-teal font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

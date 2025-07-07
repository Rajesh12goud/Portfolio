import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, GraduationCap, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <Code2 className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {personalInfo.about}
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <Mail className="w-5 h-5 text-blue-600" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span>Masters in Computer Science </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-purple-400 to-blue-600 rounded-full blur-xl opacity-30"></div>
              
              {/* Profile image placeholder */}
               <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
               <img
               src="https://i.postimg.cc/26PYgQMW/IMG-6212.jpg"
               alt="Rajesh_Pedagoni"
                className="w-full h-full object-cover"
                 />
                </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  rotate: [0, 360],
                  y: [0, -10, 0],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Code2 className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  rotate: [360, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <span className="text-white font-bold">5+</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
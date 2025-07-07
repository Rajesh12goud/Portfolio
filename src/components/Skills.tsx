import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Settings } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('backend');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'devops', label: 'DevOps', icon: Settings },
    { id: 'cloud', label: 'Cloud', icon: Cloud },
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Code className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Technical Skills
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Technologies I work with to build amazing solutions
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-4 h-4" />
                <span className="font-medium text-sm">{category.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Skills grid - more compact */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                <motion.div
                  className="h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
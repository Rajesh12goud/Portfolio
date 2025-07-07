import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const controls = useAnimation();

  const typewriterText = personalInfo.description;

  // Skill icons with pill shapes and colorful gradients like in the image
  const skillIcons = [
    { name: 'Python', icon: '🐍', gradient: 'from-blue-400/80 to-orange-500/80' },
    { name: 'SQL', icon: '🗃️', gradient: 'from-blue-400/80 to-blue-500/80' },
    { name: 'Power BI', icon: '📊', gradient: 'from-blue-400/80 to-emerald-500/80' },
    { name: 'AI & ML', icon: '🤖', gradient: 'from-blue-400/80 to-purple-500/80' },
    { name: 'AWS', icon: '☁️', gradient: 'from-blue-400/80 to-red-500/80' },
    { name: 'React', icon: '⚛️', gradient: 'from-blue-400/80 to-indigo-500/80' },
    { name: 'TypeScript', icon: '📘', gradient: 'from-blue-400/80 to-green-500/80' },
    { name: 'Node.js', icon: '🟢', gradient: 'from-blue-400/80 to-pink-500/80' },
    { name: 'Java', icon: '☕', gradient: 'from-blue-400/80 to-red-500/80' },
    { name: 'Spring Boot', icon: '🍃', gradient: 'from-blue-400/80 to-teal-500/80' },
    { name: 'Docker', icon: '🐳', gradient: 'from-blue-400/80 to-cyan-500/80' },
    { name: 'Kafka', icon: '📈', gradient: 'from-blue-400/80 to-indigo-500/80' },
    { name: 'MongoDB', icon: '🗄️', gradient: 'from-blue-400/80 to-green-500/80' },
    { name: 'Redis', icon: '🔴', gradient: 'from-blue-400/80 to-red-500/80' },
  ];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < typewriterText.length) {
        setCurrentText(typewriterText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [typewriterText]);

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'github':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'file-text':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22m36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent tracking-wide"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {personalInfo.role}
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {personalInfo.experience}
          </motion.p>
          
          <motion.div
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 min-h-[2.5rem] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="mr-2">🚀</span>
            <span>
              {currentText}
              {isTyping && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-1 text-blue-600"
                >
                  |
                </motion.span>
              )}
            </span>
          </motion.div>

          {/* Pill-shaped Skill Icons with wave animations - exactly like the image */}
          <motion.div
            className="max-w-5xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {/* First row */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {skillIcons.slice(0, 7).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`relative px-6 py-3 rounded-full text-white font-medium flex items-center space-x-2 bg-gradient-to-r ${skill.gradient} shadow-lg backdrop-blur-sm border border-white/20`}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    animation: `float${index} 3s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm font-semibold">{skill.name}</span>
                  
                  {/* Glossy effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-full pointer-events-none"></div>
                  
                  {/* Subtle glow */}
                  <div className={`absolute inset-0 rounded-full blur-sm bg-gradient-to-r ${skill.gradient} opacity-50 -z-10`}></div>
                </motion.div>
              ))}
            </div>
            
            {/* Second row */}
            <div className="flex flex-wrap justify-center gap-3">
              {skillIcons.slice(7).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`relative px-6 py-3 rounded-full text-white font-medium flex items-center space-x-2 bg-gradient-to-r ${skill.gradient} shadow-lg backdrop-blur-sm border border-white/20`}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.9 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    animation: `float${index + 7} 2.5s ease-in-out infinite`,
                    animationDelay: `${(index + 7) * 0.2}s`
                  }}
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm font-semibold">{skill.name}</span>
                  
                  {/* Glossy effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-full pointer-events-none"></div>
                  
                  {/* Subtle glow */}
                  <div className={`absolute inset-0 rounded-full blur-sm bg-gradient-to-r ${skill.gradient} opacity-50 -z-10`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getSocialIcon(link.icon)}
                <span className="font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for floating animations */}
      <style jsx>{`
        @keyframes float0 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes float1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes float3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-7px); } }
        @keyframes float4 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-9px); } }
        @keyframes float5 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-5px); } }
        @keyframes float6 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes float7 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        @keyframes float8 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-7px); } }
        @keyframes float9 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-9px); } }
        @keyframes float10 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-5px); } }
        @keyframes float11 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes float12 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        @keyframes float13 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
      `}</style>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400">
              Full Stack Developer passionate about building scalable solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">{personalInfo.location}</p>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
            
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/Rajesh12goud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rajesh-p-0291a628b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2025 {personalInfo.name}. Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using React & TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-semibold">Let's Connect!</h2>
          <p>Open to freelance, full-time & remote opportunities.</p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-blue-500">
            <FaEnvelope />
          </a>
        </motion.div>

        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Aasib — MERN Stack Developer</p>
      </div>
    </footer>
  );
}

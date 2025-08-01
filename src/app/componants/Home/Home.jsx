'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import Image from 'next/image';
import devImage from '../../Assses/images/image1bg.png'; 

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-50 flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

        {/* === Text Section === */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Hi, I'm <span className="text-indigo-600">Aasib</span> 👋
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I'm a <strong>MERN Stack Developer</strong> and <strong>Software Engineer</strong> focused on building fast, scalable, and user-friendly web applications.
          </p>
          <p className="text-gray-600 mb-4">
            I specialize in <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, and <strong>Node.js</strong> — delivering modern, responsive full-stack applications with clean, maintainable code.
          </p>
          <p className="text-gray-600 mb-4">
            From dashboards and eCommerce apps to full-featured admin panels and APIs, I blend technical skills with a creative mindset to solve real-world challenges.
          </p>
          <p className="text-gray-600 mb-6">
            Let’s collaborate to build something impactful 🚀
          </p>

          <div className="flex gap-4">
            <a
              href="/AASIB_KHAN_RESUME.docx"
              download="AASIB_KHAN_RESUME.docx" 
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 shadow"
            >
              📄 Download Resume
            </a>
            <a
              href="#contact"
              className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-50 transition"
            >
              🤝 Hire Me
            </a>
          </div>
        </motion.div>

        {/* === Image + Icons Section === */}
        <motion.div
          className="relative flex-1 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <Image
              src={devImage}
              alt="Developer Illustration"
              width={280}
              height={280}
              className="rounded-full shadow-2xl border-4 border-indigo-200"
            />

            {/* Floating Icons */}
            <motion.div
              className="absolute top-[-10px] left-[-10px] text-green-600 text-3xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <SiMongodb />
            </motion.div>
            <motion.div
              className="absolute top-2 right-0 text-gray-800 text-3xl"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.2 }}
            >
              <SiExpress />
            </motion.div>
            <motion.div
              className="absolute bottom-6 left-[-20px] text-blue-600 text-4xl"
              animate={{ x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.4 }}
            >
              <FaReact />
            </motion.div>
            <motion.div
              className="absolute bottom-4 right-4 text-green-700 text-4xl"
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.6 }}
            >
              <FaNodeJs />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500 text-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.8 }}
            >
              <FaJs />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

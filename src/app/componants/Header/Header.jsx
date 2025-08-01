'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Contact', href: '/pages/contact' },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-extrabold text-blue-600"
        >
          Aasib | Portfolio
        </motion.h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-800 font-medium">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
            >
              <Link
                href={item.href}
                className="transition-all duration-300 hover:text-blue-600 text-lg"
                style={{ textDecoration: 'none' }}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-blue-600 focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white px-4 pt-2 pb-4 shadow-md"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              className="py-2"
            >
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-800 text-base font-medium transition-colors duration-300 hover:text-blue-600"
                style={{ textDecoration: 'none' }}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      )}
    </header>
  );
}

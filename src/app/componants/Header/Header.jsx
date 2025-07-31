'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
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

        <nav className="flex gap-4 md:gap-6 text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                href={item.href}
                className="transition-colors duration-300 hover:text-blue-500"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  );
}
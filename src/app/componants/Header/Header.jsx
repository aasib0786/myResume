'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-blue-600"
        >
          Aasib | Portfolio
        </motion.h1>

        <nav className="space-x-6 text-gray-700 font-medium">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, i) => (
            <motion.span
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link href={`#${item.toLowerCase()}`} className="hover:text-blue-500">
                {item}
              </Link>
            </motion.span>
          ))}
        </nav>
      </div>
    </header>
  );
}

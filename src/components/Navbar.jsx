// components/Navbar.jsx
import { motion } from 'framer-motion';
import { navLinks } from '../constants';

export const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed w-full bg-slate-800/80 backdrop-blur-md z-40 shadow-md"
  >
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <motion.span 
        whileHover={{ scale: 1.05 }}
        className="text-teal-400 font-bold text-xl glow-text"
      >
        HarshaM
      </motion.span>
      
      <div className="flex gap-8">
        {navLinks.map((item) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            whileHover={{ scale: 1.1, color: '#2dd4bf' }}
            className="hover:text-teal-400 transition-colors text-gray-300"
          >
            {item.title}
          </motion.a>
        ))}
      </div>
    </div>
  </motion.nav>
);
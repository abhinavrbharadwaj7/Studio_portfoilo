// components/Navbar.jsx
import { motion } from 'framer-motion';
import { navLinks } from '../constants';

export const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed w-full bg-black/80 backdrop-blur-md z-40"
  >
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <motion.span 
        whileHover={{ scale: 1.05 }}
        className="text-white font-bold text-xl"
      >
        HarshaM
      </motion.span>
      
      <div className="flex gap-8">
        {navLinks.map((item) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            whileHover={{ scale: 1.1, color: '#ffffff' }}
            className="hover:text-white transition-colors text-gray-400"
          >
            {item.title}
          </motion.a>
        ))}
      </div>
    </div>
  </motion.nav>
);
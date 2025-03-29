// components/Navbar.jsx
import { motion } from 'framer-motion';
import { navLinks } from '../constants';
import { FilmIcon, PlayIcon, AcademicCapIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const getIcon = (iconName) => {
  const icons = {
    FilmIcon: FilmIcon,
    PlayIcon: PlayIcon,
    AcademicCapIcon: AcademicCapIcon,
    EnvelopeIcon: EnvelopeIcon,
  };
  const Icon = icons[iconName];
  return Icon ? <Icon className="w-5 h-5" /> : null;
};

export const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed w-full backdrop-blur-md z-40 bg-white/[0.02] border-b border-white/10"
  >
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <motion.span 
        whileHover={{ scale: 1.05 }}
        className="text-white font-bold text-xl tracking-wider cursor-pointer"
        onClick={() => window.location.reload()}
      >
        HarshaM
      </motion.span>
      
      <div className="flex gap-4 bg-white/[0.02] backdrop-blur-sm p-2 rounded-full border border-white/10">
        {navLinks.map((item) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
          >
            {getIcon(item.icon)}
            <span className="font-medium">{item.title}</span>
          </motion.a>
        ))}
      </div>
    </div>
  </motion.nav>
);
// components/SocialIcons.jsx
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

const socialLinks = [
  { url: 'https://linkedin.com', bgColor: 'transparent', fgColor: '#9CA3AF' },  // gray-400
  { url: 'https://vimeo.com', bgColor: 'transparent', fgColor: '#9CA3AF' },
  { url: 'https://instagram.com', bgColor: 'transparent', fgColor: '#9CA3AF' },
];

export const SocialIcons = () => (
  <div className="flex space-x-4">
    {socialLinks.map((link, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <SocialIcon
          url={link.url}
          bgColor={link.bgColor}
          fgColor={link.fgColor}
          style={{ height: 40, width: 40 }}
          className="hover:opacity-80 transition-opacity"
        />
      </motion.div>
    ))}
  </div>
);
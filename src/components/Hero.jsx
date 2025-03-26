// components/Hero.jsx
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => (
  <section className="min-h-screen flex items-center justify-center px-8 bg-black">
    <div className="text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-6 text-white"
      >
        Visual Storyteller
      </motion.h1>
      
      <TypeAnimation
        sequence={[
          'Painting with Light',
          2000,
          'Crafting Emotions',
          2000,
          'Building Worlds',
          2000,
        ]}
        wrapper="div"
        speed={50}
        className="text-3xl text-gray-400 mb-8"
        repeat={Infinity}
      />

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="inline-block bg-gray-700 rounded-lg"
      >
        <button className="px-8 py-3 rounded-lg border-2 border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black transition-colors">
          View Showreel
        </button>
      </motion.div>
    </div>
  </section>
);
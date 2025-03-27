// components/Hero.jsx
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => (
  <section className="min-h-screen flex items-center justify-center px-8 bg-black">
    <div className="text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-2xl text-gray-400 mb-4">Hie filmmakers!!!</h2>
        <h1 className="text-5xl font-bold mb-6 text-white">
          I am Harsha Mallikarjuna
        </h1>
        <p className="text-xl text-gray-400">
          A cinematographer trying to master art of visual story telling, 
          a graduate from Annapurna studio.
        </p>
      </motion.div>
      
      <TypeAnimation
        sequence={[
          'Cinematography is painting with light and colours 📽',
          3000,
          'Crafting Emotions through Visual Poetry',
          2000,
          'Building Worlds Frame by Frame',
          2000,
        ]}
        wrapper="div"
        speed={50}
        className="text-3xl text-gray-400 mb-12"
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
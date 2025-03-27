// components/Hero.jsx
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center px-8 bg-black overflow-hidden">
    {/* Background gradient circles */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -left-[10%] top-[20%] w-[500px] h-[500px] rounded-full bg-purple-500/30 blur-[120px]" />
      <div className="absolute -right-[10%] top-[30%] w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-[120px]" />
      <div className="absolute left-[20%] -bottom-[10%] w-[500px] h-[500px] rounded-full bg-teal-500/30 blur-[120px]" />
    </div>

    {/* Content with glass effect */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-10 text-center max-w-4xl mx-auto backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-2xl p-8 shadow-2xl border border-white/20"
    >
      <div className="mb-8">
        <h2 className="text-2xl text-gray-200 mb-4">Hie filmmakers!!!</h2>
        <h1 className="text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
          I am Harsha Mallikarjuna
        </h1>
        <p className="text-xl text-gray-300">
          A cinematographer trying to master art of visual story telling, 
          a graduate from Annapurna studio.
        </p>
      </div>
      
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
        className="text-3xl bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent mb-12"
        repeat={Infinity}
      />

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="inline-block"
      >
        <button className="px-8 py-3 rounded-lg border border-white/50 text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
          View Showreel
        </button>
      </motion.div>
    </motion.div>
  </section>
);
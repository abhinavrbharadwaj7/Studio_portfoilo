// App.js
import { motion, useScroll } from 'framer-motion';
import { Navbar, Hero, Projects, Commercials, Skills, Contact } from './components';
import { ThreeBackground } from './components/ThreeBackground';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Three.js Background */}
      <ThreeBackground />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-teal-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Commercials />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
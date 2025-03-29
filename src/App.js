// App.js
import { motion, useScroll } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar, Hero, Projects, Commercials, Skills, Contact } from './components';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <ThemeProvider>
      <div className="relative bg-black text-white min-h-screen">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Projects />
          <Commercials />
          <Skills />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
// App.js
import { motion, useScroll } from 'framer-motion';
import { Navbar, Hero, Projects, Commercials, Skills, Contact } from './components';
import { ThreeBackground } from './components/ThreeBackground';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <ThemeProvider>
      <div className="relative bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen transition-colors duration-200">
        <ThreeBackground />
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gray-400 dark:bg-gray-600 origin-left z-50"
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
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;
// App.js
import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { Navbar, Hero, Projects, Commercials, Skills, Contact } from './components';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="text-center text-red-500 mt-20">Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <ErrorBoundary>
      <main className="relative">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-teal-400 origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
        <Navbar />
        <Hero />
        <Projects />
        <Commercials />
        <Skills />
        <Contact />
      </main>
    </ErrorBoundary>
  );
}

export default App;
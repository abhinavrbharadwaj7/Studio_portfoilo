// components/Projects.jsx
import { motion } from 'framer-motion';
import { projects } from '../constants';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: { 
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 0.8 }
  }
};

export const Projects = () => (
  <section id="projects" className="py-20 px-8">
    <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700/50 transition-colors"
        >
          <div className="h-48 bg-slate-600 rounded-lg mb-4 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-white/80 mb-4">{project.role}</p>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <motion.a
            whileHover={{ x: 5 }}
            href={project.link}
            className="text-white flex items-center gap-2 hover:text-white/80"
          >
            View Project
            <ArrowRightIcon className="w-4 h-4" />
          </motion.a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
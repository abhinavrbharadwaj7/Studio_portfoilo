import { motion } from 'framer-motion';
import { commercials } from '../constants';

const commercialVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const Commercials = () => (
  <section id="commercials" className="py-20 px-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">Commercial Work</h2>
      
      <motion.div
        variants={commercialVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto"
      >
        {commercials.map((commercial) => (
          <motion.div
            key={commercial.id}
            variants={itemVariants}
            className="w-full max-w-sm mx-auto group relative overflow-hidden rounded-xl hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 bg-black/40 border border-white/10"
          >
            <div className="aspect-[4/3] bg-black overflow-hidden">
              <img
                src={commercial.image}
                alt={commercial.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2">{commercial.title}</h3>
              <p className="text-white/80 text-sm mb-4">{commercial.role}</p>
              <motion.a
                whileHover={{ x: 5 }}
                href={commercial.link}
                className="flex items-center gap-2 text-sm text-white hover:text-white/80"
              >
                View Case Study
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
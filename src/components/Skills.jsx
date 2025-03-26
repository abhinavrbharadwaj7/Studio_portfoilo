// components/Skills.jsx
import { motion } from 'framer-motion';

export const Skills = () => {
  const skills = [
    { name: 'Lighting Design', level: 95 },
    { name: 'Color Grading', level: 90 },
    { name: 'Camera Operation', level: 85 },
    { name: 'Visual Storytelling', level: 95 },
  ];

  return (
    <section id="skills" className="py-20 px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-teal-400 glow-text">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-gray-300">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-teal-400 rounded-full shadow-md shadow-teal-400/50"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
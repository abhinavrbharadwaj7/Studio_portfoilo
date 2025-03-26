import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { SocialIcons } from './SocialIcons';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.8 }
  }
};

export const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      reset(); // Clear form after submission
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="py-20 px-8 bg-slate-800/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Let's Collaborate</h2>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.form 
            onSubmit={handleSubmit(onSubmit)}
            variants={formVariants}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="w-full bg-slate-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">Name is required</p>}
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="w-full bg-slate-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">Valid email is required</p>}
              </div>
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows="5"
                {...register("message", { required: true })}
                className="w-full bg-slate-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">Message is required</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-teal-400/20 text-teal-400 py-3 rounded-lg border-2 border-teal-400 hover:bg-teal-400/10 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center space-x-6 pt-8"
          >
            <SocialIcons />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
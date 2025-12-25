import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';

const CTA = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-[#4c6dfe] to-[#3d5ce6] relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-white rounded-full"
            style={
              {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }
            }
            animate={
              {
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }
            }
            transition={
              {
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }
            }
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Start Your Secure Journey Today</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl font-light text-white mb-6"
        >
          Ready to Take Control of Your
          <br />
          <span className="font-normal">Career Documents?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
        >
          Join professionals and enterprises who are already securing their future
          with CareerVault's enterprise-grade platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-white text-[#4c6dfe] hover:bg-gray-50 px-10 py-7 text-lg group"
            style={{ transition: 'all 0.3s ease' }}
          >
            Sign Up Today
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1" style={{ transition: 'transform 0.3s ease' }} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg"
            style={{ transition: 'all 0.3s ease' }}
          >
            Talk to Sales
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/70 text-sm mt-8"
        >
          No credit card required • Start free trial • Cancel anytime
        </motion.p>
      </div>
    </section>
  );
};

export default CTA;

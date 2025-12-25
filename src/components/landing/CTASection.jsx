import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../ui/button';

const CTASection = () => {
  const benefits = [
    'Completely free forever',
    'No credit card required',
    'Unlimited storage',
    'Enterprise-grade security',
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-[#4c6dfe] to-[#3d5ce6] relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-light mb-6 tracking-tight text-white"
        >
          Start Organizing
          <br />
          <span className="font-normal">Your Career Today</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto"
        >
          Join the future of career document management.
          <br className="hidden md:block" />
          No credit card. No hidden fees. Just secure storage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="bg-white text-[#4c6dfe] hover:bg-gray-100 px-12 py-7 text-base font-medium shadow-lg group"
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2 text-white/90">
              <Check className="w-4 h-4" />
              <span className="font-light">{benefit}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

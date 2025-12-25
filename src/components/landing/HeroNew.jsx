import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const HeroNew = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      {/* Animated arrow background */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-10 w-[400px] h-[400px] opacity-5"
      >
        <img src="/arrow-icon.png" alt="" className="w-full h-full object-contain" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-20 left-10 w-[300px] h-[300px] opacity-5"
      >
        <img src="/arrow-icon.png" alt="" className="w-full h-full object-contain transform scale-x-[-1]" />
      </motion.div>
      
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4c6dfe]/5 via-white to-white" />
      
      {/* Elegant geometric patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 border border-[#4c6dfe] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] border border-[#4c6dfe] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1.1] tracking-tight"
        >
          Your Career,
          <br />
          <span className="!font-normal text-[#4c6dfe]">Perfectly Organized</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Store, protect, and share your career documents
          <br className="hidden md:block" />
          with military-grade encryption. Completely free, forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="bg-[#4c6dfe] hover:bg-[#3d5ce6] text-white px-12 py-7 text-base font-medium shadow-lg shadow-[#4c6dfe]/20 group"
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center gap-12 text-sm text-gray-500"
        >
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-[#4c6dfe] rounded-full" />
            <span>Always Free</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-[#4c6dfe] rounded-full" />
            <span>No Credit Card</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-[#4c6dfe] rounded-full" />
            <span>End-to-End Encrypted</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroNew;

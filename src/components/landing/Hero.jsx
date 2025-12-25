import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = () => {
  const floatingIcons = [
    { Icon: Shield, delay: 0, x: -20, y: -30 },
    { Icon: Lock, delay: 0.2, x: 20, y: -20 },
    { Icon: FileCheck, delay: 0.4, x: 0, y: 30 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9ff] via-white to-[#f0f4ff]" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#4c6dfe]/20 rounded-full"
            style={
              {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }
            }
            animate={
              {
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }
            }
            transition={
              {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }
            }
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        {/* Floating icons */}
        <div className="relative inline-block mb-12">
          {floatingIcons.map(({ Icon, delay, x, y }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + delay, duration: 0.6 }}
              className="absolute"
              style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
            >
              <motion.div
                animate={
                  {
                    y: [0, -10, 0],
                  }
                }
                transition={
                  {
                    duration: 2,
                    repeat: Infinity,
                    delay: delay,
                  }
                }
                className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
              >
                <Icon className="w-8 h-8 text-[#4c6dfe]" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Secure Your Career.
            <br />
            <span className="font-normal bg-gradient-to-r from-[#4c6dfe] to-[#6b8cfe] bg-clip-text text-transparent">
              Share with Confidence.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          The end-to-end encrypted platform for managing, protecting, and
          selectively sharing your most sensitive career documents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-[#4c6dfe] hover:bg-[#3d5ce6] text-white px-8 py-6 text-lg"
            style={{ transition: 'all 0.3s ease' }}
          >
            Get Started for Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#4c6dfe] text-[#4c6dfe] hover:bg-[#4c6dfe]/5 px-8 py-6 text-lg"
            style={{ transition: 'all 0.3s ease' }}
          >
            Request a Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center justify-center space-x-8 text-sm text-gray-500"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#4c6dfe] rounded-full" />
            <span>End-to-End Encrypted</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#4c6dfe] rounded-full" />
            <span>SOC2 & GDPR Ready</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#4c6dfe] rounded-full" />
            <span>Zero Trust Architecture</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

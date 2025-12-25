import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

const SecurityBanner = () => {
  const badges = [
    { icon: Shield, label: 'SOC 2 Standards' },
    { icon: Lock, label: 'GDPR Compliant' },
    { icon: Eye, label: 'ISO 27001 Ready' },
    { icon: FileCheck, label: 'Bank-Level Security' },
  ];

  return (
    <section className="py-24 bg-[#4c6dfe] relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Built with <span className="font-normal">Enterprise Standards</span>
          </h2>
          <p className="text-xl text-white/80 font-light max-w-2xl mx-auto">
            Your documents are protected with industry-leading security practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-white mx-auto mb-4" />
                <p className="text-white font-light text-lg">{badge.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecurityBanner;

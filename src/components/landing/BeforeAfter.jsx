import { motion } from 'framer-motion';
import { X, FolderOpen, Mail, HardDrive, ArrowRight, Shield, Search, Share2, CheckCircle } from 'lucide-react';

const BeforeAfter = () => {
  const beforeItems = [
    { icon: Mail, label: 'Resume buried in email', color: 'text-red-500' },
    { icon: FolderOpen, label: 'Scattered across folders', color: 'text-orange-500' },
    { icon: HardDrive, label: 'Multiple cloud services', color: 'text-yellow-600' },
    { icon: X, label: 'No version tracking', color: 'text-red-500' },
  ];

  const afterItems = [
    { icon: Shield, label: 'All documents encrypted', color: 'text-[#4c6dfe]' },
    { icon: Search, label: 'Find anything instantly', color: 'text-[#4c6dfe]' },
    { icon: Share2, label: 'Share with one click', color: 'text-[#4c6dfe]' },
    { icon: CheckCircle, label: 'Complete audit trail', color: 'text-[#4c6dfe]' },
  ];

  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4c6dfe]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4c6dfe]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            From <span className="font-normal text-red-500">Chaos</span> to{' '}
            <span className="font-normal text-[#4c6dfe]">Clarity</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            See how CareerVault transforms document management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Before Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-10 shadow-lg border-2 border-red-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-light text-gray-900">Before</h3>
                <div className="text-red-500 bg-red-50 px-4 py-2 rounded-full text-sm font-medium">
                  Disorganized
                </div>
              </div>

              <div className="space-y-6">
                {beforeItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <span className="text-gray-700 font-light">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Messy illustration */}
              <div className="mt-8 relative h-32 bg-gray-100 rounded-xl overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: [0, Math.random() * 10 - 5, 0],
                      y: [0, Math.random() * 10 - 5, 0],
                      rotate: [0, Math.random() * 20 - 10, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random(),
                    }}
                    className="absolute w-16 h-20 bg-gray-300 rounded opacity-30"
                    style={{
                      left: `${Math.random() * 80}%`,
                      top: `${Math.random() * 60}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Arrow indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 justify-center"
          >
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-12 h-12 text-[#4c6dfe]" />
            </motion.div>
          </motion.div>

          {/* After Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-10 shadow-lg border-2 border-[#4c6dfe]/20">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-light text-gray-900">After</h3>
                <div className="text-[#4c6dfe] bg-[#4c6dfe]/10 px-4 py-2 rounded-full text-sm font-medium">
                  Organized
                </div>
              </div>

              <div className="space-y-6">
                {afterItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-[#4c6dfe]/5 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-[#4c6dfe]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <span className="text-gray-700 font-light">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Organized illustration */}
              <div className="mt-8 relative h-32 bg-gradient-to-br from-[#4c6dfe]/10 to-[#4c6dfe]/5 rounded-xl overflow-hidden flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="grid grid-cols-3 gap-2"
                >
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="w-10 h-12 bg-[#4c6dfe]/20 rounded"
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

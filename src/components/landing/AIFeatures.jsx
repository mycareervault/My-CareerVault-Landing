import { motion } from 'framer-motion';
import { Sparkles, Brain, Zap, Target } from 'lucide-react';

const AIFeatures = () => {
  const aiFeatures = [
    {
      icon: Brain,
      title: 'Smart Categorization',
      description: 'AI automatically organizes your documents into intuitive categories',
      animation: 'scale',
    },
    {
      icon: Zap,
      title: 'Instant Search',
      description: 'Find any document in seconds with AI-powered semantic search',
      animation: 'pulse',
    },
    {
      icon: Target,
      title: 'Auto-Tagging',
      description: 'Documents are automatically tagged with relevant keywords',
      animation: 'bounce',
    },
    {
      icon: Sparkles,
      title: 'Smart Suggestions',
      description: 'Get intelligent recommendations for document organization',
      animation: 'spin',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-[#4c6dfe]/5 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-[#4c6dfe]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-[#4c6dfe]/10 px-5 py-2 rounded-full mb-8 border border-[#4c6dfe]/20"
          >
            <Sparkles className="w-4 h-4 text-[#4c6dfe]" />
            <span className="text-sm text-[#4c6dfe] font-medium">AI-Powered Intelligence</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Built with <span className="font-normal text-[#4c6dfe]">Artificial Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Our AI engine works behind the scenes to make document management effortless.
            <br className="hidden md:block" />
            No manual sorting. No searching through folders. Just intelligent organization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 h-full">
                  {/* Animated icon */}
                  <motion.div
                    animate={{
                      scale: feature.animation === 'scale' ? [1, 1.1, 1] : 1,
                      y: feature.animation === 'bounce' ? [0, -10, 0] : 0,
                      rotate: feature.animation === 'spin' ? [0, 360] : 0,
                    }}
                    transition={{
                      duration: feature.animation === 'spin' ? 20 : 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4c6dfe] to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-[#4c6dfe]/20"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-normal mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4c6dfe]/0 to-purple-600/0 group-hover:from-[#4c6dfe]/5 group-hover:to-purple-600/5 rounded-3xl transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI Processing visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden"
        >
          {/* Animated background lines */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ x: [-100, 1000] }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="absolute h-px bg-[#4c6dfe]"
                style={{ top: `${20 + i * 20}%` }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Brain className="w-8 h-8 text-[#4c6dfe]" />
              </motion.div>
              <h3 className="text-2xl font-light text-gray-900">
                AI Processing in <span className="font-normal text-[#4c6dfe]">Real-Time</span>
              </h3>
            </div>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              Every document you upload is analyzed by our AI engine within seconds,
              ensuring perfect organization without any manual effort from you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIFeatures;

import { motion } from 'framer-motion';
import { Database, Share2, FileSearch, Key } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Database,
      title: 'Fortified Storage for Your Documents',
      description:
        'Encrypt and store your vital career documents (PDFs, JPEGs, PNGs) with robust AWS S3 streaming and robust security.',
      color: '#4c6dfe',
    },
    {
      icon: Share2,
      title: 'Share What You Want, When You Want',
      description:
        'Leverage reusable templates or create ad-hoc bundles for frictionless, yet securely controlled sharing with tokenized access.',
      color: '#5f7dff',
    },
    {
      icon: FileSearch,
      title: 'Transparency You Can Trust',
      description:
        'Maintain complete visibility with immutable audit logs, detailing every document interaction for ultimate accountability.',
      color: '#7291ff',
    },
    {
      icon: Key,
      title: 'Lifecycle Security for Your Data',
      description:
        'Manage your data\'s encryption with ease, from onboarding to status checks and secure disabling, ensuring continuous protection.',
      color: '#85a4ff',
    },
  ];

  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 gsap-fade-up">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-light text-gray-900 mb-6"
          >
            Your Secure <span className="font-normal text-[#4c6dfe]">Career Hub</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            CareerVault empowers you with a centralized vault, intelligent
            sharing, and uncompromised security.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl border border-gray-100 hover:border-[#4c6dfe]/30 hover:shadow-2xl overflow-hidden"
                style={{ transition: 'all 0.4s ease' }}
              >
                {/* Animated gradient background on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#4c6dfe]/5 to-transparent opacity-0 group-hover:opacity-100"
                  style={{ transition: 'opacity 0.4s ease' }}
                />
                
                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110"
                    style={{
                      backgroundColor: `${feature.color}15`,
                      transition: 'transform 0.4s ease',
                    }}
                  >
                    <Icon
                      className="w-8 h-8"
                      style={{ color: feature.color }}
                    />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

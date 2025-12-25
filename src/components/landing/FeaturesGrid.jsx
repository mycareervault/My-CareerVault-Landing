import { motion } from 'framer-motion';
import { Database, Key, Eye, Users, Smartphone, FileText } from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    {
      icon: Database,
      title: 'Unlimited Storage',
      description: 'Store all your career documents without any space limits',
    },
    {
      icon: Key,
      title: 'End-to-End Encryption',
      description: 'Military-grade security ensures your files remain completely private',
    },
    {
      icon: Eye,
      title: 'Complete Visibility',
      description: 'Track every action with immutable audit trails',
    },
    {
      icon: FileText,
      title: 'Smart Organization',
      description: 'Intelligent categorization makes finding documents effortless',
    },
    {
      icon: Users,
      title: 'Smart Sharing',
      description: 'Share documents securely with revocable access controls',
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description: 'Seamless experience across desktop, mobile, and tablet devices',
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Powerful by <span className="font-normal text-[#4c6dfe]">Design</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Every feature crafted with precision and purpose
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group p-10 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 rounded-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:border-[#4c6dfe] transition-all duration-300">
                  <Icon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-normal mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

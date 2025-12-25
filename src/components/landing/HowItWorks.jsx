import { motion } from 'framer-motion';
import { Upload, Shield, Share2, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      number: '01',
      title: 'Upload',
      description: 'Securely upload your documents with drag-and-drop simplicity',
    },
    {
      icon: Shield,
      number: '02',
      title: 'Protect',
      description: 'Automatic encryption ensures your data remains private',
    },
    {
      icon: Share2,
      number: '03',
      title: 'Share',
      description: 'Control access with granular permissions and time limits',
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Monitor',
      description: 'Track every interaction with comprehensive audit logs',
    },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Elegantly <span className="font-normal text-[#4c6dfe]">Simple</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Four steps to complete document security
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border border-gray-200 mb-6 group-hover:border-[#4c6dfe] transition-all duration-300">
                    <Icon className="w-7 h-7 text-gray-900" />
                  </div>
                  <div className="text-7xl font-light text-gray-100 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-normal mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-gray-300 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

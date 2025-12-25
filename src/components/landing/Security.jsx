import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption for all your documents',
    },
    {
      icon: Eye,
      title: 'Immutable Audit Logs',
      description: 'Complete transparency and accountability',
    },
    {
      icon: Shield,
      title: 'Revocable Sharing',
      description: 'Control access anytime, anywhere',
    },
    {
      icon: CheckCircle2,
      title: 'GDPR & SOC2 Ready',
      description: 'Built for enterprise compliance',
    },
  ];

  return (
    <section id="security" className="py-32 bg-gradient-to-br from-[#f8f9ff] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4c6dfe]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4c6dfe]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 gsap-fade-up">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-light text-gray-900 mb-6"
          >
            Built for{' '}
            <span className="font-normal text-[#4c6dfe]">
              Enterprise-Grade Compliance
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            CareerVault is architected with security and compliance at its
            foundation. Benefit from end-to-end encryption, robust access
            controls, and detailed auditability.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-2xl border border-gray-100"
                style={{ transition: 'all 0.3s ease' }}
              >
                <div className="w-14 h-14 bg-[#4c6dfe]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-[#4c6dfe]" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-light text-gray-900 mb-4">
                Ready to secure your{' '}
                <span className="font-normal text-[#4c6dfe]">professional future</span>?
              </h3>
              <p className="text-gray-600">
                Join professionals and enterprises who are already protecting their
                career documents with military-grade security.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-[#4c6dfe] hover:bg-[#3d5ce6] text-white px-8 py-6 whitespace-nowrap"
              style={{ transition: 'all 0.3s ease' }}
            >
              Learn More About Our Security
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
